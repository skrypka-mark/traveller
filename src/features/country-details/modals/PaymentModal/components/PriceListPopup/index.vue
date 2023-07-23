<script setup lang='ts'>
import { computed, toRaw } from 'vue';
import { usePriceList } from '@/composables/usePriceList';
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
defineEmits<{ (event: 'close'): void; }>();

const priceList = usePriceList();

const totalAmount = computed(() => {
    let totalValue = 0;
    for(const optionName in priceList) {
        const options: IOptionItem[] = priceList[optionName as keyof typeof priceList].options;
        totalValue += options.reduce((prev: number, cur: IOptionItem) => cur?.value ? prev + (cur.value * cur.counter.value) : prev, 0);
    }

    return totalValue;
});
</script>

<template>
    <Popup
        :open=open
        title='Price list'
        :top=top
        :left=left
        @close='$emit(`close`)'
    >
    <!-- <Popup
        :open=true
        title='Price list'
        :top=top
        :left=left
        @close='$emit(`close`)'
    > -->
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
                    <Transition name='filter-number' mode='out-in'>
                        <div :key=totalAmount class='inline-block'>
                            {{ formatCurrencyNumber(totalAmount) }}
                        </div>
                    </Transition>
                </Typography>
            </div>
        </template>
    </Popup>
</template>

<style lang='scss' module src='./styles.module.scss' />
