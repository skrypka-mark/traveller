<script setup lang='ts'>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Section from '@/components/Section';
import Blur from '@/components/Blur';
import Title from '@/components/Title';
import CountryImage from '@/components/CountryImage';

import CountryDetails from '@/features/country-details';

import ArrowLeft from '@/components/icons/ArrowLeft';
import ArrowRight from '@/components/icons/ArrowRight';

import { countryTours } from '@/constants';


const route = useRoute();
const router = useRouter();

const transition = ref(false);
const selectedCountryId = computed(() => route.query.countryId);

const openCountryDetails = (id: string) => {
    router.push({ hash: `#gallery`, query: { countryId: id } });
};
const ae = () => {
    transition.value = false;
};
const bl = () => {
    transition.value = true;
};
</script>

<template>
    <Section id='gallery' :style='{ paddingInline: 0 }'>
        <Blur :blur=10 />
        <div :class='$style[`bg-darken`]' />
        <Transition name='fade' mode='out-in' @after-enter=ae @before-leave=bl>
            <div :class='$style[`gallery-container`]' v-if=!selectedCountryId>
                <Title>Country tours</Title>
                <ul :class='$style[`gallery-list`]'>
                    <div :class='[$style[`arrow-container`], $style.left]'>
                        <ArrowLeft :class='$style.arrow' />
                    </div>
                    <li :key=country v-for='{ id, country, image } in countryTours' :class='$style[`gallery-list__item`]' v-shared-element:[image]>
                        <CountryImage :image=image :title=country @click=openCountryDetails(id) />
                    </li>
                    <div :class='[$style[`arrow-container`], $style.right]'>
                        <ArrowRight class='arrow' />
                    </div>
                </ul>
            </div>
            <CountryDetails :id=selectedCountryId v-else />
        </Transition>
    </Section>
</template>

<style lang='scss'>
.fade-enter-active,
.fade-leave-active {
    transition: all .2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    // opacity: 0;
}
</style>

<style lang='scss' module src='./styles.module.scss' />
