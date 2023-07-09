<script setup lang='ts'>
import Typography from '@/components/Typography';

interface IProps {
    image: string;
    title?: string;
    footer?: boolean;
};

withDefaults(defineProps<IProps>(), { footer: true });
</script>

<template>
    <picture>
        <div :class='$style[`image-container`]'>
            <Transition name='fade-filter-image' mode='out-in'>
                <img :key=image :src=image :alt=title />
            </Transition>
        </div>
        <Typography variant='caption' :class='$style[`country-name`]' v-if=footer>
            {{ title }}
        </Typography>
    </picture>
</template>

<style lang='scss' module src='./styles.module.scss' />
