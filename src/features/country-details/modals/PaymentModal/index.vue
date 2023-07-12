<script setup lang='ts'>
import { ref, computed } from 'vue';
import { usePaymentForm } from '@/features/country-details/composables/usePaymentForm';

import Modal from '@/components/Modal';
import Popup from '@/components/Popup';
import Typography from '@/components/Typography';

import Section from '@/features/country-details/modals/PaymentModal/components/Section';
import TextInput from '@/features/country-details/modals/PaymentModal/components/TextInput';
import Button from '@/features/country-details/modals/PaymentModal/components/Button';
import CountWithLabel from '@/features/country-details/modals/PaymentModal/components/CountWithLabel';

import OptionsIcon from '@/components/icons/OptionsIcon';

import { formatCurrencyNumber } from '@/utils/formatCurrencyNumber';

defineProps<{ open: boolean; }>();

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

const formSubmitHandler = () => {};
const toggleOptionsPopup = (value?: boolean) => {
    isOptionsPopupOpen.value = typeof value === 'boolean' ? value : !isOptionsPopupOpen.value;
};
</script>

<template>
    <Modal :open=open>
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
                        :right-image='activeCard && activeCard.image'
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
                <Button :class='$style[`payment-btn`]' :disabled=!isFormValid>Payment</Button>
            </Section>
            <div :class='$style[`order-section`]'>
                <Section title='Order' style='width: 100%;'>
                    <template #right-title>
                        <button
                            :class='$style[`options-btn`]'
                            :style='{ pointerEvents: isOptionsPopupOpen ? "none" : "auto" }'
                            ref=optionsBtnRef
                            @click=toggleOptionsPopup()
                        >
                            <OptionsIcon />
                        </button>
                        <Popup
                            :open=true
                            :top=optionsPopupPosition.top
                            :left=optionsPopupPosition.left
                            @close=toggleOptionsPopup(false)
                        >
                        <!-- <Popup
                            :open=isOptionsPopupOpen
                            :top=optionsPopupPosition.top
                            :left=optionsPopupPosition.left
                            @close=toggleOptionsPopup(false)
                        > -->

                            <div :class='$style[`popup-content`]'>
                                <Typography :class='$style[`popup-title`]' variant='h4' dark>Price list</Typography>
                                <section :class='$style[`option-section`]' >
                                    <Typography :class='$style[`section-option-title`]' variant='h5' dark>Airplane class</Typography>

                                    <ul>
                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>Economy class</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>50$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>

                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>First class</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>100$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>

                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>Business class</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>350$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section :class='$style[`option-section`]'>
                                    <Typography variant='h5' dark>Hotels</Typography>

                                    <CountWithLabel
                                        value='2'
                                        :group-class='$style[`popup-count-group`]'
                                        :btn-class='$style[`popup-count-btn`]'
                                        @decrement=decrementNumberOfPersons
                                        @increment=incrementNumberOfPersons
                                        @reset=resetNumberOfPersons
                                    />
                                </section>

                                <section :class='$style[`option-section`]' >
                                    <Typography :class='$style[`section-option-title`]' variant='h5' dark>Entertainment</Typography>

                                    <ul>
                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>Excursion</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>20$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>

                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>Diving</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>85$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>

                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>Zoo</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>15$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>

                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>Akianarium</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>30$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>

                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>Museum</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>5$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>

                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>Yacht</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>250$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>

                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>Snowboard</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>62$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section :class='$style[`option-section`]' >
                                    <Typography :class='$style[`section-option-title`]' variant='h5' dark>Additional options</Typography>

                                    <ul>
                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>Translator</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>130$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>

                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>Taxi</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>25$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>

                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>Servant</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>200$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>

                                        <li :class='$style[`option-item`]'>
                                            <Typography variant='body' dark>Guide</Typography>

                                            <div :class='$style[`count-block`]'>
                                                <Typography variant='body' dark>70$</Typography>
                                            
                                                <CountWithLabel
                                                    value='2'
                                                    :group-class='$style[`popup-count-group`]'
                                                    :btn-class='$style[`popup-count-btn`]'
                                                    @decrement=decrementNumberOfPersons
                                                    @increment=incrementNumberOfPersons
                                                    @reset=resetNumberOfPersons
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </Popup>
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

<style lang='scss' module>
.payment-modal-form {
    display: flex;
    height: 100%;

    .expiration-date-cvv-container {
        display: flex;
        justify-content: space-between;

        input[type=text] {
            width: 100px;
            text-align: center;
        }
        .expiration-date-input {
            display: flex;
            align-items: flex-end;
            gap: 10px;
        }
    }
    .payment-btn {
        width: fit-content;
        margin-top: auto;
    }

    .order-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50%;

        .invoice-container {
            display: flex;
            flex-direction: column;
            gap: 5px;

            padding: 30px;
            padding-top: 0;

            & > hr {
                margin-block: 5px;
                border: 0;
                height: 1px;
                background-color: rgba(0, 0, 0, .1);
            }
            .invoice-item {
                display: flex;
                align-items: center;
                justify-content: space-between;

                & > p {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    color: #33363D;
                }
                & > h3 {
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 19px;
                    color: #33363D;
                }
            }
        }
    }

    .options-btn {
        background: none;
        cursor: pointer;
    }
}

.inputs-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
}

.popup-count-group {
    width: 72px !important;
}

.popup-count-btn {
    width: 25px;
}

.popup-content {
    padding: 15px;
}

.popup-title {
    text-align: center;
}

.option-section {
    margin: 15px 0 15px 0;
}

.section-option-title {
    margin: 15px 0 15px 0;
}

.option-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 13px;
}

.count-block {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
}
</style>
