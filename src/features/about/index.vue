<script setup lang='ts'>
import Section from '@/components/Section';
import Blur from '@/components/Blur';
import Title from '@/components/Title';
import Button from '@/components/Button';

import FacebookIcon from '@/components/icons/FacebookIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import TelegramIcon from '@/components/icons/TelegramIcon';
</script>

<template>
    <Section id='about'>
        <Blur />
        <div :class='$style[`about-container`]'>
            <section :class='$style.form'>
                <h1 :class='$style.title'>Let’s get in touch</h1>
                <form :class='$style[`reservation-form`]'>
                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='E-mail' />
                    <textarea type='text' placeholder='Message' />
                    <Button>Make a Reservation</Button>
                </form>
            </section>
            <section :class='$style.info'>
                <section :class='$style.articles'>
                    <article>
                        <Title>Visit our office:</Title>
                        <p>Glasgow, 4578 Marmora Road</p>
                    </article>

                    <article>
                        <Title>Use contact form:</Title>
                        <p>Fill in the fields in Contact Form and ask questions you are interested in.</p>
                    </article>

                    <article>
                        <Title>Contact us</Title>
                        <p>+380 75 569 5869</p>
                        <p>+380 75 569 5869</p>
                    </article>
                </section>
                <div :class='$style[`socials`]'>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <TelegramIcon />
                </div>
            </section>
        </div>
    </Section>
</template>

<style lang='scss' module src='./styles.module.scss' />
