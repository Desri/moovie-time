<script setup lang="ts">
import { useMoovieStore } from '@/stores/moovie'
import { formatDate } from '@/@core/utils/formatters'
import { RouterLink } from 'vue-router'
import IconStar from '../icons/IconStar.vue'
defineProps<{
  idMoovie: number
  title: string
  imgUrl: string
  year: string
  rating: number
}>()

const store = useMoovieStore()

const addToWatchlist = (id: number) => {
  const payload = {
    media_type: 'movie',
    media_id: id,
    watchlist: true,
  }
  store.postWatchList(payload)
}
</script>

<template>
  <div>
    <div class="relative card-movie">
      <div class="relative">
        <img
          :src="`https://media.themoviedb.org/t/p/w220_and_h330_face${imgUrl}`"
          :alt="title"
        />
        <div
          class="absolute z-10 h-full w-full top-0 bg-[#2e2e2e] text-center card-hover hidden"
        >
          <div class="absolute inset-y-1/4 w-full">
            <div
              class="inline-flex items-center gap-1.5 font-medium mb-7 text-2xl"
            >
              <IconStar class="w-5" />
              {{ rating ? rating : 0 }}
            </div>
            <div class="font-medium mb-6 text-lg">Action</div>
            <div class="inline-grid">
              <RouterLink
                :to="`/detail/${idMoovie}`"
                class="w-28 mb-3 bg-[#ff0000] rounded-2xl py-1"
                >VIEW</RouterLink
              >
              <button
                class="w-28 rounded-2xl py-1 border-2 border-solid"
                @click="addToWatchlist(idMoovie)"
              >
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
