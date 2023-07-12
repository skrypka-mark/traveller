<script setup lang='ts'>
import Header from '@/components/Header';
import Home from '@/features/home';
import Info from '@/features/info';
import About from '@/features/about';
import Contact from '@/features/contact';
import Gallery from '@/features/gallery';
</script>

<template>
  <Header />
  <Home />
  <Info />
  <Gallery />
  <Contact />
  <About />

  <!-- <div class='helper' /> -->
</template>

<!-- <style lang='scss'>
.helper {
  pointer-events: none;

  // Horizontal
  &::before {
    content: '';

    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    translate: 0 -50%;

    height: 1px;
    background-color: black;
  }

  // Vertical
  &::after {
    content: '';

    position: fixed;
    top: 0;
    bottom: 0;
    left: 50%;
    translate: -50% 0;

    width: 1px;
    background-color: black;
  }
}
</style> -->

<!-- {
  "question": "Сезон твоего отдыха",
  "зима": {
    "question": "Куда ты хочешь поехать?",
    "горы": {
      "question": "Чем ты хочешь заниматься?",
      "горнолыжный отдых": {},
      "прогулочный отдых": {
        "озера": {},
        "спортивный туризм": {},
        "": {},
        "": {},
      }
    },
    "море": {},
    "город": {}
  },
  "лето": {
    "question": "Куда ты хочешь поехать?",
    "горы": {
      "question": "Чем ты хочешь заниматься?",
      "спортивный туризм": {},
      "прогулочный отдых": {
        "озера": {},
        "": {},
        "": {},
      }
    },
    "море": {},
    "город": {}
  }
} -->
