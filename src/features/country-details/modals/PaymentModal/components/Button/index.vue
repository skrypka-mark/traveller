<script setup lang='ts'>
</script>

<template>
    <button :class='$style[`payment-modal-btn`]'>
        <slot />
    </button>
</template>

<style lang='scss' module>
.payment-modal-btn {
    background-color: #33363D;
    border-radius: 5px;
    padding: 10px 45px;
    transition: background-color .2s ease-in-out;
    cursor: pointer;

    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: white;

    &:hover {
        background-color: #1B1C1F;
    }
}
</style>
