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
</template>

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
