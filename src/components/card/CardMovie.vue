<script setup lang="ts">
import { formatDate } from '@/@core/utils/formatters'
import { RouterLink } from 'vue-router'
defineProps<{
  title: string
  imgUrl: string
  year: string
  rating: number
}>()
</script>

<template>
  <div>
    <div class="relative">
      <RouterLink to="/about">
        <img src="@/assets/img/movie-1.png" :alt="title" />
        <div class="absolute top-0 right-0 bg-rating px-2 font-medium">
          {{ rating ? rating : 0 }}
        </div>
        <div class="mt-2.5">
          <h2>{{ title }}</h2>
          <p class="text-[#929292]">{{ formatDate(year) }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
