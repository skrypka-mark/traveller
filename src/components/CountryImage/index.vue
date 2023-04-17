<script setup lang='ts'>
import { getFullImagePath } from '@/utils/getFullImagePath';

interface IProps {
    image: string;
    title?: string;
    footer: boolean;
};

withDefaults(defineProps<IProps>(), { footer: true });
</script>

<template>
    <picture>
        <img :src='getFullImagePath(`images/countries/${image}`)' :alt=title />
        <h3 :class='$style[`country-name`]' v-if=footer>
            {{ title }}
        </h3>
    </picture>
</template>

<style lang='scss' module src='./styles.module.scss' />
