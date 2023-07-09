<script setup lang='ts'>
import Section from '@/components/Section';
import Typography from '@/components/Typography';
import Block from '@/features/info/components/Block';
import Blur from '@/components/Blur';
</script>

<template>
    <Section id='info'>
        <Blur />
        <div :class='$style[`info-container`]'>
            <div :class='$style[`offer-container`]'>
                <Typography variant='h3'>
                    What can we offer for you
                </Typography>
                <div :class='$style[`info`]'>
                    <div :class='$style[`blocks`]'>
                        <div :class='$style[`blocks-container`]'>
                            <Block title='6,800' subTitle='REPEAT VISITORS' />
                            <Block title='3,065' subTitle='HOTELS TO STAY' />
                        </div>
                        <div :class='$style[`blocks-container`]'>
                            <Block title='2,560' subTitle='PLACES TO VISIT' />
                            <Block title='100%' subTitle='SAFE & SECURE' />
                        </div>
                    </div>
                    <ul :class='$style[`description-container`]'>
                        <li :class='$style.description'>
                            <Typography variant='h4'>Various Destinations</Typography>
                            <Typography variant='body'>We offer a great number of tours to different destinations. You have a wide selection of places to visit with us!</Typography>
                        </li>
                        <li :class='$style.description'>
                            <Typography variant='h4'>Everything is Included</Typography>
                            <Typography variant='body'>No worries from your side! We take care of air flights, hotel booking, transfer and other travelling details!</Typography>
                        </li>
                        <li :class='$style.description'>
                            <Typography variant='h4'>Affordable Prices</Typography>
                            <Typography variant='body'>There are various price categories for different tours in our agency. Either student or businessman can afford a journey!</Typography>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Section>
</template>

<style lang='scss' module src='./styles.module.scss' />
