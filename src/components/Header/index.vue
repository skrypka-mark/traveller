<script setup lang='ts'>
import { RouterLink } from 'vue-router';
</script>

<template>
    <Teleport to='body'>
        <header>
            <!-- <img alt='Logo' class='logo' src='@/assets/logo.svg' width=125 height=125 /> -->
            <h2>traveller</h2>
            <nav>
                <ul>
                    <li>
                        <RouterLink :to='{ path: `/`, hash: `#info` }'>Info</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to='{ path: `/`, hash: `#gallery` }'>Gallery</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to='{ path: `/`, hash: `#contact` }'>Contact</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to='{ path: `/`, hash: `#about` }'>About us</RouterLink>
                    </li>
                </ul>
            </nav>
        </header>
    </Teleport>
</template>

<style lang='scss' module src='./styles.module.scss' />
