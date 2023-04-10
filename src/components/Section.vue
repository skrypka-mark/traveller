<script setup lang='ts'>
const props = defineProps<{ id: string }>();
const bgPath = `url(src/assets/images/${props.id}-bg.jpg)`;
</script>

<template>
    <section :id=id>
        <slot />
    </section>
</template>

<style lang='scss' module>
section {
    width: 100vw;
    height: 100vh;

    @include main-container;

    background-image: v-bind(bgPath);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
