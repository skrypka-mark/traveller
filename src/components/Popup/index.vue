<script setup lang='ts'>
import { ref, computed, onBeforeMount, nextTick } from 'vue';

const props = defineProps<{ open: boolean; top: number; left: number; }>();

const popupRef = ref<HTMLDivElement | null>(null);
const popupPosition = computed(() => ({ top: props.top, left: props.left - popupWidth }));
const popupWidth = 370;

// onBeforeMount(async () => {
    // const popupRect = popupRef.value?.getBoundingClientRect();
// });
</script>

<template>
    <Teleport to='body'>
        <Transition name='fade'>
            <div
                :class='$style.popup'
                ref=popupRef
                :style='{
                    top: `${popupPosition.top}px`,
                    left: `${popupPosition.left}px`,
                    width: `${popupWidth}px`
                }'
                v-if=open
            >
            </div>
        </Transition>
    </Teleport>
</template>

<style lang='scss'>
.fade {
    &-enter-active,
    &-leave-active {
        transition: all .2s ease-out;
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
    }
}
</style>

<style lang='scss' module>
.popup {
    position: fixed;
    z-index: 99999;

    height: 500px;
    transition: all .2s ease-out;

    background: rgba(255, 255, 255, .6);
    backdrop-filter: blur(15px);
    border-radius: 10px;
}
</style>
