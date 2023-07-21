<script setup lang='ts'>
import { ref, computed } from 'vue';
import Popup from '@/components/Popup';
import Typography from '@/components/Typography';
import PriceListPopupItem, { type IOptionItem } from '@/features/country-details/modals/PaymentModal/components/PriceListPopupItem';
import { formatCurrencyNumber } from '@/utils';

interface IPriceListPopupProps {
    open: boolean;
    top: number;
    left: number;
}

defineProps<IPriceListPopupProps>();
defineEmits<{ (event: 'close'): void }>();

const priceList = {
    airplaneClasses: {
        title: 'Airplane class',
        options: [
            {
                label: 'Economy class',
                value: 25,
                counter: ref(2)
            },
            {
                label: 'First class',
                value: 50,
                counter: ref(2)
            },
            {
                label: 'Business class',
                value: 175,
                counter: ref(2)
            }
        ]
    },
    hotels: {
        title: 'Hotels',
        options: [{
            counter: ref(2),
            stars: true
        }]
    },
    entertainments: {
        title: 'Entertainment',
        options: [
            {
                label: 'Excursion',
                value: 10,
                counter: ref(2)
            },
            {
                label: 'Diving',
                value: 42.5,
                counter: ref(2)
            },
            {
                label: 'Zoo',
                value: 7.5,
                counter: ref(2)
            },
            {
                label: 'Akianarium',
                value: 15,
                counter: ref(2)
            },
            {
                label: 'Museum',
                value: 2.5,
                counter: ref(2)
            },
            {
                label: 'Yacht',
                value: 125,
                counter: ref(2)
            },
            {
                label: 'Snowboard',
                value: 31,
                counter: ref(2)
            }
        ]
    },
    additionalOptions: {
        title: 'Additional options',
        options: [
            {
                label: 'Translator',
                value: 65,
                counter: ref(2)
            },
            {
                label: 'Taxi',
                value: 12.5,
                counter: ref(2)
            },
            {
                label: 'Servant',
                value: 100,
                counter: ref(2)
            },
            {
                label: 'Guide',
                value: 35,
                counter: ref(2)
            }
        ]
    }
};

const totalAmount = computed(() => {
    let totalValue = 0;
    for(const optionName in priceList) {
        const options = priceList[optionName].options as IOptionItem[];
        totalValue += options.reduce((prev: number, cur: IOptionItem) => cur?.value ? prev + (cur.value * cur.counter.value) : prev, 0);
    }

    return totalValue;
});
</script>

<template>
    <!-- <Popup
        :open=open
        title='Price list'
        :top=top
        :left=left
        @close='$emit(`close`)'
    > -->
    <Popup
        :open=true
        title='Price list'
        :top=top
        :left=left
        @close='$emit(`close`)'
    >
        <div :class='$style[`options-container`]'>
            <PriceListPopupItem :title=priceList.airplaneClasses.title :options=priceList.airplaneClasses.options />
            <PriceListPopupItem :title=priceList.hotels.title :options=priceList.hotels.options :stars=true />
            <PriceListPopupItem :title=priceList.entertainments.title :options=priceList.entertainments.options />
            <PriceListPopupItem :title=priceList.additionalOptions.title :options=priceList.additionalOptions.options />
        </div>
        <template #footer>
            <div :class='$style[`popup-footer`]'>
                <Typography variant='h5' dark>Total:</Typography>
                <Typography variant='body' dark>
                    {{ formatCurrencyNumber(totalAmount) }}
                </Typography>
            </div>
        </template>
    </Popup>
</template>

<style lang='scss' module src='./styles.module.scss' />
