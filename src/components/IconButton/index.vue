<script setup lang='ts'>
import { type Component } from 'vue';

interface IIconButtonProps {
    Icon: Component;
}

defineProps<IIconButtonProps>();
</script>

<template>
    <button :class='$style[`icon-button`]'>
        <component :is=Icon v-if=Icon />
    </button>
</template>

<style lang='scss' module src='./styles.module.scss' />
