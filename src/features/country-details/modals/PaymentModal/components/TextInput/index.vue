<script setup lang='ts'>
import { ref, type Ref } from 'vue';
import Loader from '@/components/Loader';
import { getFullImagePath } from '@/utils/getFullImagePath';

import CheckMarkIcon from '@/components/icons/CheckMarkIcon';
import CrossIcon from '@/components/icons/CrossIcon';

interface ITextInputProps {
    type?: 'string' | 'number' | '';
    label?: string;
    placeholder?: string;
    modelValue: string | number | null;
    rightImage?: string;
    mask?: string;
    loading?: boolean;
    success?: boolean | null;
    error?: boolean;
    helperText?: string | string[];
}

const props = withDefaults(defineProps<ITextInputProps>(), { mask: `{{${'*'.repeat(50)}}}` });
const emits = defineEmits<{ (event: 'update:modelValue', value: string): void; }>();

const textInputRef = ref<Ref | null>(null);

const getDefaultMaskValue = () => {
    const types: { string: string; number: number; default: string; } = {
        string: 'A',
        number: 9,
        default: '*'
    };
    
    return `{{${`${ props.type ? types[props.type] : types.default }`.repeat(50)}}}`;
};

const inputHanlder = (event: Event) => {
    const { value = '' } = event.target as HTMLInputElement;
    emits('update:modelValue', value);
};

const resetInputHanlder = () => {
    textInputRef.value.value = '';
    emits('update:modelValue', '');
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
                ref=textInputRef
                @input=inputHanlder
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
                        <Loader :class='$style.spinner' />
                    </div>
                    <CheckMarkIcon v-else-if=success />
                    <CrossIcon @click=resetInputHanlder v-else-if=error />
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

<style lang='scss' module src='./styles.module.scss' />
