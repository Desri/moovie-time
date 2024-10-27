<script setup lang="ts">
import CardMovie from '../card/CardMovie.vue'
import { useMoovieStore } from '@/stores/moovie'
import { storeToRefs } from 'pinia'

const store = useMoovieStore()
const { listMoovie, page, totalPage } = storeToRefs(store)

const more = (page: string) => {
  store.getMoovie(page)
}
</script>

<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
      <CardMovie
        v-for="(data, index) in listMoovie"
        :key="index"
        :title="data.title"
        :imgUrl="data.poster_path"
        :year="data.release_date"
        :rating="Number(data.vote_average.toFixed(1))"
      />
    </div>
    <div class="text-center mt-14">
      <button
        class="rounded-3xl tracking-wider font-medium px-8 py-2"
        :class="
          page === totalPage
            ? 'bg-[#2f353e] cursor-not-allowed text-gray-300'
            : 'bg-[#ff0000] text-white'
        "
        :disabled="page === totalPage"
        @click="more(page + 1)"
      >
        Load More
      </button>
    </div>
  </div>
</template>
