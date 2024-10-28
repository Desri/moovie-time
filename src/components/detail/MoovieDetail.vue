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
    <div class="relative">
      <div
        class="bg-detail bg-cover bg-center bg-no-repeat h-[340px] bg-black opacity-40"
        :style="{
          backgroundImage: `url('https://media.themoviedb.org/t/p/w220_and_h330_face/${detailMoovie.poster_path}')`,
        }"
      ></div>
      <div class="bg-[#00000070] absolute bottom-0 w-full h-[73px]"></div>
      <div class="absolute h-full w-full top-0"></div>
    </div>
    <div class="bg-whites">
      <div class="relative mt-[-266px]">
        <div class="pt-16 px-3.5 sm:px-0">
          <div class="sm:w-4/5 mx-auto">
            <div class="flex gap-4 sm:gap-5">
              <div>
                <img
                  :src="`https://media.themoviedb.org/t/p/w220_and_h330_face${detailMoovie.poster_path}`"
                  class="sm:h-[340px]"
                  :alt="detailMoovie.title"
                />
              </div>
              <div class="w-3/4 sm:pl-6 mt-4">
                <div class="mb-8">
                  <p class="text-white">
                    {{ formatDate(detailMoovie.release_date) }}
                  </p>
                  <h1 class="text-lg sm:text-4xl font-bold text-white">
                    {{ detailMoovie.title }}
                  </h1>
                  <p class="text-white">Fantasy, Action, Adventure</p>
                </div>

                <div class="flex items-center py-2.5 gap-5">
                  <span class="text-yellow-500 text-3xl font-medium flex gap-2">
                    <IconStar class="w-5" />
                    {{
                      detailMoovie.vote_average
                        ? Number(detailMoovie.vote_average?.toFixed(1))
                        : '0'
                    }}
                  </span>
                  <div class="ml-3.5">
                    <p class="text-white">USER SCORE</p>
                    <span class="text-white">
                      {{
                        detailMoovie.vote_count ? detailMoovie.vote_count : '0'
                      }}
                      VOTES
                    </span>
                  </div>
                  <div
                    class="sm:flex sm:gap-5 items-center sm:space-x-4 ml-3.5"
                  >
                    <div>
                      <p class="text-white">STATUS</p>
                      <p class="font-bold text-white uppercase">
                        {{ detailMoovie.status }}
                      </p>
                    </div>
                    <div>
                      <p class="text-white">LANGUAGE</p>
                      <p
                        v-if="detailMoovie.spoken_languages"
                        class="font-bold text-white uppercase"
                      >
                        {{ detailMoovie.spoken_languages[0].name }}
                      </p>
                    </div>
                    <div>
                      <p class="text-white">BUDGET</p>
                      <p class="font-bold text-white">
                        ${{ detailMoovie.budget }}
                      </p>
                    </div>
                    <div>
                      <p class="text-white">PRODUCTION</p>
                      <p
                        v-if="detailMoovie.production_companies"
                        class="font-bold text-white"
                      >
                        {{ detailMoovie.production_companies[0].name }}
                      </p>
                    </div>
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
          </div>
          <MoovieReview class="bg-white pb-16 mt-[-137px] pt-[147px]" />
        </div>
      </div>
    </div>
    <div class="mt-8">
      <MoovieRecommendation />
    </div>
  </div>
</template>
