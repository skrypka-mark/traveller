<script setup lang='ts'>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import type { INotificationType } from '@/plugins/toast';
import Typography from '@/components/Typography';

import ToastCircleCheckmarkIcon from '@/components/icons/ToastCircleCheckmarkIcon';
import ToastCircleCrossIcon from '@/components/icons/ToastCircleCrossIcon';
import ToastArrowIcon from '@/components/icons/ToastArrowIcon';

interface IToastNotificationProps {
    message: string;
    type: INotificationType;
    isFirst: boolean;
    isLast: boolean;
}

defineProps<IToastNotificationProps>();
const emits = defineEmits<{
    (event: 'remove'): void;
    (event: 'click'): void;
}>();

const timeoutId = ref<ReturnType<typeof setTimeout>>();

onMounted(() => {
    timeoutId.value = setTimeout(() => emits('remove'), 15000);
});
onBeforeUnmount(() => clearTimeout(timeoutId.value));

const Icon = {
    success: ToastCircleCheckmarkIcon,
    error: ToastCircleCrossIcon,
    warning: ToastCircleCrossIcon,
    info: ToastCircleCheckmarkIcon
};
</script>

<template>
    <section :class='[$style[`toast-notification`], { [type]: !!type, [$style.first]: isFirst, [$style.last]: isLast }]' @click='emits(`remove`)'>
        <div :class='$style.wrapper'>
            <div :class='$style.left'>
                <div class='flex g-1'>
                    <Typography variant='body' dark>
                        {{ message }}
                    </Typography>
                </div>
                <button :class='$style[`reopen-btn`]' class='flex row align-center' @click.stop='emits(`click`)'>
                    <Typography variant='body' dark>
                        Reopen
                    </Typography>
                    <ToastArrowIcon />
                </button>
            </div>
            <component :is=Icon[type] style='margin-left: auto;' />
        </div>
    </section>
</template>

<style lang='scss' module src='./styles.module.scss' />
