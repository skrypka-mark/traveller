<script setup lang='ts'>
import { watchEffect } from 'vue';
import { useModalStore } from '@/stores/modal';
import Backdrop from '@/components/Backdrop';
import ModalCloseIcon from '@/components/icons/ModalCloseIcon';

const props = defineProps<{ open: boolean; }>();
const emits = defineEmits<{ (event: 'close'): void }>();

const { toggleModalOpen } = useModalStore();

watchEffect(() => {
    document.body.classList[props.open ? 'add' : 'remove']('prevent-scroll');
    toggleModalOpen(props.open);
});
</script>

<template>
    <Teleport to='#modal'>
        <div :class='$style.modal'>
            <Transition name='fade-modal'>
                <div :class='$style[`modal-container`]' v-if=open>
                    <header :class='$style[`modal-header`]'>
                        <div :class='$style[`modal-header__wrapper`]'>
                            <button :class='$style[`close-btn`]' @click='emits(`close`)'>
                                <ModalCloseIcon />
                            </button>
                            <h3 :class='$style[`modal-title`]'>Payment</h3>
                        </div>
                    </header>
                    <div :class='$style[`modal-content`]'>
                        <slot />
                    </div>
                </div>
            </Transition>
            <Transition name='fade-backdrop'>
                <Backdrop @click='emits(`close`)' v-if=open />
            </Transition>
        </div>
    </Teleport>
</template>

<style lang='scss'>
.fade-modal {
    &-enter-active,
    &-leave-active {
        transition: all .2s ease-out;
    }
    &-enter-active {
        transition-delay: .2s;
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
        filter: blur(2px);
        scale: 0.98;
    }
}
.fade-backdrop {
    &-enter-active,
    &-leave-active {
        transition: all .3s ease-out;
    }
    &-leave-active {
        transition-delay: .2s;
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
    }
}
</style>

<style lang='scss' module src='./styles.module.scss' />
