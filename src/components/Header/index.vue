<script setup lang='ts'>
import { RouterLink } from 'vue-router';
</script>

<template>
    <Teleport to='body'>
        <header :class='$style.header'>
            <RouterLink :to='{ path: `/` }' :class='$style[`logo-title`]'>
                <h2>
                    traveller
                </h2>
            </RouterLink>
            <nav>
                <ul>
                    <li>
                        <RouterLink :to='{ path: `/`, hash: `#info` }'>Info</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to='{ path: `/`, hash: `#gallery`, query: $route.query }'>Gallery</RouterLink>
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
