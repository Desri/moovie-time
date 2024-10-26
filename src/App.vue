<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuNavbar from './components/header/MenuNavbar.vue'
import FooterContent from './components/footer/FooterContent.vue'
</script>

<template>
  <MenuNavbar />
  <RouterView />
  <FooterContent />
</template>
