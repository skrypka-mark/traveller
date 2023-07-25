<script setup lang='ts'>
import { watch, ref, reactive, computed, nextTick, type Ref } from 'vue';
import { useElementBounding, useElementHover } from '@vueuse/core';
import Typography from '@/components/Typography';

interface ITooltipProps {
    leftOffset: number;
    message: string;
}

const props = defineProps<ITooltipProps>();

const tooltipContainerRef = ref<Ref | null>(null);
const tooltipSpecs = reactive({ top: 0, left: 0 });
const tooltipContainerRect = useElementBounding(tooltipContainerRef);
const isHovered = useElementHover(tooltipContainerRef);
const isTooltipVisible = computed(() => isHovered.value && tooltipSpecs.top && tooltipSpecs.left);

const TOOLTIP_WIDTH = 100;
const TOOLTIP_HEIGHT = 30;
const TOOLTIP_PADDING = 10;

const observe = async () => {
    if(!tooltipContainerRef.value) return;

    const { top, left } = tooltipContainerRect;
    tooltipSpecs.top = top.value - TOOLTIP_HEIGHT - 10;
    tooltipSpecs.left = left.value - (TOOLTIP_WIDTH / 2) + TOOLTIP_PADDING + 12 - props.leftOffset;
};
watch(isHovered, async () => {
    tooltipSpecs.top = 0;
    tooltipSpecs.left = 0;

    await nextTick();
    await observe();
});
watch(() => tooltipContainerRect.top, observe, { deep: true });
</script>

<template>
    <div class='inline-block' ref=tooltipContainerRef>
        <slot />
        <Teleport to='body'>
            <Transition name='fade-filter' mode='out-in'>
                <div
                    :class='$style.tooltip'
                    :style='{
                        top: `${tooltipSpecs.top}px`,
                        left: `${tooltipSpecs.left}px`,
                        maxWidth: `${TOOLTIP_WIDTH}px`,
                        height: `${TOOLTIP_HEIGHT}px`,
                        padding: `${TOOLTIP_PADDING}px`,
                        zIndex: isTooltipVisible ? 9999 : 9998 // needed to immediately hide previously hovered tooltip
                    }'
                    v-if=isTooltipVisible
                >
                    <Typography variant='body' dark>
                        {{ message }}
                    </Typography>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<style lang='scss' module src='./styles.module.scss' />
