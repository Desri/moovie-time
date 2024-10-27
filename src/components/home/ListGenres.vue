<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMoovieStore } from '@/stores/moovie'
const store = useMoovieStore()

const { listGenres, sort_by } = storeToRefs(store)
const checkedGenres = ref([])
const selectGenre = (val: number) => {
  const slug = {
    sort_by: sort_by,
    genres: checkedGenres.value,
    page: 1,
  }
  store.getMoovie(slug)
}
</script>

<template>
  <div>
    <ul class="px-3 mt-3">
      <li v-for="(data, index) in listGenres" :key="index">
        <label
          class="list-movie block relative cursor-pointer hover:bg-[#2e353e] rounded-md p-2 text-gray-300"
          >{{ data.name }}
          <input
            type="checkbox"
            name="option"
            v-model="checkedGenres"
            :value="data.id"
            class="absolute opacity-0 cursor-pointer h-0 w-0"
            @click="selectGenre(data.id)"
          />
          <span
            class="checkmark bg-[#2e353e] absolute top-2.5 right-2 h-[18px] w-[18px] border-2 border-solid border-gray-600 rounded"
          ></span>
        </label>
      </li>
    </ul>
  </div>
</template>
