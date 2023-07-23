<script setup lang='ts'>
import { computed } from 'vue';
import { toast } from '@/plugins/toast';
import { useModalStore } from '@/stores/modal';
import ToastNotification from '@/components/ToastNotification';

const modalStore = useModalStore();

const isFirstNotifiaction = computed(() => toast.notifications.size === 1);
const topSpacing = computed(() => modalStore.isModalOpen ? 0 : `var(--header-height)`);
</script>

<template>
    <Teleport to='#toaster'>
        <section
            :class='$style[`toast-container`]'
            class='scrollbar-hidden'
            :style='{ "--top-spacing": topSpacing }'
        >
            <TransitionGroup tag='ul' name='toast-in' :class='$style[`toast-list`]'>
                <ToastNotification
                    :key=notification
                    v-for='(notification, index) in Array.from(toast.notifications).reverse()'
                    :is-first='index === 0'
                    :is-last='index === Array.from(toast.notifications).length - 1'
                    v-bind=notification
                    @remove=toast._remove(notification)
                />
            </TransitionGroup>
        </section>
    </Teleport>
</template>

<style lang='scss'>
.toast-in {
    &-move,
    &-enter-active {
        transition: transform .3s ease-in-out,
                    opacity .3s ease-in-out,
                    border-radius .5s ease-in-out;
    }
    &-leave-active {
        transition: transform .3s ease-in-out,
                    opacity .3s ease-in-out,
                    border-radius .5s ease-in-out;
    }

    &-leave-active { position: absolute; }

    &-enter-from,
    &-leave-to {
        opacity: 0;
        transform: translateX(v-bind('isFirstNotifiaction ? `-100%` : `-300%`'));
    }
}
</style>
<style lang='scss' module src='./styles.module.scss' />
