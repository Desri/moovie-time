<script setup lang="ts">
import { ref } from 'vue'
import { useMoovieStore } from '@/stores/moovie'
import { storeToRefs } from 'pinia'
import { formatDate } from '@/@core/utils/formatters'
import IconStar from '../icons/IconStar.vue'

const counter = ref<number>(1)
const store = useMoovieStore()
const { listTrending } = storeToRefs(store)

setInterval(function () {
  ;(document.getElementById(
    'radio' + counter.value,
  ) as HTMLInputElement)!.checked = true
  counter.value++
  if (counter.value > 4) {
    counter.value = 1
  }
}, 4000)
</script>

<template>
  <div class="slideshow">
    <div class="photo-slider overflow-hidden h-[500px]">
      <div class="photo-slides flex h-[500px]">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />

        <div
          v-for="(data, index) in listTrending.slice(0, 5)"
          :key="index"
          class="slide mt-12 w-[8%] mx-3"
          :class="index === 0 ? 'first' : ''"
        >
          <article class="float-left relative sw-[7%] my-0 mx-2.5s">
            <div class="flex items-center">
              <div>
                <img
                  :src="`https://media.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`"
                  :alt="data.title"
                  class="w-[310px] h-[330px]"
                />
              </div>
              <div class="bg-black px-6 w-full h-72">
                <div class="text-lg mt-5 flex items-center gap-1">
                  <IconStar class="w-4" />
                  {{
                    data.vote_average
                      ? Number(data.vote_average?.toFixed(1))
                      : ''
                  }}
                </div>
                <h2 class="text-xl font-medium mb-1">
                  {{ data.title }}
                </h2>
                <div class="mb-1">
                  {{ formatDate(data.release_date) }} • Sci-Fi
                </div>
                <p class="overflow-hidden text-ellipsis max-h-[135px] mt-3">
                  {{ data.overview }}
                </p>
              </div>
            </div>
          </article>
        </div>
        <!-- <div class="slide mt-12 w-[8%] mx-3">
          <article class="float-left relative sw-[7%] my-0 mx-2.5s">
            <div
              class="info bottom-right bottom-[30px] right-[30px] absolute text-black italic opacity-0 text-left leading-5"
            >
              <h3>Cameron Highland</h3>
            </div>
            <div class="flex items-center">
              <div>
                <img src="@/assets/img/movie-1.png" />
              </div>
              <div class="bg-black px-6 w-full h-72">
                <div class="text-lg mt-5">7.2</div>
                <h2 class="text-xl font-medium mb-1">News of the World</h2>
                <div class="mb-1">2021 • Sci-Fi</div>
                <p>
                  If you enjoy reading my Spoiler-Free reviews, please follow my
                  blog @ https://www.msbreviews.com. The superhero genre has
                  been growing exponentially during the last decade, so it's
                  bizarre to go.
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="slide mt-12 w-[8%] mx-3">
          <article class="float-left relative sw-[7%] my-0 mx-2.5s">
            <div
              class="info top-right top-[30px] right-[30px] absolute text-black italic opacity-0 text-left leading-5"
            >
              <h3>Ladakh</h3>
            </div>
            <div class="flex items-center">
              <div>
                <img src="@/assets/img/movie-1.png" />
              </div>
              <div class="bg-black px-6 w-full h-72">
                <div class="text-lg mt-5">7.2</div>
                <h2 class="text-xl font-medium mb-1">News of the World</h2>
                <div class="mb-1">2021 • Sci-Fi</div>
                <p>
                  If you enjoy reading my Spoiler-Free reviews, please follow my
                  blog @ https://www.msbreviews.com. The superhero genre has
                  been growing exponentially during the last decade, so it's
                  bizarre to go.
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="slide mt-12 w-[8%] mx-3">
          <article class="float-left relative sw-[7%] my-0 mx-2.5s">
            <div
              class="info bottom-left absolute text-black italic opacity-0 text-left leading-5"
            >
              <h3>Nubra Valley</h3>
            </div>
            <div class="flex items-center">
              <div>
                <img src="@/assets/img/movie-1.png" />
              </div>
              <div class="bg-black px-6 w-full h-72">
                <div class="text-lg mt-5">7.2</div>
                <h2 class="text-xl font-medium mb-1">News of the World</h2>
                <div class="mb-1">2021 • Sci-Fi</div>
                <p>
                  If you enjoy reading my Spoiler-Free reviews, please follow my
                  blog @ https://www.msbreviews.com. The superhero genre has
                  been growing exponentially during the last decade, so it's
                  bizarre to go.
                </p>
              </div>
            </div>
          </article>
        </div> -->
      </div>
      <div
        class="navigation-manual absolute flex justify-center w-full mt-[-40px]"
      >
        <label
          for="radio1"
          class="manual-btn p-1.5 cursor-pointer rounded-xl"
        ></label>
        <label
          for="radio2"
          class="manual-btn p-1.5 cursor-pointer rounded-xl"
        ></label>
        <label
          for="radio3"
          class="manual-btn p-1.5 cursor-pointer rounded-xl"
        ></label>
        <label
          for="radio4"
          class="manual-btn p-1.5 cursor-pointer rounded-xl"
        ></label>
      </div>
    </div>
  </div>
</template>
