<script setup lang='ts'>
import { RouterLink } from 'vue-router';
</script>

<template>
    <Teleport to='body'>
        <header>
            <!-- <img alt='Logo' class='logo' src='@/assets/logo.svg' width=125 height=125 /> -->
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

<style module src='./styles.module.css' />
