<script setup lang="ts">
import { formatDate } from '@/@core/utils/formatters'
import MoovieRecommendation from './MoovieRecommendation.vue'
import { useMoovieStore } from '@/stores/moovie'
import { storeToRefs } from 'pinia'

const store = useMoovieStore()
const { detailMoovie } = storeToRefs(store)
</script>

<template>
  <div>
    <div class="bg-white">
      <div class="sm:w-4/5 mx-auto py-16 px-3.5 sm:px-0">
        <div class="flex gap-4 sm:gap-5">
          <div>
            <img src="@/assets/img/movie-1.png" class="h-[340px]" alt="title" />
          </div>
          <div class="w-2/3 pl-6">
            <h1 class="text-lg sm:text-4xl font-bold text-black">
              {{ detailMoovie.title }}
            </h1>
            <p class="text-gray-600">
              {{ formatDate(detailMoovie.release_date) }}
            </p>
            <p class="text-gray-600">Fantasy, Action, Adventure</p>
            <div class="flex items-center mt-4">
              <span class="text-yellow-500 text-2xl">
                <i class="fas fa-star"> </i>
                {{
                  detailMoovie.vote_average
                    ? Number(detailMoovie.vote_average?.toFixed(1))
                    : '0'
                }}
              </span>
              <span class="ml-2 text-gray-600"> USER SCORE </span>
              <span class="ml-2 text-gray-600">
                {{ detailMoovie.vote_count ? detailMoovie.vote_count : '0' }}
                VOTES
              </span>
            </div>
            <div class="flex items-center mt-4 space-x-4">
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
                  v-for="(item, index) in detailMoovie.production_companies"
                  :key="index"
                  class="font-bold text-black"
                >
                  {{ item.name }}
                </p>
              </div>
            </div>
            <div class="mt-6">
              <h2 class="text-xl font-bold text-red-600">OVERVIEW</h2>
              <p class="text-gray-700 mt-2">
                {{ detailMoovie.overview }}
              </p>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <h2 class="text-lg font-bold text-red-600">REVIEWS</h2>
          <div class="grid sm:grid-cols-2 sm:gap-11 mt-4 space-y-4">
            <div class="bg-white p-4 rounded-xl shadow-lg flex">
              <div class="w-1/12">
                <div class="bg-gray-300 rounded-full w-12 h-12"></div>
              </div>
              <div class="w-11/12 pl-4">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-bold text-black">SWITCH.</h3>
                    <p class="text-gray-600">December 18, 2020</p>
                  </div>
                  <div class="bg-[#eaeaea] px-3.5 py-1 rounded-lg">
                    <span class="text-xl sm:text-3xl text-black font-medium">
                      7.0
                    </span>
                  </div>
                </div>
                <p class="text-gray-700 mt-2">
                  It isn't as easy as saying 'Wonder Woman 1984' is a good or
                  bad movie. The places are there, and there are moments I
                  adore, but it does come across a bit of a mess, even though
                  the action sequences work better. If you have a fond love of
                  the original film, you'll be more willing to take the ride,
                  but for those more indifferent, it may be a bit of a blander
                  sit. If there's a plan to watch it, the theatrical experience
                  is the way to go - there's nothing like seeing these stunning
                  sets, fun action scenes and hearing Zimmer's jaw-dropping
                  score on the big screen. - Chris dos Santos...
                  <a class="text-red-600" href="#"> read the rest </a>
                </p>
              </div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-lg flex">
              <div class="w-1/12">
                <div class="bg-gray-300 rounded-full w-12 h-12"></div>
              </div>
              <div class="w-11/12 pl-4">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-bold text-black">msbreviews</h3>
                    <p class="text-gray-600">December 18, 2020</p>
                  </div>
                  <div class="bg-[#eaeaea] px-3.5 py-1 rounded-lg">
                    <span class="text-xl sm:text-3xl text-black font-medium">
                      8.0
                    </span>
                  </div>
                </div>
                <p class="text-gray-700 mt-2">
                  If you enjoy reading my Spoiler-Free reviews, please follow my
                  blog @ https://www.msbreviews.com. The superhero genre has
                  been growing exponentially during the last decade, so it's
                  bizarre to go through an entire year with only Birds of Prey
                  and The New Mutants instead of literally dozens of films from
                  both Marvel and DC. Thankfully, Warner Bros. decided to
                  release Wonder Woman 1984 before the year's end, but not
                  without a catch. Most people will only have the possibility of
                  watching one of the few blockbusters of 2020 through HBO Max,
                  a streaming service only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <MoovieRecommendation />
    </div>
  </div>
</template>
