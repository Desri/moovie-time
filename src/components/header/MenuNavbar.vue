<script setup lang="ts">
import { RouterLink } from 'vue-router'

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
  <header class="bg-gray-800 py-4 sticky top-0 z-20">
    <div class="w-4/5 mx-auto flex flex-wrap items-center">
      <div
        class="flex flex-shrink md:w-1/6 justify-center md:justify-start text-white"
      >
        <div class="flex items-center space-x-2">
          <RouterLink to="/">
            <img src="@/assets/img/logo.png" class="w-32" alt="Movie" />
          </RouterLink>
        </div>
      </div>
      <div
        class="flex flex-1 md:w-1/2 justify-center md:justify-start text-white px-2"
      >
        <span class="relative w-full">
          <div class="absolute top-[8px] left-2">
            <img
              src="@/assets/img/movie-icon.png"
              class="w-6"
              alt="movie-icon"
            />
          </div>
          <input
            type="search"
            placeholder="Find movie"
            class="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-2 px-2 pl-10 appearance-none leading-normal"
          />
          <div class="absolute top-[8px] right-[10px]">
            <img
              src="@/assets/img/search-icon.png"
              class="w-6"
              alt="movie-icon"
            />
          </div>
        </span>
      </div>
      <div
        class="flex w-full content-center justify-between md:w-1/3 md:justify-end"
      >
        <ul
          class="list-reset flex justify-between flex-1 md:flex-none items-center gap-8"
        >
          <li class="relative">
            <div
              class="flex gap-2 text-gray-300 tracking-wide font-medium hover:text-white cursor-pointer"
              @click="toggle()"
            >
              <img
                src="@/assets/img/grid-icon.png"
                class="w-6"
                alt="Grid Icon"
              />
              CATEGORIES
            </div>
            <ul
              id="usersubfunctions"
              ref="usersubfunctions"
              class="p-2 z-10 top-8 absolute bg-[#151c26] w-[126px] rounded-lg hidden"
            >
              <li>
                <RouterLink
                  to="/"
                  class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block"
                >
                  Action
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block"
                >
                  Adventure
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block"
                >
                  Animation
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block"
                >
                  Comedy
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block"
                >
                  Crime
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block"
                >
                  Crime
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block"
                >
                  Documentary
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block"
                >
                  Drama
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block"
                >
                  Family
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block"
                >
                  Fantasy
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block"
                >
                  History
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="hover:bg-[#2e353e] px-1.5 py-1 rounded-lg text-gray-300 block"
                >
                  Horror
                </RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-300 tracking-wide font-medium hover:text-white"
              >MOVIES</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-gray-300 tracking-wide font-medium hover:text-white"
              >TV SHOWS</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-gray-300 tracking-wide font-medium hover:text-white"
              >LOGIN</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
