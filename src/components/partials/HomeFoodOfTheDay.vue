<template>
  <div class="bg-[#F5F6F7] py-20 px-5">
    <h3 class="mx-auto text-center px-5 text-4xl md:text-5xl mb-10 font-bold">
      Recipe of The Moment <span>😉</span>
      <span>😟</span>
    </h3>
    <div
      class="flex flex-col md:flex-row max-w-[1000px] mx-auto items-center gap-10"
    >
      <div class="flex-1">
        <h4 class="text-4xl font-bold mb-6">Recipe Name</h4>
        <div class="justify-start">
          <p
            class="text-green-900 mb-2 bg-green-50 border border-green-400 rounded-full w-fit px-5 py-1"
          >
            Instructions:
          </p>
          <p class="text-lg">
            Esse mollit et eiusmod sint non cupidatat elit nulla cupidatat ea
            commodo deserunt sunt nisi....
          </p>
        </div>
        <div class="mb-10 flex flex-wrap gap-5 mt-5">
          <router-link
            :to="{ name: 'recipesCategories', params: { name: 'category-1' } }"
            class="bg-white text-green-600 border border-green-600 hover:border-green-700 px-5 py-1.5 rounded-full text-sm transition duration-300 ease-in-out"
          >
            Category 1</router-link
          >
        </div>
        <router-link
          :to="{ name: 'recipesDetails', params: { id: `category-1` } }"
          class="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
        >
          More Recipe Details</router-link
        >
      </div>
      <div class="flex-1">
        <img
          src="../../assets/foods/chicken-g754ef9688_640.jpg"
          alt=""
          srcset=""
          class="rounded-tl shadow-[20px_20px_0px_2px_rgba(21,128,61,0.95)] border-4 border-gray-200 hover:border-[#F5F6F7] hover:rounded hover:shadow-[0px_0px_0px_10px_rgba(21,128,61,0.95)] transition duration-400 cursor-pointer hover:scale-95"
        />
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang=""></style>
