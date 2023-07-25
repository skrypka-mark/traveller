import { reactive, ref, computed } from 'vue';
import { withMinimumValue } from '@/utils';

import { creditCards, type ICreditCard } from '@/constants';

type PaymentFormData = {
    email: string;
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
type PaymentFormDataErrors = {
    email: string | string[];
    nameOnCard: string | string[];
    cardNumber: string | string[];
    expirationDate: {
        month: string | string[];
        year: string | string[];
    },
    cvv: string | string[];
    numberOfPersons: string | string[];
    numberOfDays: string | string[];
    discountCode: string | string[];
}

const onePersonPrice = 150;
const oneDayPrice = 50;
const VALID_DISCOUNT_CODE = 'Mark68Travel';

export const usePaymentForm = () => {
    const activeCard = ref<ICreditCard | null>(null);
    const errors = reactive<PaymentFormDataErrors>(Object());
    const formData: PaymentFormData = reactive({
        email: '',
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
    const isFetching = ref<boolean>(false);
    const isDiscountCodeValid = ref<boolean | null>(null);

    const numberOfPersonsSum = computed(() => withMinimumValue(formData.numberOfPersons) * onePersonPrice);
    const numberOfDaysSum = computed(() => withMinimumValue(formData.numberOfDays) * oneDayPrice);
    const total = computed(() => numberOfPersonsSum.value + numberOfDaysSum.value);
    const isFormValid = computed<boolean>(() => {
        return !!formData.email && !!formData.nameOnCard && !!formData.cardNumber && !!formData.expirationDate.month && !!formData.expirationDate.year &&
            !!formData.cvv && (formData.discountCode === '' ? true : !!isDiscountCodeValid.value);
    });

    const incrementNumberOfPersons = () => {
        formData.numberOfPersons++;
    };
    const decrementNumberOfPersons = () => {
        formData.numberOfPersons--;
        formData.numberOfPersons = withMinimumValue(formData.numberOfPersons);
    };
    const resetNumberOfPersons = () => {
        formData.numberOfPersons = 1;
    };

    const incrementNumberOfDays = () => {
        formData.numberOfDays++;
    };
    const decrementNumberOfDays = () => {
        formData.numberOfDays--;
        formData.numberOfDays = withMinimumValue(formData.numberOfDays);
    };
    const resetNumberOfDays = () => {
        formData.numberOfDays = 1;
    };


    const inputCreditCardHandler = ({ target }: { target: HTMLInputElement }) => {
        const { value } = target;
        const card = value.replace(/[^0-9]/g, '');
    
        formData.cardNumber = value;
        
        for(let i = 0; i < creditCards.length; i++) {
            if(card.match(new RegExp(creditCards[i].verification))) {
                activeCard.value = creditCards[i];
                return;
            }
        }
    
        activeCard.value = null;
    };
    const inputDiscountCodeHandler = async ({ target }: { target: HTMLInputElement }) => {
        const { value } = target;
        formData.discountCode = value.trim();

        let timeout;
        clearTimeout(timeout);

        isFetching.value = true;
        isDiscountCodeValid.value = await new Promise(resolve => {
            timeout = setTimeout(() => {
                if(formData.discountCode === VALID_DISCOUNT_CODE || formData.discountCode === '') resolve(true);
                else resolve(false);
            }, 1000);
        });
        isFetching.value = false;

        errors.discountCode = !isDiscountCodeValid.value ? 'Discount code is invalid' : '';
    };

    return {
        activeCard, formData, errors, isFetching,
        isDiscountCodeValid, numberOfPersonsSum,
        numberOfDaysSum, total, isFormValid,
        incrementNumberOfPersons, decrementNumberOfPersons,
        incrementNumberOfDays, decrementNumberOfDays,
        resetNumberOfPersons, resetNumberOfDays,
        inputCreditCardHandler, inputDiscountCodeHandler
    };
};
