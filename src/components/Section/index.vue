<script setup lang='ts'>
const props = defineProps<{ id: string }>();
const backgroundImagePath = `@/assets/images/bg/${props.id}.jpg`;
</script>

<template>
    <section :class='$style.section' :style='{ "--bg-image-path": backgroundImagePath }' :id=id>
        <slot />
    </section>
</template>

<style lang='scss' module src='./styles.module.scss' />
