<script setup lang='ts'>
defineProps<{ title: string, subTitle: string }>();
</script>

<template>
    <section class='info-block'>
        <h1>
            {{ title }}
        </h1>
        <h3>
            {{ subTitle }}
        </h3>
    </section>
</template>

<style scoped>
.info-block {
    width: 240px;
    height: 240px;

    background: rgba(180, 180, 180, 0.53);
    border-radius: 10px;

    padding: 58px 25px;
}
</style>
