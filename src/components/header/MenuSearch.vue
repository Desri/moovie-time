<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { debounce } from 'lodash'
import { useMoovieStore } from '@/stores/moovie'
import type { Moovies } from '@/types/moovie'

const store = useMoovieStore()
const router = useRouter()
const searchMovie = ref()
const listSuggestion = ref<Moovies>()

const showListSuggestion = () => {
  let boxSuggestion = document.querySelector('#boxSuggestion')
  if (boxSuggestion?.classList.contains('hidden')) {
    boxSuggestion.classList.remove('hidden')
  } else {
    boxSuggestion?.classList.add('hidden')
  }
}

const getSuggestion = async () => {
  await store
    .getSuggestion(searchMovie.value)
    .then((res: any) => {
      if (res.results.length > 0) {
        listSuggestion.value = res.results
      }
      showListSuggestion()
    })
    .catch((err: string) => {
      console.log('error', err)
    })
}

const goToDetail = (val: number) => {
  showListSuggestion()
  searchMovie.value = ''
  router.push(`/detail/${val}`)
}

const debouncedSearch = debounce(getSuggestion, 500)
</script>

<template>
  <div class="relative w-full">
    <div>
      <div class="absolute top-[8px] left-2">
        <img src="@/assets/img/movie-icon.png" class="w-6" alt="movie-icon" />
      </div>
      <input
        type="search"
        v-model="searchMovie"
        placeholder="Find movie"
        class="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-2 px-2 pl-10 appearance-none leading-normal"
        @input="debouncedSearch"
      />
      <div class="absolute top-[8px] right-[10px]">
        <img src="@/assets/img/search-icon.png" class="w-6" alt="movie-icon" />
      </div>
    </div>
    <ul
      id="boxSuggestion"
      ref="boxSuggestion"
      class="p-2 z-10 top-11 absolute bg-[#151c26] w-[591px] rounded-lg h-80 overflow-auto hidden"
    >
      <li v-for="(data, index) in listSuggestion" :key="index">
        <a
          class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block cursor-pointer"
          @click="goToDetail(data.id)"
        >
          {{ data.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
