<script setup lang='ts'>
import Section from '@/components/Section.vue';
import Blur from '@/components/Blur';

const countryTours = [
    { country: 'Turkey', image: 'turkey.jpg' },
    { country: 'Ukraine', image: 'greenland.jpg' },
    { country: 'USA', image: 'italy.jpg' }
];

const getImageUrl = (name: string) => new URL(`../../assets/images/countries/${name}`, import.meta.url).href;
</script>

<template>
    <Section id='gallery'>
        <Blur />
        <div class='gallery-container'>
            <ul class='gallery-list'>
                <li :key=country v-for='{ country, image } in countryTours' class='gallery-list__item'>
                    <img :src='getImageUrl(image)' alt='' />
                    <h3>
                        {{ country }}
                    </h3>
                </li>
            </ul>
        </div>
    </Section>
</template>

<style lang='scss' scoped>
.gallery-container {
    position: relative;

    & .gallery-list {
        &__item {
            img {
                width: 335px;
                height: 350px;
                object-fit:cover;
            }
        }
    }
}
</style>
