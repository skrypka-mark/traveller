import { reactive, watch } from 'vue';

type PaymentFormData = {
    nameOnCard: string;
    cardNumber: string;
    expirationDate: {
        month: number | null;
        year: number | null;
    },
    cvv: number | null;
    numberOfPersons: number;
    numberOfDays: number;
    discountCode: string;
}

export const usePaymentForm = () => {
    const formData: PaymentFormData = reactive({
        nameOnCard: '',
        cardNumber: '',
        expirationDate: {
            month: null,
            year: null
        },
        cvv: null,
        numberOfPersons: 1,
        numberOfDays: 1,
        discountCode: ''
    });

    watch(formData, val => {
        console.log(val.nameOnCard);
    });

    return formData;
};
