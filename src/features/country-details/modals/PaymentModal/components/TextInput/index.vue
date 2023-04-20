<script setup lang='ts'>
defineProps<{
    label: string;
    modelValue: string;
}>();
defineEmits<{ (event: 'update'): void; }>();
</script>

<template>
    <div :class='$style[`input-container`]'>
        <label :class='$style[`input-label`]'>
            {{ label }}
        </label>
        <input
            type='text'
            :class='$style[`text-input`]'
            :value=modelValue
            @input='$emit(`update:modelValue`, $event.target.value)'
        />
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
.text-input {
    width: 100%;

    background-color: #EBEBEB;
    border-radius: 5px;
    padding: 10px;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #33363D;
}

.input-label,
.text-input {
    display: block;
}
</style>
