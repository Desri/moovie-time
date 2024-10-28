<script setup lang="ts">
import { formatDateFull } from '@/@core/utils/formatters'
import { useMoovieStore } from '@/stores/moovie'
import { storeToRefs } from 'pinia'
import IconStar from '../icons/IconStar.vue'

const store = useMoovieStore()
const { listReview } = storeToRefs(store)
</script>

<template>
  <div>
    <div class="sm:w-4/5 mx-auto mt-8">
      <h2 class="text-lg font-bold text-red-600">REVIEWS</h2>
      <div class="grid sm:grid-cols-2 sm:gap-11 mt-3 sm:mt-4 space-y-4">
        <div
          v-for="(data, index) in listReview.slice(0, 8)"
          :key="index"
          class="bg-white p-4 rounded-xl shadow-lg sm:flex"
        >
          <div class="sm:w-1/12">
            <div class="bg-gray-300 rounded-full w-12 h-12"></div>
          </div>
          <div class="sm:w-11/12 sm:pl-4 mt-3 sm:mt-0">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-bold text-black">{{ data.author }}</h3>
                <p class="text-gray-600">
                  {{ formatDateFull(data.created_at) }}
                </p>
              </div>
              <div
                v-if="data.author_details.rating"
                class="bg-[#eaeaea] px-3.5 py-1 rounded-lg"
              >
                <div class="flex gap-1.5">
                  <IconStar class="w-3 top-[-7px] relative" />
                  <span class="text-xl sm:text-3xl text-black font-medium">
                    {{ Number(data.author_details.rating?.toFixed(1)) }}
                  </span>
                </div>
              </div>
            </div>
            <p
              class="text-gray-700 mt-2 overflow-hidden text-ellipsis max-h-[155px]"
            >
              <span v-html="data.content"></span>
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="listReview.length === 0"
        class="text-center my-24 text-xl font-medium text-gray-300"
      >
        No Review Found
      </div>
    </div>
  </div>
</template>
