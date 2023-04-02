<script setup lang='ts'>
import Section from '@/components/Section.vue';
</script>

<template>
    <Section id='home'>
        <div class='left-blur' />
        <h1>
            <span class='left-text'>Tra</span>
            <span class='right-text'>vel</span>
        </h1>
    </Section>
</template>

<style scoped>
.left-blur {
    position: absolute;
    inset: 0;
    top: var(--header-height);
    right: auto;
    width: 50%;

    background-color: rgba(255, 255, 255, .1);
    backdrop-filter: blur(10px);

    border-right: 3px solid #686868;
}

h1 {
    --top-shift: 10vh;

    position: absolute;
    inset: 0;
    top: 20vh;

    display: flex;
    /* align-items: center; */
    justify-content: center;

    font-family: 'Montserrat-Medium';
    font-size: 180px;
    line-height: 219px;
    letter-spacing: 0.05em;
    font-weight: 500;

    background-image: url('@/assets/images/home-bg.jpg');
    background-size: 100%;
    background-position: center calc(-20vh - var(--header-height));
    background-repeat: no-repeat;

    background-clip: text;
    -webkit-background-clip: text;
}
.left-text {
    color: transparent;
    text-stroke: 3px #686868;
    -webkit-text-stroke: 3px #686868;
}
.right-text {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
