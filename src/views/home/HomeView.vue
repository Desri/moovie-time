<script setup lang="ts">
import CardMovie from '@/components/card/CardMovie.vue'
</script>

<template>
  <main class="bg-[#292e35]">
    <div class="w-4/5 mx-auto py-16">
      <div class="flex justify-between items-center mb-12">
        <div>
          <div class="bg-red-500 h-1.5 w-24 mb-2.5"></div>
          <h2 class="text-2xl font-medium text-gray-300">Discover Movies</h2>
        </div>
        <div>
          <div class="flex items-center">
            <p>My Movies</p>
            <div class="bg-[#21252a] rounded-2xl px-3.5 py-1 ml-2.5">
              2 <span class="text-sm">movies</span>
            </div>
          </div>
        </div>
      </div>

      <div class="md:flex gap-8">
        <div class="md:w-1/4">
          <div class="bg-[#151c26] py-5 rounded-lg">
            <div class="px-3 border-b border-solid border-gray-600 pb-2.5 mb-5">
              <span class="font-medium text-lg pl-1">Sort Result By</span>
            </div>

            <div class="px-3 border-b border-solid border-gray-600 pb-5 mb-2.5">
              <div class="custom-select relative">
                <select class="text-[#d1d5db] w-full cursor-pointer">
                  <option value="0">Popularity</option>
                  <option value="1">Popularity Ascending</option>
                  <option value="2">Popularity Descending</option>
                  <option value="3">Popularity Date Ascending</option>
                  <option value="4">Popularity Date Descending</option>
                  <option value="5">Rating Ascending</option>
                  <option value="6">Rating Descending</option>
                </select>
              </div>
            </div>

            <div class="px-3 border-b border-solid border-gray-600 pb-3">
              <span class="font-medium text-lg pl-1">Genres</span>
            </div>

            <ul class="px-3 mt-3">
              <li>
                <label
                  class="list-movie block relative cursor-pointer hover:bg-[#2e353e] rounded-md p-2 text-gray-300"
                  >Actions
                  <input
                    type="checkbox"
                    name="option1"
                    value="actions"
                    class="absolute opacity-0 cursor-pointer h-0 w-0"
                  />
                  <span
                    class="checkmark bg-[#2e353e] absolute top-2.5 right-2 h-[18px] w-[18px] border-2 border-solid border-gray-600 rounded"
                  ></span>
                </label>
              </li>
              <li>
                <label
                  class="list-movie block relative cursor-pointer hover:bg-[#2e353e] rounded-md p-2 text-gray-300"
                  >Adventure
                  <input
                    type="checkbox"
                    name="option2"
                    value="adventure"
                    class="absolute opacity-0 cursor-pointer h-0 w-0"
                  />
                  <span
                    class="checkmark bg-[#2e353e] absolute top-2.5 right-2 h-[18px] w-[18px] border-2 border-solid border-gray-600 rounded"
                  ></span>
                </label>
              </li>
              <li>
                <label
                  class="list-movie block relative cursor-pointer hover:bg-[#2e353e] rounded-md p-2 text-gray-300"
                  >Animation
                  <input
                    type="checkbox"
                    name="option3"
                    value="animation"
                    class="absolute opacity-0 cursor-pointer h-0 w-0"
                  />
                  <span
                    class="checkmark bg-[#2e353e] absolute top-2.5 right-2 h-[18px] w-[18px] border-2 border-solid border-gray-600 rounded"
                  ></span>
                </label>
              </li>
              <li>
                <label
                  class="list-movie block relative cursor-pointer hover:bg-[#2e353e] rounded-md p-2 text-gray-300"
                  >Comedy
                  <input
                    type="checkbox"
                    name="option4"
                    value="comedy"
                    class="absolute opacity-0 cursor-pointer h-0 w-0"
                  />
                  <span
                    class="checkmark bg-[#2e353e] absolute top-2.5 right-2 h-[18px] w-[18px] border-2 border-solid border-gray-600 rounded"
                  ></span>
                </label>
              </li>
              <li>
                <label
                  class="list-movie block relative cursor-pointer hover:bg-[#2e353e] rounded-md p-2 text-gray-300"
                  >Crime
                  <input
                    type="checkbox"
                    name="option5"
                    value="crime"
                    class="absolute opacity-0 cursor-pointer h-0 w-0"
                  />
                  <span
                    class="checkmark bg-[#2e353e] absolute top-2.5 right-2 h-[18px] w-[18px] border-2 border-solid border-gray-600 rounded"
                  ></span>
                </label>
              </li>
              <li>
                <label
                  class="list-movie block relative cursor-pointer hover:bg-[#2e353e] rounded-md p-2 text-gray-300"
                  >Documentary
                  <input
                    type="checkbox"
                    name="option6"
                    value="documentary"
                    class="absolute opacity-0 cursor-pointer h-0 w-0"
                  />
                  <span
                    class="checkmark bg-[#2e353e] absolute top-2.5 right-2 h-[18px] w-[18px] border-2 border-solid border-gray-600 rounded"
                  ></span>
                </label>
              </li>
              <li>
                <label
                  class="list-movie block relative cursor-pointer hover:bg-[#2e353e] rounded-md p-2 text-gray-300"
                  >Drama
                  <input
                    type="checkbox"
                    name="option7"
                    value="drama"
                    class="absolute opacity-0 cursor-pointer h-0 w-0"
                  />
                  <span
                    class="checkmark bg-[#2e353e] absolute top-2.5 right-2 h-[18px] w-[18px] border-2 border-solid border-gray-600 rounded"
                  ></span>
                </label>
              </li>
              <li>
                <label
                  class="list-movie block relative cursor-pointer hover:bg-[#2e353e] rounded-md p-2 text-gray-300"
                  >Family
                  <input
                    type="checkbox"
                    name="option8"
                    value="family"
                    class="absolute opacity-0 cursor-pointer h-0 w-0"
                  />
                  <span
                    class="checkmark bg-[#2e353e] absolute top-2.5 right-2 h-[18px] w-[18px] border-2 border-solid border-gray-600 rounded"
                  ></span>
                </label>
              </li>
              <li>
                <label
                  class="list-movie block relative cursor-pointer hover:bg-[#2e353e] rounded-md p-2 text-gray-300"
                  >Fantasy
                  <input
                    type="checkbox"
                    name="option9"
                    value="fantasy"
                    class="absolute opacity-0 cursor-pointer h-0 w-0"
                  />
                  <span
                    class="checkmark bg-[#2e353e] absolute top-2.5 right-2 h-[18px] w-[18px] border-2 border-solid border-gray-600 rounded"
                  ></span>
                </label>
              </li>
              <li>
                <label
                  class="list-movie block relative cursor-pointer hover:bg-[#2e353e] rounded-md p-2 text-gray-300"
                  >History
                  <input
                    type="checkbox"
                    name="option10"
                    value="history"
                    class="absolute opacity-0 cursor-pointer h-0 w-0"
                  />
                  <span
                    class="checkmark bg-[#2e353e] absolute top-2.5 right-2 h-[18px] w-[18px] border-2 border-solid border-gray-600 rounded"
                  ></span>
                </label>
              </li>
              <li>
                <label
                  class="list-movie block relative cursor-pointer hover:bg-[#2e353e] rounded-md p-2 text-gray-300"
                  >Horror
                  <input
                    type="checkbox"
                    name="option11"
                    value="horror"
                    class="absolute opacity-0 cursor-pointer h-0 w-0"
                  />
                  <span
                    class="checkmark bg-[#2e353e] absolute top-2.5 right-2 h-[18px] w-[18px] border-2 border-solid border-gray-600 rounded"
                  ></span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:w-3/4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
            <CardMovie
              :title="'Wonder Woman 1984'"
              :year="'2020'"
              :rating="'7.0'"
            />
            <CardMovie :title="'Below Zero'" :year="'2021'" :rating="'6.4'" />
            <CardMovie
              :title="'The Little Things'"
              :year="'2021'"
              :rating="'6.3'"
            />
            <CardMovie
              :title="'Outside the Wire'"
              :year="'2020'"
              :rating="'6.5'"
            />
          </div>
          <div class="text-center mt-14">
            <button
              class="bg-[#ff0000] text-white rounded-3xl tracking-wider font-medium px-8 py-2"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
