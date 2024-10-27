<script setup lang="ts">
import { ref } from 'vue'
import { useMoovieStore } from '@/stores/moovie'
const store = useMoovieStore()

const sort_by = ref('0')
const onChange = () => {
  const slug = {
    sort_by: sort_by.value,
    page: 1,
  }
  store.getMoovie(slug)
}
</script>

<template>
  <div class="custom-select relative">
    <select
      class="text-[#d1d5db] w-full cursor-pointer"
      v-model="sort_by"
      @change="onChange"
    >
      <option value="0">Popularity</option>
      <option value="popularity.asc">Popularity Ascending</option>
      <option value="popularity.desc">Popularity Descending</option>
      <option value="primary_release_date.asc">
        Popularity Date Ascending
      </option>
      <option value="primary_release_date.desc">
        Popularity Date Descending
      </option>
      <option value="vote_average_asc">Rating Ascending</option>
      <option value="vote_average_desc">Rating Descending</option>
    </select>
  </div>
</template>
