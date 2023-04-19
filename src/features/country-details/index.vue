<script setup lang='ts'>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import Section from '@/components/Section';
import CountryImage from '@/components/CountryImage';
import Button from '@/components/Button';

import CloseIcon from '@/components/icons/CloseIcon';
import StarIcon from '@/components/icons/StarIcon';
import StarFilledIcon from '@/components/icons/StarFilledIcon';

import { getFullImagePath } from '@/utils/getFullImagePath';
import { countryTours } from '@/constants';

const props = defineProps<{ id: string }>();
const router = useRouter();
const route = useRoute();

const selectedCountry = computed(() => countryTours.find(({ id }) => id === props.id));

const closeBtnClickHandler = () => {
    router.push({ ...route, query: { ...route.query, countryId: undefined } });
};
</script>

<template>
    <div :class='$style[`country-details-container`]'>
        <CountryImage :image=selectedCountry!.image :footer=false v-shared-element:[selectedCountry.image] />

        <section :class='$style.details'>
            <CloseIcon :class='$style[`close-icon`]' @click=closeBtnClickHandler />
            <h1 :class='$style.title'>Text</h1>
            <p :class='$style.description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, sint? Similique, molestiae. Sit natus modi ipsum consectetur ut quod cupiditate maiores optio aliquam distinctio maxime sequi harum, tempora rem est?</p>
            <div :class='$style.gallery'>
                <img
                    :key=image
                    v-for='image in selectedCountry!.gallery'
                    :src='getFullImagePath(image)'
                />
            </div>
            <section :class='$style[`rate-buy`]'>
                <div :class='$style.rating'>
                    <h4 :class='$style.price'>
                        {{ selectedCountry!.price }}{{ selectedCountry!.currencyTicker }} / 1 human / 1 day
                    </h4>
                    <div :class='$style[`stars-container`]'>
                        <button>
                            <StarFilledIcon />
                        </button>
                        <button>
                            <StarFilledIcon />
                        </button>
                        <button>
                            <StarFilledIcon />
                        </button>
                        <button>
                            <StarIcon />
                        </button>
                        <button>
                            <StarIcon />
                        </button>
                    </div>
                </div>
                <Button :class='$style[`buy-btn`]'>Buy</Button>
            </section>
        </section>
    </div>
</template>

<style lang='scss' module src='./styles.module.scss' />
