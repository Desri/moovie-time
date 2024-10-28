<script setup lang="ts"></script>

<template>
  <span class="relative w-full">
    <div class="absolute top-[8px] left-2">
      <img src="@/assets/img/movie-icon.png" class="w-6" alt="movie-icon" />
    </div>
    <input
      type="search"
      placeholder="Find movie"
      class="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-2 px-2 pl-10 appearance-none leading-normal"
    />
    <div class="absolute top-[8px] right-[10px]">
      <img src="@/assets/img/search-icon.png" class="w-6" alt="movie-icon" />
    </div>
  </span>
</template>
