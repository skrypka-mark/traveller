<script setup lang='ts'>
import Section from '@/components/Section';
import Title from '@/components/Title';
import Block from '@/features/info/components/Block';
import Blur from '@/components/Blur';
</script>

<template>
    <Section id='info'>
        <Blur />
        <div :class='$style[`info-container`]'>
            <div :class='$style[`offer-container`]'>
                <Title>
                    What can we offer for you
                </Title>
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
                    <h3>Various Destinations</h3>
                    <p>We offer a great number of tours to different destinations. You have a wide selection of places to visit with us!</p>
                </li>
                <li :class='$style.description'>
                    <h3>Everything is Included</h3>
                    <p>No worries from your side! We take care of air flights, hotel booking, transfer and other travelling details!</p>
                </li>
                <li :class='$style.description'>
                    <h3>Affordable Prices</h3>
                    <p>There are various price categories for different tours in our agency. Either student or businessman can afford a journey!</p>
                </li>
            </ul>
        </div>
    </Section>
</template>

<style lang='scss' module src='./styles.module.scss' />
