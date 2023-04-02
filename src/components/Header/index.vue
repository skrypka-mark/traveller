<script setup lang='ts'>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <!-- <img alt='Logo' class='logo' src='@/assets/logo.svg' width=125 height=125 /> -->
        <nav>
            <ul>
                <RouterLink :to='{ path: `/`, hash: `#info` }'>Info</RouterLink>
                <RouterLink :to='{ path: `/`, hash: `#gallery` }'>Gallery</RouterLink>
                <RouterLink :to='{ path: `/`, hash: `#contact` }'>Contact</RouterLink>
                <RouterLink :to='{ path: `/`, hash: `#about` }'>About us</RouterLink>
            </ul>
        </nav>
  </header>
</template>

<style module src='./styles.module.css' />
