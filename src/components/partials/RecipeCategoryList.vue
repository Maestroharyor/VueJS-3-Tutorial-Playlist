<template lang="">
  <div class="py-20 px-5">
    <div
      class="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-5"
    >
      <div class="flex-1">
        <h3 class="text-5xl font-bold mb-4 text-center">
          Recipes in {{ $router.currentRoute.value.params.name }}
        </h3>
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
