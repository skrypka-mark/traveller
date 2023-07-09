<script setup lang='ts'>
import Section from '@/components/Section';
import Blur from '@/components/Blur';
import Typography from '@/components/Typography';
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
                <Typography variant='h3'>Let’s get in touch</Typography>
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
                        <Typography variant='h4'>Visit our office:</Typography>
                        <Typography variant='body'>Glasgow, 4578 Marmora Road</Typography>
                    </article>

                    <article>
                        <Typography variant='h4'>Use contact form:</Typography>
                        <Typography variant='body'>Fill in the fields in Contact Form and ask questions you are interested in.</Typography>
                    </article>

                    <article>
                        <Typography variant='h4'>Contact us</Typography>
                        <Typography variant='body'>+380 75 569 5869</Typography>
                        <Typography variant='body'>+380 75 569 5869</Typography>
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
