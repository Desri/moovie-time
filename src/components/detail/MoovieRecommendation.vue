<script setup lang="ts">
import CardMovie from '../card/CardMovie.vue'
import { useMoovieStore } from '@/stores/moovie'
import { storeToRefs } from 'pinia'

const store = useMoovieStore()
const { listReccomendation } = storeToRefs(store)
</script>

<template>
  <div>
    <div class="sm:w-4/5 mx-auto pt-9 pb-16 px-3.5 sm:px-0">
      <h2 class="text-lg font-medium">RECOMMENDATION MOVIES</h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-5 mt-5 sm:mt-10">
        <CardMovie
          v-for="(data, index) in listReccomendation.slice(0, 5)"
          :key="index"
          :idMoovie="data.id"
          :title="data.title"
          :imgUrl="data.poster_path"
          :year="data.release_date"
          :rating="Number(data.vote_average?.toFixed(1))"
        />
      </div>
      <div
        v-if="listReccomendation.length === 0"
        class="text-center my-24 text-xl font-medium text-gray-300"
      >
        No Recommendation Found
      </div>
    </div>
  </div>
</template>
