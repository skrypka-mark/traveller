<script setup lang='ts'>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Section from '@/components/Section';
import Blur from '@/components/Blur';
import Typography from '@/components/Typography';
import CountryImage from '@/components/CountryImage';

import CountryDetails from '@/features/country-details';

import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';

import { countryTours } from '@/constants';


const route = useRoute();
const router = useRouter();

const transition = ref(false);
const selectedCountryId = computed(() => route.query.countryId);
const sliderIndex = ref(0);

const openCountryDetails = async (id: string) => {
    if(await router.push({ hash: '#gallery' }))
        router.push({ hash: '#gallery', query: { countryId: id } });
};
</script>

<template>
    <Section id='gallery' :style='{ paddingInline: 0 }'>
        <Blur :blur=10 />
        <div :class='$style[`bg-darken`]' />
        <div :class='$style[`gallery-container`]' v-if=!selectedCountryId>
            <Typography variant='h3'>Country tours</Typography>
            <div :class='$style[`gallery-list`]'>
                <div :class='[$style[`arrow-container`], $style.left]' @click='sliderIndex++'>
                    <ArrowLeftIcon :class='$style.arrow' />
                </div>
                <ul :class='$style[`gallery-slider`]' :style='{ transform: `translateX(${sliderIndex * 100}%)` }'>
                    <li
                        :key=country
                        v-for='{ id, country, image } in countryTours'
                        :class='$style[`gallery-slider__item`]'
                        v-shared-element:[image]
                    >
                        <CountryImage :image=image :title=country @click=openCountryDetails(id) />
                    </li>
                </ul>
                <div :class='[$style[`arrow-container`], $style.right]' @click='sliderIndex--'>
                    <ArrowRightIcon :class='$style.arrow' />
                </div>
            </div>
        </div>
        <CountryDetails :id=selectedCountryId v-else />
    </Section>
</template>

<style lang='scss' module src='./styles.module.scss' />
