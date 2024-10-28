<script setup lang="ts">
import { onMounted } from 'vue'
import { useMoovieStore } from '@/stores/moovie'
import ListMoovie from '@/components/home/ListMoovie.vue'
import ListMoovieSlider from '@/components/home/ListMoovieSlider.vue'
import ListFilterSortBy from '@/components/home/ListFilterSortBy.vue'
import ListGenres from '@/components/home/ListGenres.vue'
import HeadingHome from '@/components/home/HeadingHome.vue'

const store = useMoovieStore()

onMounted(async () => {
  const slug = {
    page: 1,
  }
  store.getMoovie(slug)
  store.getGenres()
  store.getTrending()
  store.getWatchlistMovies()
})
</script>

<template>
  <main class="bg-[#1e232a]">
    <ListMoovieSlider />
    <div class="sm:w-4/5 mx-auto py-16 px-3.5 sm:px-0">
      <HeadingHome />
      <div class="md:flex gap-8">
        <div class="md:w-1/4">
          <div class="bg-[#151c26] py-5 rounded-lg">
            <div class="px-3 border-b border-solid border-gray-600 pb-2.5 mb-5">
              <span class="font-medium text-lg pl-1">Sort Result By</span>
            </div>
            <div class="px-3 border-b border-solid border-gray-600 pb-5 mb-2.5">
              <ListFilterSortBy />
            </div>
            <div class="px-3 border-b border-solid border-gray-600 pb-3">
              <span class="font-medium text-lg pl-1">Genres</span>
            </div>
            <ListGenres />
          </div>
        </div>
        <div class="md:w-3/4">
          <ListMoovie />
        </div>
      </div>
    </div>
  </main>
</template>
