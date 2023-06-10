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

<style lang='scss' module>
.btn {
    max-width: 300px;
    height: 70px;

    border: none;
    outline: none;

    background-color: #33363D;
    padding-inline: 45px;
    border-radius: 5px;
    transition: background-color .2s ease-in-out;

    color: white;

    &:hover {
        cursor: pointer;
        background-color: #26272C;
    }
}
</style>
