<script setup lang='ts'>
import { getFullImagePath } from '@/utils';

const props = defineProps<{ id: string }>();

const backgroundImagePath = getFullImagePath(`images/bg/${props.id}.jpg`)
const backgroundImage = `url('${backgroundImagePath}')`;
</script>

<template>
    <section :class='$style.section' :style='{ backgroundImage }' :id=id>
        <slot />
    </section>
</template>

<style lang='scss' module src='./styles.module.scss' />
