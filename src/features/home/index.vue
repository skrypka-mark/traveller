<script setup lang='ts'>
import Section from '@/components/Section.vue';
import Title from '@/components/Title';
import Button from '@/components/Button';
</script>

<template>
    <Section id='home'>
        <div class='left-blur' />
        <h1 class='center-text'>
            <span class='left-text'>Tra</span>
            <span class='right-text'>vel</span>
        </h1>
        <div class='description-container'>
            <Title>Discover tours</Title>
            <p>
                Welcome to our website dedicated to the topic of travel! Here you will find a multitude of exciting ideas for your next adventure, whether it's an exotic trip abroad or a spontaneous weekend getaway. We strongly believe that travel not only broadens our horizons, but also inspires us.
            </p>
            <Button>
                Make a Reservation
            </Button>
        </div>
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

.center-text {
    --top-shift: 10vh;

    position: absolute;
    inset: 0;
    top: 20vh;

    display: flex;
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


.description-container {
    position: absolute;
    bottom: 50px;

    display: flex;
    flex-direction: column;
    gap: 25px;

    width: 480px;
}
</style>
