<script setup lang='ts'>
import { usePaymentForm } from '@/features/country-details/composables/usePaymentForm';

import Modal from '@/components/Modal';
import Section from '@/features/country-details/modals/PaymentModal/components/Section';
import TextInput from '@/features/country-details/modals/PaymentModal/components/TextInput';
import Button from '@/features/country-details/modals/PaymentModal/components/Button';
import CountWithLabel from '@/features/country-details/modals/PaymentModal/components/CountWithLabel';

import OptionsIcon from '@/components/icons/OptionsIcon';

import { creditCards } from '@/constants';

defineProps<{ open: boolean; }>();

const formData = usePaymentForm();

const formSubmitHandler = () => {};
const formatCardNumber = (cardNumber: string): string => {

    creditCards.list.forEach((card, index) => {
        if(cardNumber.match(new RegExp(card.verification))) creditCards.active = index;
    });

    const cardKey = creditCards.active !== null ? creditCards.active : 1;

    if(!cardKey) return cardNumber;
    
    console.log(creditCards.list[cardKey]);
    console.log(new RegExp(creditCards.list[cardKey].separation).exec(cardNumber));

    console.log(formData.cardNumber);

    return new RegExp(creditCards.list[cardKey].separation).exec(cardNumber) ? cardNumber + ' ' : cardNumber;
};

const onePersonPrice = 150;
const oneDayPrice = 50;
</script>

<template>
    <Modal :open=open>
        <form :class='$style[`payment-modal-form`]' @submit.prevent=formSubmitHandler>
            <Section title='Payment Details' :separator=true>
                <div :class='$style[`inputs-container`]'>
                    <TextInput label='Name on card' v-model=formData.nameOnCard />
                    <TextInput label='Card number' :modelValue=formatCardNumber(formData.cardNumber) @input='formData.cardNumber = $event.target.value.replace(` `, ``)' />

                    <div :class='$style[`expiration-date-cvv-container`]'>
                        <div :class='$style[`expiration-date-input`]'>
                            <TextInput label='Expiration date' modelValue='07' />
                            <TextInput modelValue='2026' />
                        </div>
                        <TextInput label='CVV' modelValue='064' />
                    </div>
                </div>
                <Button :class='$style[`payment-btn`]'>Payment</Button>
            </Section>
            <Section title='Order'>
                <template #right-title>
                    <button :class='$style[`options-btn`]'>
                        <OptionsIcon />
                    </button>
                </template>
                <div :class='$style[`inputs-container`]'>
                    <CountWithLabel label='Number of persons' value='2' :result='`$${onePersonPrice * 2}`' />
                    <CountWithLabel label='Number of rest days' value='7' :result='`$${oneDayPrice * 7}`' />
                    <TextInput label='Discount code' modelValue='Mark68Travel' :loading=true />
                </div>
                <ul :class='$style[`invoice-container`]'>
                    <li :class='$style[`invoice-item`]'>
                        <p>For people</p>
                        <p>$300</p>
                    </li>
                    <li :class='$style[`invoice-item`]'>
                        <p>For days</p>
                        <p>$350</p>
                    </li>
                    <hr />
                    <li :class='$style[`invoice-item`]'>
                        <h3>Total</h3>
                        <h3>$650</h3>
                    </li>
                </ul>
            </Section>
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

    .invoice-container {
        display: flex;
        flex-direction: column;
        gap: 5px;

        & > hr {
            margin-block: 5px;
            border: 0;
            height: 1px;
            background-image: linear-gradient(to right, transparent, rgba(51, 54, 61, .4) 7% 93%, transparent);
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
</style>
