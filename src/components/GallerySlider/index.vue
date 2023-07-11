<script setup lang='ts'>
import { ref, computed, watch } from 'vue';
import CountryImage from '@/components/CountryImage';

import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';

interface IGallerySliderProps {
    data: { id: string, country: string, image: string }[]
}

const props = defineProps<IGallerySliderProps>();
defineEmits<{ (event: 'slide-click', id: string): void }>();

const ITEMS_PER_SCREEN = 3;

const sliderIndex = ref<number>(0);
const sliderTransitionName = ref<string>('slider-appear');
const slideData = computed<typeof props.data>(() => props.data.slice(sliderIndex.value * ITEMS_PER_SCREEN, (sliderIndex.value * ITEMS_PER_SCREEN) + ITEMS_PER_SCREEN));
const slidesAmount = computed(() => +((props.data.length - 1) / ITEMS_PER_SCREEN).toFixed(0));

watch(sliderIndex, (val, prevVal) => {
    sliderTransitionName.value = prevVal > val ? 'slider-right' : 'slider-left';
});

const dotClickHandler = (index: number) => ( sliderIndex.value = index );
</script>

<template>
    <div :class='$style.slider'>
        <div :class='$style[`slider-wrapper`]'>
            <div :class='[$style.arrow, $style.left, { [$style.disabled]: sliderIndex <= 0 }]' @click='sliderIndex--'>
                <ArrowLeftIcon />
            </div>
            <Transition :name=sliderTransitionName mode='out-in'>
                <ul :key=sliderIndex :class='$style[`gallery-slider`]'>
                    <li
                        :key=country
                        v-for='{ id, country, image } in slideData'
                        :class='$style[`gallery-slider__item`]'
                        v-shared-element:[image]
                    >
                        <CountryImage :image=image :title=country @click='$emit(`slide-click`, id)' />
                    </li>
                </ul>
            </Transition>
            <div :class='[$style.arrow, $style.right, { [$style.disabled]: sliderIndex >= (data.length / ITEMS_PER_SCREEN) - 1 }]' @click='sliderIndex++'>
                <ArrowRightIcon />
            </div>
        </div>
        <ul :class='$style.dots'>
            <li
                :key=index
                :class='[$style.dot, { [$style.selected]: index - 1 === sliderIndex }]'
                v-for='index in slidesAmount'
                @click='dotClickHandler(index - 1)'
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
    &-enter-from {
        transform: translateX(-50%);
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
    &-enter-from {
        transform: translateX(50%);
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
