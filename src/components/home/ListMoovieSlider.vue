<script setup lang="ts"></script>

<template>
  <div class="box-carousel relative my-14">
    <input checked type="radio" name="slider" id="slide1" />
    <input type="radio" name="slider" id="slide2" />
    <input type="radio" name="slider" id="slide3" />
    <input type="radio" name="slider" id="slide4" />
    <input type="radio" name="slider" id="slide5" />

    <div class="slider-wrapper w-full overflow-hidden">
      <div class="inner">
        <article class="float-left relative w-[7%] my-0 mx-2.5">
          <div
            class="info top-left top-[30px] left-[30px] absolute text-black italic opacity-0 text-left leading-5"
          >
            <h3>Malacca</h3>
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
                blog @ https://www.msbreviews.com. The superhero genre has been
                growing exponentially during the last decade, so it's bizarre to
                go.
              </p>
            </div>
          </div>
        </article>

        <article class="float-left relative w-[7%] my-0 mx-2.5">
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
                blog @ https://www.msbreviews.com. The superhero genre has been
                growing exponentially during the last decade, so it's bizarre to
                go.
              </p>
            </div>
          </div>
        </article>

        <article class="float-left relative w-[7%] my-0 mx-2.5">
          <div
            class="info bottom-left bottom-[30px] left-[30px] absolute text-black italic opacity-0 text-left leading-5"
          >
            <h3>New Delhi</h3>
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
                blog @ https://www.msbreviews.com. The superhero genre has been
                growing exponentially during the last decade, so it's bizarre to
                go.
              </p>
            </div>
          </div>
        </article>

        <article class="float-left relative w-[7%] my-0 mx-2.5">
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
                blog @ https://www.msbreviews.com. The superhero genre has been
                growing exponentially during the last decade, so it's bizarre to
                go.
              </p>
            </div>
          </div>
        </article>

        <article class="float-left relative w-[7%] my-0 mx-2.5">
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
                blog @ https://www.msbreviews.com. The superhero genre has been
                growing exponentially during the last decade, so it's bizarre to
                go.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="slider-dot-control absolute w-full text-center bottom-[-55px]">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
      <label for="slide5"></label>
    </div>
  </div>
</template>
