<script setup lang='ts'>
import { ref, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps<{ open: boolean; top: number; left: number; }>();
const emit = defineEmits<{ (event: 'close'): void }>();

const popupWidth = 370;

const popupRef = ref<HTMLDivElement | null>(null);
const popupPosition = computed(() => ({ top: props.top, left: props.left - popupWidth }));

onClickOutside(popupRef, () => emit('close'));
</script>

<template>
    <Teleport to='body'>
        <div
            :class='[$style.popup, { [$style.open]: open }]'
            :style='{
                "--popup-top-position": `${popupPosition.top}px`,
                "--popup-left-position": `${popupPosition.left}px`,
                "--popup-width": `${popupWidth}px`
            }'
            ref=popupRef
        >
            <div :class='$style.wrapper'>
                <slot />
            </div>
        </div>
    </Teleport>
</template>

<style lang='scss' module src='./styles.module.scss' />
