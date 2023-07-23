<script setup lang='ts'>
import { ref, computed } from 'vue';
import { usePaymentForm } from '@/composables/usePaymentForm';

import Modal from '@/components/Modal';

import Section from '@/features/country-details/modals/PaymentModal/components/Section';
import TextInput from '@/features/country-details/modals/PaymentModal/components/TextInput';
import Button from '@/features/country-details/modals/PaymentModal/components/Button';
import CountWithLabel from '@/features/country-details/modals/PaymentModal/components/CountWithLabel';
import PriceListPopup from '@/features/country-details/modals/PaymentModal/components/PriceListPopup';

import OptionsIcon from '@/components/icons/OptionsIcon';

import { toast } from '@/plugins/toast';
import { formatCurrencyNumber } from '@/utils';

defineProps<{ open: boolean; }>();
const emits = defineEmits<{ (event: 'close'): void; }>();

const {
    activeCard, formData, errors, isFetching,
    isDiscountCodeValid, numberOfPersonsSum,
    numberOfDaysSum, total, isFormValid,
    incrementNumberOfPersons, decrementNumberOfPersons,
    incrementNumberOfDays, decrementNumberOfDays,
    resetNumberOfPersons, resetNumberOfDays,
    inputCreditCardHandler, inputDiscountCodeHandler
} = usePaymentForm();
const isOptionsPopupOpen = ref<boolean>(false);
const optionsBtnRef = ref<HTMLButtonElement | null>(null);
const optionsPopupPosition = computed(() => {
    const optionsBtnRect = optionsBtnRef.value?.getBoundingClientRect();

    if(!optionsBtnRect) return { top: 0, left: 0 };

    return { top: optionsBtnRect.top + optionsBtnRect.height + 10, left: optionsBtnRect.left + optionsBtnRect.width };
});

const formSubmitHandler = () => {
    if(!isFormValid.value) return toast.error('Payment declined');

    toast.success('Payment successful');
    emits('close');
};
const toggleOptionsPopup = (value?: boolean) => {
    isOptionsPopupOpen.value = typeof value === 'boolean' ? value : !isOptionsPopupOpen.value;
};
</script>

<template>
    <Modal :open=open @close='emits(`close`)'>
        <form :class='$style[`payment-modal-form`]' @submit.prevent=formSubmitHandler>
            <Section title='Payment Details' :separator=true>
                <div :class='$style[`inputs-container`]'>
                    <TextInput label='E-mail*' type='string' placeholder='sam_smith@gmail.com' v-model=formData.email />
                    <TextInput label='Name on card*' type='string' placeholder='Sam Smith' v-model=formData.nameOnCard />
                    <TextInput
                        label='Card number*'
                        placeholder='1234 5678 9012 3456'
                        :modelValue=formData.cardNumber
                        mask='{{9999}} {{9999}} {{9999}} {{9999}}'
                        :right-image='activeCard?.image'
                        @input=inputCreditCardHandler($event)
                    />

                    <div :class='$style[`expiration-date-cvv-container`]'>
                        <div :class='$style[`expiration-date-input`]'>
                            <TextInput
                                label='Expiration date*'
                                placeholder='06'
                                v-model=formData.expirationDate.month
                                mask='{{99}}'
                            />
                            <TextInput
                                placeholder='2023'
                                v-model=formData.expirationDate.year
                                mask='{{9999}}'
                            />
                        </div>
                        <TextInput label='CVV*' placeholder='•••' v-model=formData.cvv mask='{{999}}' />
                    </div>
                </div>
                <Button :class='$style[`payment-btn`]' :disabled=!isFormValid>
                    Payment
                </Button>
            </Section>
            <div :class='$style[`order-section`]'>
                <Section title='Order' style='width: 100%;'>
                    <template #right-title>
                        <button
                            :class='$style[`options-btn`]'
                            :style='{ pointerEvents: isOptionsPopupOpen ? "none" : "auto" }'
                            ref=optionsBtnRef
                            @click.prevent=toggleOptionsPopup()
                        >
                            <OptionsIcon />
                        </button>
                        <PriceListPopup
                            :open=isOptionsPopupOpen
                            :top=optionsPopupPosition.top
                            :left=optionsPopupPosition.left
                            @close=toggleOptionsPopup(false)
                        />
                    </template>
                    <div :class='$style[`inputs-container`]'>
                        <CountWithLabel
                            label='Number of persons'
                            :value=formData.numberOfPersons
                            :result='numberOfPersonsSum'
                            currency-symbol='$'
                            @decrement=decrementNumberOfPersons
                            @increment=incrementNumberOfPersons
                            @reset=resetNumberOfPersons
                        />
                        <CountWithLabel
                            label='Number of rest days'
                            :value=formData.numberOfDays
                            :result='numberOfDaysSum'
                            currency-symbol='$'
                            @decrement=decrementNumberOfDays
                            @increment=incrementNumberOfDays
                            @reset=resetNumberOfDays
                        />
                        <TextInput
                            label='Discount code'
                            type='string'
                            placeholder='h$jkd8FjdM'
                            :modelValue=formData.discountCode
                            :loading=isFetching
                            :success=isDiscountCodeValid
                            :error='!isDiscountCodeValid && !!formData.discountCode'
                            :helperText=errors.discountCode
                            @input=inputDiscountCodeHandler
                        />
                    </div>
                </Section>
                <ul :class='$style[`invoice-container`]'>
                    <li :class='$style[`invoice-item`]'>
                        <p>For people</p>
                        <p>
                            {{ formatCurrencyNumber(numberOfPersonsSum, 'USD') }}
                        </p>
                    </li>
                    <li :class='$style[`invoice-item`]'>
                        <p>For days</p>
                        <p>
                            {{ formatCurrencyNumber(numberOfDaysSum, 'USD') }}
                        </p>
                    </li>
                    <hr />
                    <li :class='$style[`invoice-item`]'>
                        <h3>Total</h3>
                        <h3>
                            {{ formatCurrencyNumber(total, 'USD') }}
                        </h3>
                    </li>
                </ul>
            </div>
        </form>
    </Modal>
</template>

<style lang='scss' module src='./styles.module.scss' />
