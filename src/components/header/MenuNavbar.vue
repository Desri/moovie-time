<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MenuCategory from './MenuCategory.vue'
import MenuSearch from './MenuSearch.vue'
</script>

<template>
  <header class="bg-gray-800 py-4 sticky top-0 z-20">
    <div class="w-4/5 mx-auto flex flex-wrap items-center">
      <div
        class="flex flex-shrink md:w-1/6 justify-center md:justify-start text-white"
      >
        <div class="flex items-center space-x-2">
          <RouterLink to="/">
            <img src="@/assets/img/logo.png" class="w-32" alt="Movie" />
          </RouterLink>
        </div>
      </div>
      <div
        class="flex flex-1 md:w-1/2 justify-center md:justify-start text-white px-2"
      >
        <MenuSearch />
      </div>
      <div
        class="flex w-full content-center justify-between md:w-1/3 md:justify-end"
      >
        <ul
          class="list-reset flex justify-between flex-1 md:flex-none items-center gap-8"
        >
          <li class="relative">
            <MenuCategory />
          </li>
          <li>
            <a
              href="#"
              class="text-gray-300 tracking-wide font-medium hover:text-white"
              >MOVIES</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-gray-300 tracking-wide font-medium hover:text-white"
              >TV SHOWS</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-gray-300 tracking-wide font-medium hover:text-white"
              >LOGIN</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
