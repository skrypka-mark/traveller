<script setup lang='ts'>
import Container from '@/components/Container';

const props = defineProps<{ id: string }>();
const bgPath = `url(src/assets/images/${props.id}-bg.jpg)`;
</script>

<template>
    <section :id=id>
        <Container>
            <slot />
        </Container>
    </section>
</template>

<style module>
section {
    width: 100vw;
    height: 100vh;

    background-image: v-bind(bgPath);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;

    /* overflow: hidden; */
}
/* section:nth-child(2n) {
    background-color: black;
} */
</style>
