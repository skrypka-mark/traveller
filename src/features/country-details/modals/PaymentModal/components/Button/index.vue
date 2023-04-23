<script setup lang='ts'>
defineProps<{ disabled: boolean; }>();
</script>

<template>
    <button :class='[$style[`payment-modal-btn`], { [$style.disabled]: disabled }]'>
        <slot />
    </button>
</template>

<style lang='scss' module>
.payment-modal-btn {
    background-color: #33363D;
    border-radius: 5px;
    padding: 10px 45px;
    transition: all .2s ease-in-out;
    cursor: pointer;

    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: white;

    &:not(.disabled):hover {
        background-color: #1B1C1F;
    }
    &.disabled {
        opacity: .5;
        cursor: not-allowed;
    }
}
</style>
