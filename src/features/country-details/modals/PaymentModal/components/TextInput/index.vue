<script setup lang='ts'>
import Loader from '@/components/Loader';

defineProps<{
    label?: string;
    modelValue: string;
    loading?: boolean;
}>();
defineEmits<{ (event: 'update:modelValue'): void; }>();
</script>

<template>
    <div :class='$style[`input-container`]'>
        <label :class='$style[`input-label`]' v-if=label>
            {{ label }}
        </label>
        <div :class='$style[`text-input-container`]'>
            <input
                type='text'
                :class='$style[`text-input`]'
                :value=modelValue
                @input='$emit(`update:modelValue`, $event.target.value)'
            />
            <Loader :class='$style.spinner' v-if=loading />
        </div>
    </div>
</template>

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

        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #33363D;
    }
    .spinner {
        position: absolute;
        top: 50%;
        right: var(--text-input-padding);
        translate: 0 -50%;

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
