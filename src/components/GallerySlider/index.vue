<script setup lang='ts'>
import { ref, computed, watch } from 'vue';
import { storeToRefs } from 'pinia';
import CountryImage from '@/components/CountryImage';
import { useGalleryStore } from '@/stores/gallery';

import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';

interface IGallerySliderProps {
    data: { id: string, country: string, image: string }[]
}

const props = defineProps<IGallerySliderProps>();
defineEmits<{ (event: 'slide-click', id: string): void }>();

const ITEMS_PER_SCREEN = 3;

const galleryStore = useGalleryStore();
const { gallerySliderIndex } = storeToRefs(galleryStore);
const { setGallerySliderIndex } = galleryStore;

const sliderTransitionName = ref<string>('slider-appear');
const slideData = computed<typeof props.data>(() => props.data.slice(gallerySliderIndex.value * ITEMS_PER_SCREEN, (gallerySliderIndex.value * ITEMS_PER_SCREEN) + ITEMS_PER_SCREEN));
const slidesAmount = computed(() => +((props.data.length - 1) / ITEMS_PER_SCREEN).toFixed(0));

watch(gallerySliderIndex, (val, prevVal) => {
    sliderTransitionName.value = prevVal > val ? 'slider-right' : 'slider-left';
});
</script>

<template>
    <div :class='$style.slider'>
        <div :class='$style[`slider-wrapper`]'>
            <div
                :class='[
                    $style.arrow,
                    $style.left,
                    { [$style.disabled]: gallerySliderIndex <= 0 }
                ]'
                @click='gallerySliderIndex--'
            >
                <ArrowLeftIcon />
            </div>
            <Transition :name=sliderTransitionName mode='out-in'>
                <ul :key=gallerySliderIndex :class='$style[`gallery-slider`]'>
                    <li
                        :key=country
                        v-for='{ id, country, image } in slideData'
                        :class='$style[`gallery-slider__item`]'
                    >
                        <CountryImage :image=image :title=country @click='$emit(`slide-click`, id)' />
                    </li>
                </ul>
            </Transition>
            <div
                :class='[
                    $style.arrow,
                    $style.right,
                    { [$style.disabled]: gallerySliderIndex >= (data.length / ITEMS_PER_SCREEN) - 1 }
                ]'
                @click='gallerySliderIndex++'
            >
                <ArrowRightIcon />
            </div>
        </div>
        <ul :class='$style.dots'>
            <li
                :key=index
                :class='[$style.dot, { [$style.selected]: index - 1 === gallerySliderIndex }]'
                v-for='index in slidesAmount'
                @click='setGallerySliderIndex(index - 1)'
            />
        </ul>
    </div>
</template>

<style lang='scss' module src='./styles.module.scss' />
<style lang='scss'>
.slider-appear {
    &-enter-from,
    &-leave-to {
        opacity: 0;
    }
}
.slider-right {
    &-leave-active {
        transition: .3s ease-in-out;
    }
    &-enter-active {
        transition: .3s ease-in-out;
        transition-delay: -.1s;
    }

    &-enter-from {
        transform: translateX(-25%);
    }
    &-leave-to {
        transform: translateX(50%);
    }
    &-enter-from,
    &-leave-to {
        opacity: 0;
    }
}
.slider-left {
    &-leave-active {
        transition: .3s ease-in-out;
    }
    &-enter-active {
        transition: .3s ease-in-out;
        transition-delay: -.1s;
    }

    &-enter-from {
        transform: translateX(25%);
    }
    &-leave-to {
        transform: translateX(-50%);
    }
    &-enter-from,
    &-leave-to {
        opacity: 0;
    }
}
</style>
