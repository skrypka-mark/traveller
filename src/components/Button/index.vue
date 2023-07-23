<script setup lang='ts'>
import Typography from '@/components/Typography';

const emits = defineEmits<{ (event: 'click'): void }>();
</script>

<template>
    <button :class='$style.btn' @click.prevent='emits(`click`)'>
        <Typography variant='button'>
            <slot />
        </Typography>
    </button>
</template>

<style lang='scss' module src='./styles.module.scss' />
