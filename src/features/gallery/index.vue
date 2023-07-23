<script setup lang='ts'>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Section from '@/components/Section';
import Blur from '@/components/Blur';
import Typography from '@/components/Typography';
import GallerySlider from '@/components/GallerySlider';

import CountryDetails from '@/features/country-details';

import { countryTours } from '@/constants';


const route = useRoute();
const router = useRouter();

const selectedCountryId = computed(() => route.query.countryId?.toString() ?? '');

const openCountryDetails = async (id: string) => {
    if(await router.push({ hash: '#gallery' }))
        router.push({ hash: '#gallery', query: { countryId: id } });
};
</script>

<template>
    <Section id='gallery' :style='{ paddingInline: 0 }'>
        <Blur :blur=10 />
        <div :class='$style[`bg-darken`]' />
        <Transition name='fade-filter' mode='out-in'>
            <div :class='$style[`gallery-container`]' v-if=!selectedCountryId>
                <Typography variant='h3'>Country tours</Typography>
                <div :class='$style[`gallery-list`]'>
                    <GallerySlider :data=countryTours @slide-click=openCountryDetails />
                </div>
            </div>
            <CountryDetails :id=selectedCountryId v-else />
        </Transition>
    </Section>
</template>

<style lang='scss' module src='./styles.module.scss' />
