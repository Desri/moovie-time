<script setup lang="ts">
import { useMoovieStore } from '@/stores/moovie'
import { storeToRefs } from 'pinia'

const store = useMoovieStore()
const { watchlistMovies } = storeToRefs(store)
</script>

<template>
  <div class="flex justify-between items-center mb-12">
    <div>
      <div class="bg-red-500 h-1.5 w-24 mb-2.5"></div>
      <h2 class="text-xl sm:text-2xl font-medium text-gray-300">
        Discover Movies
      </h2>
    </div>
    <div>
      <div class="flex items-center mt-5 sm:mt-0">
        <p>My Movies</p>
        <div class="bg-[#181818] rounded-2xl px-3.5 py-1 ml-2.5">
          {{ watchlistMovies.length }}
          <span class="text-sm"
            >movie<span v-if="watchlistMovies.length > 1">s</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>
