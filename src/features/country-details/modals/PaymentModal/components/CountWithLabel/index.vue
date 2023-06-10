<script setup lang='ts'>
import { computed, watch, reactive } from 'vue';
import CountButton from '@/features/country-details/modals/PaymentModal/components/CountButton';

import CrossCircleIcon from '@/components/icons/CrossCircleIcon';

type Value = string | number;
interface ICountWithLabelProps {
    label: string;
    value: Value;
    result: string;
    currencySymbol: string;
}

const props = defineProps<ICountWithLabelProps>();
defineEmits<{
    (event: 'decrement'): void;
    (event: 'increment'): void;
    (event: 'reset'): void;
}>();

// const splittedValue = computed(() => String(props.value).split(''));
const splitValue = (value: Value) => String(value).split('');
const getNumberFromStringArray = (arr: string[]): number => +arr.reduce((prev, cur) => prev + cur, '');

const splittedValue = reactive({
    previous: splitValue(0),
    current: splitValue(props.value)
})
const splittedResult = reactive({
    previous: splitValue(0),
    current: splitValue(props.result)
})

watch(() => props.value, (curValue: Value, prevValue: Value) => {
    splittedValue.previous = splitValue(prevValue);
    splittedValue.current = splitValue(curValue);
});
watch(() => props.result, (curValue: Value, prevValue: Value) => {
    splittedResult.previous = splitValue(prevValue);
    splittedResult.current = splitValue(curValue);
});

const valueUnitTransitionName = computed(() => {
    return getNumberFromStringArray(splittedValue.current) >= getNumberFromStringArray(splittedValue.previous) ? 'count-up' : 'count-down';
});
const resultUnitTransitionName = computed(() => {
    return getNumberFromStringArray(splittedResult.current) >= getNumberFromStringArray(splittedResult.previous) ? 'count-up' : 'count-down';
});
</script>

<template>
    <div :class='$style[`labeled-count`]'>
        <label :class='$style[`count-label`]'>
            {{ label }}
        </label>
        <div :class='$style.count'>
            <div :class='$style[`count-container`]'>
                <CountButton symbol='-' @click='$emit(`decrement`)' />
                <span :class='$style[`count-value`]'>
                    <span :key=idx v-for='(unit, idx) in splittedValue.current' style='perspective: 240px;'>
                        <Transition :name=valueUnitTransitionName mode='out-in'>
                            <span :key=unit style='display: inline-block;' :style='{ transitionDelay: `${.05 * idx}s` }'>
                                {{ unit }}
                            </span>
                        </Transition>
                    </span>
                </span>
                <CountButton symbol='+' @click='$emit(`increment`)' />
            </div>
            <div :class='$style[`count-result`]'>
                <span>
                    <span>
                        {{ currencySymbol }}
                    </span>
                    <span :key=idx v-for='(unit, idx) in splittedResult.current' style='perspective: 240px;'>
                        <Transition :name=resultUnitTransitionName mode='out-in'>
                            <span :key=unit style='display: inline-block;' :style='{ transitionDelay: `${.05 * idx}s` }'>
                                {{ unit }}
                            </span>
                        </Transition>
                    </span>
                </span>
                <CrossCircleIcon :class='$style[`reset-result-icon`]' @click='$emit(`reset`)' />
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
.count-up {
    &-enter-active,
    &-leave-active {
        transition: .2s ease-in-out;
    }

    &-enter-from {
        transform: translateY(-50%) rotateX(45deg);
        opacity: 0;
    }
    &-leave-to {
        transform: translateY(50%) rotateX(45deg);
        opacity: 0;
    }
}

.count-down {
    &-enter-active,
    &-leave-active {
        transition: .2s ease-in-out;
    }

    &-enter-from {
        transform: translateY(50%) rotateX(45deg);
        opacity: 0;
    }
    &-leave-to {
        transform: translateY(-50%) rotateX(45deg);
        opacity: 0;
    }
}

.count {
    &-enter-active,
    &-leave-active {
        transition: .2s ease;
    }

    &-enter-from {
        transform: translateY(50%);
        opacity: 0;
    }
    &-leave-to {
        transform: translateY(-50%);
        opacity: 0;
    }
}
</style>
<style lang='scss' module>
.labeled-count {

    .count-label {
        margin-bottom: 5px;

        font-weight: 200;
        font-size: 14px;
        line-height: 17px;

        color: #33363D;
    }
    .count {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .count-container {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 110px;

            .count-value {
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                color: #33363D;
            }
        }
        .count-result {
            display: flex;
            align-items: center;
            gap: 10px;

            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #33363D;

            .reset-result-icon {
                cursor: pointer;
            }
        }
    }
}
</style>
