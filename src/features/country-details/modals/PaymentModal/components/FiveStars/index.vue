<script setup lang='ts'>
import { type Ref } from 'vue';
import IconButton from '@/components/IconButton';

import RoundStarIcon from '@/features/country-details/modals/PaymentModal/components/icons/RoundStarIcon';
import RoundStarBorderIcon from '@/features/country-details/modals/PaymentModal/components/icons/RoundStarBorderIcon';

interface IFiveStarsProps {
    amount: Ref<number>;
}

const props = defineProps<IFiveStarsProps>();
const emits = defineEmits<{ (event: 'click', index: number): void; }>();

const getStarIcon = (index: number) => props.amount.value >= index ? RoundStarIcon : RoundStarBorderIcon;
</script>

<template>
    <ul :class='$style[`stars-container`]'>
        <li :key=index v-for='index in 5'>
            <Transition name='fade' mode='out-in'>
                <IconButton
                    :key=getStarIcon(index)
                    :Icon=getStarIcon(index)
                    @click='emits(`click`, index)'
                />
            </Transition>
        </li>
    </ul>
</template>

<style lang='scss' module src='./styles.module.scss' />
