<template lang="">
  <div class="py-20 px-5">
    <div
      class="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-5"
    >
      <div class="flex-1">
        <h3 class="text-5xl font-bold mb-4">Recipes For you</h3>
        <p class="text-lg">
          Loading Recipes from:
          <router-link
            :to="{ name: 'recipesCategories', params: { name: 'category-1' } }"
            class="bg-white text-green-600 border border-green-600 hover:border-green-700 px-5 py-1.5 rounded-full text-sm transition duration-300 ease-in-out"
          >
            Category 1
          </router-link>
        </p>
      </div>

      <div class="flex-1">
        <select
          class="flex-1 block w-full mt-1 rounded-md bg-gray-100 border focus:border-gray-500 focus:bg-white focus:ring-0 cursor-pointer"
        >
          <option class="cursor-pointer" value="Beef">Beef</option>
          <option class="cursor-pointer" value="Chicken">Chicken</option>
          <option class="cursor-pointer" value="Dessert">Dessert</option>
          <option class="cursor-pointer" value="Lamb">Lamb</option>
          <option class="cursor-pointer" value="Miscellaneous">
            Miscellaneous
          </option>
          <option class="cursor-pointer" value="Pasta">Pasta</option>
          <option class="cursor-pointer" value="Pork">Pork</option>
          <option class="cursor-pointer" value="Seafood">Seafood</option>
          <option class="cursor-pointer" value="Side">Side</option>
          <option class="cursor-pointer" value="Starter">Starter</option>
          <option class="cursor-pointer" value="Vegan">Vegan</option>
          <option class="cursor-pointer" value="Vegetarian">Vegetarian</option>
          <option class="cursor-pointer" value="Breakfast">Breakfast</option>
          <option class="cursor-pointer" value="Goat">Goat</option>
        </select>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-20 max-w-[1100px] mx-auto pt-16"
    >
      <RecipeCard
        v-for="(item, index) in recipes"
        :key="index"
        :recipe="item"
      />
    </div>
  </div>
</template>
<script setup>
// Components
import RecipeCard from "../cards/RecipeCard.vue";

// Data
import recipesData from "../../data/recipes.json";
let recipes = recipesData.meals;
</script>
<style lang=""></style>
