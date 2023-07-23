<script setup lang='ts'>
import type { Ref } from 'vue';
import IconButton from '@/components/IconButton';
import Tooltip from '@/components/Tooltip';
import { formatCurrencyNumber } from '@/utils';

import RoundStarIcon from '@/components/icons/RoundStarIcon';
import RoundStarBorderIcon from '@/components/icons/RoundStarBorderIcon';

interface IFiveStarsProps {
    amount?: Ref<number>;
    counter: Ref<number>;
}

const props = defineProps<IFiveStarsProps>();
const emits = defineEmits<{ (event: 'click', index: number): void; }>();

const getStarIcon = (index: number) => props.amount!.value >= index ? RoundStarIcon : RoundStarBorderIcon;
</script>

<template>
    <ul :class='$style[`stars-container`]'>
        <li :key=index v-for='index in 5'>
            <Tooltip :message='`${formatCurrencyNumber(index * counter.value * 4)} / 1d`' :leftOffset='2 * (index - 1)'>
                <IconButton :Icon=getStarIcon(index) @click='emits(`click`, index)' />
            </Tooltip>
        </li>
    </ul>
</template>

<style lang='scss' module src='./styles.module.scss' />
