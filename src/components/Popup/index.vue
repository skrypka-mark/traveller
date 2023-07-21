<script setup lang='ts'>
import { ref, computed, watchEffect, nextTick } from 'vue';
import { onClickOutside, useScroll } from '@vueuse/core';
import Typography from '@/components/Typography';

interface IPopupProps {
    open: boolean;
    title?: string;
    top: number;
    left: number;
}

const props = defineProps<IPopupProps>();
const emits = defineEmits<{ (event: 'close'): void }>();

const popupWidth = 370;
const popupHeight = ref<string>('auto');

const popupContentRef = ref<HTMLDivElement | null>(null);
const popupPosition = computed(() => ({ top: props.top, left: props.left - popupWidth }));

onClickOutside(popupContentRef, () => emits('close'));

const { y: popupScrollY } = useScroll(popupContentRef);

watchEffect(async () => {
    await nextTick();

    if(!popupContentRef.value) return;

    const { height } = getComputedStyle(popupContentRef.value);
    popupHeight.value = height;
});

watchEffect(() => {
    if(props.open) ( popupScrollY.value = 0 );
});
</script>

<template>
    <Teleport to='body'>
        <div
            :class='[$style.popup, { [$style.open]: open }]'
            :style='{
                "--popup-top-position": `${popupPosition.top}px`,
                "--popup-left-position": `${popupPosition.left}px`,
                "--popup-width": `${popupWidth}px`,
                "--popup-height": popupHeight,
                translate: `0 ${-popupScrollY}px`
            }'
        >
            <div :class='$style.wrapper'>
                <Typography :class='$style.title' variant='h5' dark v-if=!!title>
                    {{ title }}
                </Typography>
                <div :class='$style.content' ref=popupContentRef>
                    <slot />
                </div>
                <div :class='$style.footer' v-if=$slots.footer>
                    <slot name='footer' />
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style lang='scss' module src='./styles.module.scss' />
