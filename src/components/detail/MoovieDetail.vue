<script setup lang="ts">
import { formatDate } from '@/@core/utils/formatters'
import MoovieRecommendation from './MoovieRecommendation.vue'
import { useMoovieStore } from '@/stores/moovie'
import { storeToRefs } from 'pinia'
import MoovieReview from './MoovieReview.vue'
import IconStar from '../icons/IconStar.vue'

const store = useMoovieStore()
const { detailMoovie } = storeToRefs(store)
</script>

<template>
  <div>
    <div class="bg-white">
      <div class="sm:w-4/5 mx-auto py-16 px-3.5 sm:px-0">
        <div class="flex gap-4 sm:gap-5">
          <div>
            <img
              :src="`https://media.themoviedb.org/t/p/w220_and_h330_face${detailMoovie.poster_path}`"
              class="sm:h-[340px]"
              :alt="detailMoovie.title"
            />
          </div>
          <div class="w-2/3 sm:pl-6">
            <h1 class="text-lg sm:text-4xl font-bold text-black">
              {{ detailMoovie.title }}
            </h1>
            <p class="text-gray-600">
              {{ formatDate(detailMoovie.release_date) }}
            </p>
            <p class="text-gray-600">Fantasy, Action, Adventure</p>
            <div class="flex items-center mt-4">
              <span class="text-yellow-500 text-3xl font-medium flex gap-2">
                <IconStar class="w-5" />
                {{
                  detailMoovie.vote_average
                    ? Number(detailMoovie.vote_average?.toFixed(1))
                    : '0'
                }}
              </span>
              <div class="ml-3.5">
                <p class="text-gray-600">USER SCORE</p>
                <span class="text-gray-600">
                  {{ detailMoovie.vote_count ? detailMoovie.vote_count : '0' }}
                  VOTES
                </span>
              </div>
            </div>
            <div class="sm:flex items-center mt-4 sm:space-x-4">
              <div>
                <p class="text-gray-600">STATUS</p>
                <p class="font-bold text-black uppercase">
                  {{ detailMoovie.status }}
                </p>
              </div>
              <div>
                <p class="text-gray-600">LANGUAGE</p>
                <p
                  v-for="(item, index) in detailMoovie.spoken_languages"
                  :key="index"
                  class="font-bold text-black uppercase"
                >
                  {{ item.name }}
                </p>
              </div>
              <div>
                <p class="text-gray-600">BUDGET</p>
                <!-- <p class="font-bold text-black">$200,000,000.00</p> -->
                <p class="font-bold text-black">${{ detailMoovie.budget }}</p>
              </div>
              <div>
                <p class="text-gray-600">PRODUCTION</p>
                <p
                  v-if="detailMoovie.production_companies"
                  class="font-bold text-black"
                >
                  {{ detailMoovie.production_companies[0].name }}
                </p>
              </div>
            </div>
            <div class="mt-6">
              <h2 class="text-lg sm:text-xl font-bold text-red-600">
                OVERVIEW
              </h2>
              <p class="text-gray-700 mt-2">
                {{ detailMoovie.overview }}
              </p>
            </div>
          </div>
        </div>
        <MoovieReview />
      </div>
    </div>

    <div class="mt-8">
      <MoovieRecommendation />
    </div>
  </div>
</template>
