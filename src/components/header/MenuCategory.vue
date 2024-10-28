<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMoovieStore } from '@/stores/moovie'
const store = useMoovieStore()

const { listGenres } = storeToRefs(store)

const toggle = () => {
  let usersubfunctions = document.querySelector('#usersubfunctions')
  if (usersubfunctions?.classList.contains('hidden')) {
    usersubfunctions.classList.remove('hidden')
  } else {
    usersubfunctions?.classList.add('hidden')
  }
}
</script>

<template>
  <div
    class="flex gap-2 text-gray-300 tracking-wide font-medium hover:text-white cursor-pointer"
    @click="toggle()"
  >
    <img src="@/assets/img/grid-icon.png" class="w-6" alt="Grid Icon" />
    CATEGORIES
  </div>
  <ul
    id="usersubfunctions"
    ref="usersubfunctions"
    class="p-2 z-10 top-8 absolute bg-[#151c26] w-[135px] rounded-lg hidden"
  >
    <li v-for="(data, index) in listGenres" :key="index">
      <RouterLink
        :to="`/category/${data.id}`"
        class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block"
      >
        {{ data.name }}
      </RouterLink>
    </li>
  </ul>
</template>
