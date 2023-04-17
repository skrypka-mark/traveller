<script setup lang='ts'>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import Section from '@/components/Section';
import Blur from '@/components/Blur';
import Title from '@/components/Title';
import CountryImage from '@/components/CountryImage';

import CountryDetails from '@/features/country-details';

import ArrowLeft from '@/components/icons/ArrowLeft';
import ArrowRight from '@/components/icons/ArrowRight';

import { countryTours } from '@/constants';


const route = useRoute();

const selectedCountryId = computed(() => route.query.countryId);
</script>

<template>
    <Section id='gallery' :style='!selectedCountryId ? { paddingInline: 0 } : {}'>
        <Blur :blur=10 />
        <div :class='$style[`bg-darken`]' />
        <div :class='$style[`gallery-container`]' v-if=!selectedCountryId>
            <Title>Country tours</Title>
            <ul :class='$style[`gallery-list`]'>
                <div :class='[$style[`arrow-container`], $style.left]'>
                    <ArrowLeft :class='$style.arrow' />
                </div>
                <li :key=country v-for='{ id, country, image } in countryTours' :class='$style[`gallery-list__item`]'>
                    <RouterLink :to='{ hash: `#gallery`, query: { countryId: id } }'>
                        <CountryImage
                            :image=image
                            :title=country
                        />
                    </RouterLink>
                </li>
                <div :class='[$style[`arrow-container`], $style.right]'>
                    <ArrowRight class='arrow' />
                </div>
            </ul>
        </div>
        <CountryDetails
            :id=selectedCountryId
            v-else
        />
    </Section>
</template>

<style lang='scss' module src='./styles.module.scss' />
