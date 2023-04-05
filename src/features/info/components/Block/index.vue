<script setup lang='ts'>
defineProps<{ title: string, subTitle: string }>();
</script>

<template>
    <section class='info-block'>
        <h1 class='title'>
            {{ title }}
        </h1>
        <h3 class='sub-title'>
            {{ subTitle }}
        </h3>
    </section>
</template>

<style scoped>
.info-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 240px;
    height: 240px;

    background: rgba(180, 180, 180, 0.53);
    backdrop-filter: blur(5px);
    border-radius: 10px;

    padding: 58px 25px;
}

.title {
    color: black;
    font-family: 'Montserrat-Medium';
    font-weight: 500;
    font-size: 40px;
    line-height: 49px;
}
.sub-title {
    color: white;
    font-family: 'Montserrat-ExtraBold';
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
}
</style>
