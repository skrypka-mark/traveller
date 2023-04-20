<script setup lang='ts'>
import CountButton from '@/features/country-details/modals/PaymentModal/components/CountButton';

import CrossCircleIcon from '@/components/icons/CrossCircleIcon';

defineProps<{
    label: string;
    value: string | number;
    result: string;
}>();
</script>

<template>
    <div :class='$style[`labeled-count`]'>
        <label :class='$style[`count-label`]'>
            {{ label }}
        </label>
        <div :class='$style.count'>
            <div :class='$style[`count-container`]'>
                <CountButton symbol='-' />
                <span :class='$style[`count-value`]'>
                    {{ value }}
                </span>
                <CountButton symbol='+' />
            </div>
            <div :class='$style[`count-result`]'>
                <span>
                    {{ result }}
                </span>
                <CrossCircleIcon :class='$style[`reset-result-icon`]' />
            </div>
        </div>
    </div>
</template>

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
            gap: 15px;

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
