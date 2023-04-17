<script setup lang='ts'>
const props = defineProps<{ id: string }>();
const bgPath = `url(src/assets/images/bg/${props.id}.jpg)`;
</script>

<template>
    <section :class='$style.section' :id=id>
        <slot />
        <!-- <div class='line line-h' />
        <div class='line line-v' /> -->
    </section>
</template>

<!-- <style lang='scss' scoped>
.line {
    position: fixed;
    background-color: white;
    z-index: 9999;

    &.line-h {
        top: 50%;
        translate: 0 -50%;

        width: 100%;
        height: 1px;
    }
    &.line-v {
        left: 50%;
        translate: -50% 0;

        width: 1px;
        height: 100%;
    }
}
</style> -->

<style lang='scss' module>
.section {
    position: relative;
    width: 100vw;
    height: 100vh;

    @include main-container;

    background-image: v-bind(bgPath);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
