import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modalStore', () => {
    const isModalOpen = ref<boolean>(false);

    const toggleModalOpen = (value?: boolean) => {
        isModalOpen.value = typeof value === 'boolean' ? value : !isModalOpen.value;
    };

    return { isModalOpen, toggleModalOpen };
});
