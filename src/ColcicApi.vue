<script setup>
import HeaderApp from './components/Header.vue'
import GoToTop from './components/GoToTop.vue'
import FooterApp from './components/Footer.vue'
</script>

<template>

   <HeaderApp />
   <GoToTop />
   <RouterView />
   <FooterApp />

</template>