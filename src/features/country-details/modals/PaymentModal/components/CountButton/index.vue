<script setup lang='ts'>
defineProps<{ symbol: string }>();
defineEmits<{ (event: 'click'): void }>();
</script>

<template>
    <button :class='$style[`payment-modal-btn`]' :data-content=symbol @click.prevent='$emit(`click`)'>
        <slot />
    </button>
</template>

<style lang='scss' module src='./styles.module.scss' />
