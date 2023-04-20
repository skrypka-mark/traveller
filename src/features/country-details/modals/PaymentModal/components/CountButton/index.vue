<script setup lang='ts'>
defineProps<{ symbol: string }>();
</script>

<template>
    <button :class='$style[`payment-modal-btn`]' :data-content=symbol>
        <slot />
    </button>
</template>

<style lang='scss' module>
.payment-modal-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    aspect-ratio: 1 / 1;

    background-color: #EBEBEB;
    border-radius: 5px;
    transition: background-color .2s ease-in-out;
    overflow: hidden;
    cursor: pointer;

    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #33363D;

    &:hover {
        background-color: #E3E3E3;
    }
    &::after {
        content: attr(data-content);
    }
}
</style>
