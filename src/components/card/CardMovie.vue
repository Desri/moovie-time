<script setup lang="ts">
import { formatDate } from '@/@core/utils/formatters'
import { RouterLink } from 'vue-router'
defineProps<{
  idMoovie: number
  title: string
  imgUrl: string
  year: string
  rating: number
}>()
</script>

<template>
  <div>
    <div class="relative card-movie">
      <div class="relative">
        <img src="@/assets/img/movie-1.png" :alt="title" />
        <div
          class="absolute z-10 h-full w-full top-0 bg-[#2e2e2e] text-center card-hover hidden"
        >
          <div class="absolute inset-y-1/4 w-full">
            <div class="font-medium mb-7 text-2xl">
              {{ rating ? rating : 0 }}
            </div>
            <div class="font-medium mb-6 text-lg">Action</div>
            <div class="inline-grid">
              <RouterLink
                :to="`/detail/${idMoovie}`"
                class="w-28 mb-3 bg-[#ff0000] rounded-2xl py-1"
                >VIEW</RouterLink
              >
              <button class="w-28 rounded-2xl py-1 border-2 border-solid">
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-0 right-0 bg-rating px-2 font-medium">
        {{ rating ? rating : 0 }}
      </div>
      <div class="mt-2.5">
        <h2>{{ title }}</h2>
        <p class="text-[#929292]">{{ formatDate(year) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-movie:hover .card-hover {
  display: block !important;
}
</style>
