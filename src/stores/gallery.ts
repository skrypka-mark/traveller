import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGalleryStore = defineStore('galleryStore', () => {
    const gallerySliderIndex = ref<number>(0);

    const setGallerySliderIndex = (index: number) => ( gallerySliderIndex.value = index );

    return { gallerySliderIndex, setGallerySliderIndex };
});
