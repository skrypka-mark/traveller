<script setup lang='ts'>
import Loader from '@/components/Loader';
import { getFullImagePath } from '@/utils/getFullImagePath';

import CheckMarkIcon from '@/features/country-details/modals/PaymentModal/components/icons/CheckMarkIcon';
import CrossIcon from '@/features/country-details/modals/PaymentModal/components/icons/CrossIcon';

interface ITextInputProps {
    type?: 'string' | 'number' | '';
    label?: string;
    placeholder?: string;
    modelValue: string;
    rightImage?: string;
    mask?: string;
    loading?: boolean;
    success?: boolean;
    error?: boolean;
    helperText?: string;
}

const props = withDefaults(defineProps<ITextInputProps>(), { mask: `{{${'*'.repeat(50)}}}` });
defineEmits<{ (event: 'update:modelValue'): void; }>();

const getDefaultMaskValue = () => {
    const types: { string: string; number: number; default: string; } = {
        string: 'A',
        number: 9,
        default: '*'
    };
    
    return `{{${`${ props.type ? types[props.type] : types.default }`.repeat(50)}}}`;
};
</script>

<template>
    <div :class='$style[`input-container`]'>
        <label :class='$style[`input-label`]' v-if=label>
            {{ label }}
        </label>
        <div :class='$style[`text-input-container`]'>
            <input
                type='text'
                :class='[$style[`text-input`], { [$style.success]: success, [$style.error]: error }]'
                :value=modelValue
                :placeholder=placeholder
                @input='$emit(`update:modelValue`, $event.target.value)'
                v-mask='mask ? mask : getDefaultMaskValue()'
            />
            <Transition name='fade-filter' mode='out-in'>
                <p :class='$style[`error-text`]' v-if='helperText && error'>
                    {{ helperText }}
                </p>
            </Transition>
            <div :class='$style[`right-image`]'>
                <Transition name='fade-filter-scale' mode='out-in'>
                    <div v-if=loading>
                        <Loader :class='[$style.spinner]' />
                    </div>
                    <CheckMarkIcon v-else-if=success />
                    <CrossIcon v-else-if=error />
                </Transition>
            </div>
            <Transition name='fade-filter-scale' mode='out-in'>
                <img :src=getFullImagePath(rightImage) :class='$style[`right-image`]' v-if=rightImage />
            </Transition>
        </div>
    </div>
</template>

<style lang='scss'>
.fade-filter-scale {
    &-enter-active,
    &-leave-active {
        transition: all .2s ease-out;
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
        scale: .6;
        filter: blur(3px);
    }
}

.fade-filter {
    &-enter-active,
    &-leave-active {
        transition: all .2s ease-out;
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
        filter: blur(3px);
    }
}
</style>

<style lang='scss' module>
.input-container {}
.input-label {
    margin-bottom: 5px;

    font-weight: 200;
    font-size: 14px;
    line-height: 17px;

    color: #33363D;
}
.text-input-container {
    --text-input-padding: 8px;

    position: relative;

    .text-input {
        width: 100%;

        background-color: #EBEBEB;
        border-radius: 5px;
        padding: var(--text-input-padding);
        outline: 1px solid transparent;
        transition: all .2s ease-in-out;

        font-family: 'Montserrat-Regular';
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #33363D;

        &::placeholder {
            color: var(--color-input-placeholder);
        }

        &.success {
            outline: 1px solid #34B806;
        }
        &.error {
            outline: 1px solid #E81A1A;
        }
    }
    .error-text {
        position: absolute;
        top: 100%;

        font-size: 12px;
        color: red;
    }
    .right-image {
        position: absolute;
        top: 50%;
        right: var(--text-input-padding);
        translate: 0 -50%;
    }
    .spinner {
        width: 16px;
        height: 16px;

        opacity: .5;
    }
}

.input-label,
.text-input {
    display: block;
}
</style>
