<script setup lang='ts'>
import { type Ref } from 'vue';
import Typography from '@/components/Typography';
import CountWithLabel from '@/features/country-details/modals/PaymentModal/components/CountWithLabel';
import { formatCurrencyNumber, withMinimumValue } from '@/utils';

import RoundStarIcon from '@/features/country-details/modals/PaymentModal/components/icons/RoundStarIcon';
import RoundStarBorderIcon from '@/features/country-details/modals/PaymentModal/components/icons/RoundStarBorderIcon';

export interface IOptionItem {
    label: string;
    value: number;
    counter: Ref;
    stars: boolean;
    decrement: () => void;
    increment: () => void;
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
                <div :class='$style[`stars-container`]' v-if=option.stars>
                    <RoundStarIcon />
                    <RoundStarIcon />
                    <RoundStarIcon />
                    <RoundStarBorderIcon />
                    <RoundStarBorderIcon />
                </div>
                <div :class='$style[`count-block`]'>
                    <Typography variant='body' dark v-if=!!option.value>
                        <Transition name='filter-value' mode='out-in'>
                            <span :key=option.counter.value>
                                {{ option.counter.value ? formatCurrencyNumber(option.value * option.counter.value) : '-' }}
                            </span>
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

<style lang='scss'>
.filter-value {
  &-enter-active,
  &-leave-active {
      transition: all .2s ease-out;
  }

  &-enter-from,
  &-leave-to {
      opacity: .7;
      filter: blur(5px);
  }
}
</style>
<style lang='scss' module src='./styles.module.scss' />
