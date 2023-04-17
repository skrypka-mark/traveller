<script setup lang='ts'>
withDefaults(defineProps<{ blur: number }>(), { blur: 5 });
</script>

<template>
    <div :class='$style.blur' />
</template>

<style module>
.blur {
    position: absolute;
    inset: 0;

    backdrop-filter: blur(v-bind('`${blur}px`'));
}
</style>
