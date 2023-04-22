<script setup lang='ts'>
defineProps<{ title: string; separator?: boolean; }>();
</script>

<template>
    <section :class='$style[`payment-modal-section`]'>
        <div :class='$style[`title-container`]'>
            <h1 :class='$style.title'>
                {{ title }}
            </h1>
            <slot name='right-title' />
        </div>
        <div :class='$style.content'>
            <slot />
        </div>
    </section>
</template>

<style lang='scss' module>
.payment-modal-section {
    position: relative;
    display: flex;
    align-self: stretch;
    flex-direction: column;
    gap: 30px;

    width: 50%;

    padding: 30px;
    border-right: v-bind('separator ? `1px` : `0`') solid rgba(0, 0, 0, .1);

    & > .title-container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > .title {
            font-weight: 600;
            font-size: 22px;
            line-height: 27px;

            color: #33363D;
        }
    }
    & > .content {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
}
</style>
