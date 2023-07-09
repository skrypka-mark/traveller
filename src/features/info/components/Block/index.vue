<script setup lang='ts'>
import Typography from '@/components/Typography';
defineProps<{ title: string, subTitle: string }>();
</script>

<template>
    <section :class='$style[`info-block`]'>
        <Typography variant='h3'>
            {{ title }}
        </Typography>
        <Typography variant='caption' :class='$style[`sub-title`]'>
            {{ subTitle }}
        </Typography>
    </section>
</template>

<style lang='scss' module>
.info-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 30px;

    flex-basis: 240px;
    aspect-ratio: 1 / 1;
    /* height: 240px; */

    background: rgba(180, 180, 180, 0.53);
    backdrop-filter: blur(5px);
    border-radius: 10px;

    padding: 58px 25px;
}

.sub-title {
    color: var(--color-text-dark);
    white-space: nowrap;
}
</style>
