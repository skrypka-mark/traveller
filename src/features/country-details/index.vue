<script setup lang='ts'>
import { computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import Section from '@/components/Section';
import CountryImage from '@/components/CountryImage';
import Typography from '@/components/Typography';
import Button from '@/components/Button';

import PaymentModal from '@/features/country-details/modals/PaymentModal';

import CloseIcon from '@/components/icons/CloseIcon';
import { countryTours } from '@/constants';

const props = defineProps<{ id: string }>();
const router = useRouter();
const route = useRoute();

const isPaymentModalOpen = ref(false);
const selectedCountry = computed(() => countryTours.find(({ id }) => id === props.id));
const selectedCountryImage = ref(selectedCountry.value!.image);
const selectedCountryGallery = ref(selectedCountry.value!.gallery);

const closeBtnClickHandler = () => {
    router.push({ ...route, query: { ...route.query, countryId: undefined } });
};
const openPaymentModalHandler = () => {
    isPaymentModalOpen.value = true;
};
const closePaymentModalHandler = () => {
    isPaymentModalOpen.value = false;
};
const galleryImageClickHandler = (index: number) => {
    const temp = selectedCountryImage.value;

    selectedCountryImage.value = selectedCountryGallery.value[index];
    selectedCountryGallery.value[index] = temp;
};
</script>

<template>
    <div id='country-details' :class='$style[`country-details-container`]'>
        <!-- <CountryImage
            :image=selectedCountryImage
            :class='$style[`heading-image`]'
            :footer=false
            v-shared-element:[selectedCountry!.image]
        /> -->
        <CountryImage
            :image=selectedCountryImage
            :class='$style[`heading-image`]'
            :footer=false
        />

        <section :class='$style.details'>
            <div :class='$style[`info-block`]'>
                <div :class='$style.heading'>
                    <Typography variant='h3'>
                        {{ selectedCountry?.country }}
                    </Typography>
                    <CloseIcon :class='$style[`close-icon`]' @click=closeBtnClickHandler />
                </div>
                <Typography variant='body' v-if='selectedCountry?.description.includes(`<br`)' v-html=selectedCountry?.description />
                <Typography variant='body' v-else>
                    {{ selectedCountry?.description }}
                </Typography>
                <div :class='$style.gallery'>
                    <div v-for='(image, idx) in selectedCountryGallery' @click=galleryImageClickHandler(idx) :class='$style[`gallery-image-container`]'>
                        <Transition name='fade-filter-image' mode='out-in'>
                            <img :key=image v-lazy=image />
                        </Transition>
                    </div>
                </div>
            </div>
            <Button :class='$style[`buy-btn`]' @click=openPaymentModalHandler>
                Go to payment
            </Button>
        </section>

        <!-- <PaymentModal :open=isPaymentModalOpen @close=closePaymentModalHandler /> -->
        <PaymentModal :open=true @close=closePaymentModalHandler />
    </div>
</template>

<style lang='scss' module src='./styles.module.scss' />
