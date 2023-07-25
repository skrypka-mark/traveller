<script setup lang='ts'>
const props = defineProps<{ id: string }>();
const backgroundImage = `url('@/assets/images/bg/${props.id}.jpg')`;
</script>

<template>
    <section :class='$style.section' :style='{ backgroundImage }' :id=id>
        <slot />
    </section>
</template>

<style lang='scss' module src='./styles.module.scss' />
