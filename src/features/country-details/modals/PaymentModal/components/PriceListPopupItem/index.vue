<script setup lang='ts'>
import type { Ref } from 'vue';
import Typography from '@/components/Typography';
import CountWithLabel from '@/features/country-details/modals/PaymentModal/components/CountWithLabel';
import FiveStars from '@/features/country-details/modals/PaymentModal/components/FiveStars';
import { formatCurrencyNumber, withMinimumValue } from '@/utils';

export interface IOptionItem {
    label?: string;
    value?: number;
    counter: Ref<number>;
    stars?: boolean;
    starsAmount?: Ref<number>;
}

interface IPriceListPopupItemProps {
    title: string;
    options?: IOptionItem[];
}

defineProps<IPriceListPopupItemProps>();

const decrement = (option: IOptionItem) => {
    option.counter.value--;
    option.counter.value = withMinimumValue(option.counter.value, 0);
};

const setStarsAmount = (option: IOptionItem) => (amount: number) => {
    if(isNaN(option?.starsAmount!.value)) return;
    option.starsAmount!.value = +amount;
};
</script>

<template>
    <section :class='$style[`option-section`]'>
        <Typography :class='$style[`section-option-title`]' variant='h5' dark>
            {{ title }}
        </Typography>
        <ul>
            <li :key=option.label :class='$style[`option-item`]' v-for='option in options'>
                <Typography variant='body' dark v-if=!!option.label>
                    {{ option.label }}
                </Typography>
                <FiveStars
                    :amount=option.starsAmount
                    :counter=option.counter
                    @click='(index: number) => setStarsAmount(option)(index)'
                    v-if=option.stars
                />
                <div :class='$style[`count-block`]'>
                    <Typography variant='body' dark v-if=!!option.value>
                        <Transition name='filter-number' mode='out-in'>
                            <div :key=option.counter.value class='inline-block'>
                                {{ option.counter.value ? formatCurrencyNumber(option.value * option.counter.value) : '-' }}
                            </div>
                        </Transition>
                    </Typography>
                    <CountWithLabel
                        :value=option.counter.value
                        :group-class='$style[`popup-count-group`]'
                        :btn-class='$style[`popup-count-btn`]'
                        @decrement=decrement(option)
                        @increment=option.counter.value++
                    />
                </div>
            </li>
        </ul>
    </section>
</template>

<style lang='scss' module src='./styles.module.scss' />
