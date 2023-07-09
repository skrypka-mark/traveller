<script setup lang='ts'>
import Section from '@/components/Section.vue';
import Typography from '@/components/Typography';
import Button from '@/components/Button';
</script>

<template>
    <Section id='home'>
        <div :class='$style[`left-blur`]' />
        <Typography variant='h1' :class='$style[`center-text`]'>
            <span :class='$style[`left-text`]'>Tra</span>
            <span :class='$style[`right-text`]'>vel</span>
        </Typography>
        <div :class='$style[`description-container`]'>
            <Typography variant='h3'>Discover tours</Typography>
            <Typography variant='body'>
                Welcome to our website dedicated to the topic of travel! Here you will find a multitude of exciting ideas for your next adventure, whether it's an exotic trip abroad or a spontaneous weekend getaway.
            </Typography>
            <Button>
                Make a Reservation
            </Button>
        </div>
    </Section>
</template>

<style lang='scss' module src='./styles.module.scss' />
