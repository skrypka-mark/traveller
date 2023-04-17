<script setup lang='ts'>
import Section from '@/components/Section';
import Title from '@/components/Title';
import Button from '@/components/Button';

import { getFullImagePath } from '@/utils/getFullImagePath';
</script>

<template>
    <Section id='contact'>
        <div :class='$style[`bg-filler`]' />
        <div :class='$style[`contact-container`]'>
            <section :class='$style.content'>
                <article>
                    <Title>Explore a diferent way to travel</Title>
                    <p>
                        Discover new cultures and have a wonderful rest with Backpack Story! Select the country you’d like to visit and provide our agents with estimated time – they’ll find and offer the most suitable tours and hotels.
                        <br />
                        <br />
                        During our work we organized countless journeys for our clients. We started as a small tour bureau, and soon we expanded our offers list. Today we have valuable experience travelling and we can advise the most stunning resorts, cities and countries to visit!
                    </p>
                </article>
                <article>
                    <header>
                        <Title>The world is waiting for you</Title>
                        <h3 :class='$style[`sub-title`]'>
                            Discover the world by travelling to different places.
                        </h3>
                    </header>
                    <main>
                        <form :class='$style[`subscribe-form`]'>
                            <input type='text' placeholder='Your email' />
                            <Button>Subscribe</Button>
                        </form>
                    </main>
                </article>
            </section>
            <section :class='$style[`pictures-collage`]'>
                <img :class='$style[`first-img`]' :src='getFullImagePath(`images/contact-collage/first.jpg`)' alt='' />
                <img :class='$style[`second-img`]' :src='getFullImagePath(`images/contact-collage/second.jpg`)' alt='' />
            </section>
        </div>
    </Section>
</template>

<style lang='scss' module src='./styles.module.scss' />
