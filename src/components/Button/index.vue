<script setup lang='ts'>
import Typography from '@/components/Typography';
</script>

<template>
    <button :class='$style.btn'>
        <Typography variant='button'>
            <slot />
        </Typography>
    </button>
</template>

<style lang='scss' module src='./styles.module.scss' />
