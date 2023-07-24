<script setup lang='ts'>
// layouts
import Header from '@/components/Header';
// sections
import Home from '@/features/home';
import Info from '@/features/info';
import About from '@/features/about';
import Contact from '@/features/contact';
import Gallery from '@/features/gallery';
// toaster
import ToastContainer from '@/components/ToastContainer';
</script>

<template>
  <Header />
  <Home />
  <Info />
  <Gallery />
  <Contact />
  <About />

  <ToastContainer />
</template>
