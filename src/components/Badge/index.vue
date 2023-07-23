<script setup lang='ts'>
defineProps<{ shown: boolean; }>();
</script>

<template>
    <div :class='$style[`badge-container`]'>
        <slot />
        <Transition name='fade' mode='out-in'>
            <div :class='$style.badge' v-if=shown />
        </Transition>
    </div>
</template>

<style lang='scss' module>
.badge-container {
    position: relative;

    .badge {
        position: absolute;
        top: 0;
        right: -8px;
        width: 8px;
        height: 8px;

        background-color: var(--color-warning);
        border-radius: 100%;
    }
}
</style>