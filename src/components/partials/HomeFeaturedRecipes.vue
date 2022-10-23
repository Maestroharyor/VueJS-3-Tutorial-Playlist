<template lang="">
  <div class="bg-[#F5F6F7] mt-10 py-20 px-5">
    <h3 class="mx-auto text-center px-5 text-4xl md:text-5xl mb-10 font-bold">
      Featured Recipes
    </h3>
    <Loader v-if="loading" />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-[1100px] mx-auto pt-8"
      v-if="!loading && recipes.length"
    >
      <RecipeCard
        v-for="(item, index) in recipes"
        :key="index"
        :recipe="item"
      />
    </div>

    <div class="flex items-center justify-center mt-12">
      <router-link
        to="/recipes"
        class="bg-white text-green-600 border-2 border-green-600 hover:border-green-700 px-8 py-4 rounded-lg text-xl transition duration-300 ease-in-out text-center hover:text-green-700"
      >
        See More Recipes</router-link
      >
    </div>
  </div>
</template>
<script setup>
// Components
import axios from "axios";
import { ref } from "vue";
import RecipeCard from "../cards/RecipeCard.vue";
import Loader from "../elements/Loader.vue";

let recipes = ref([]);
let loading = ref(false);

const getFeaturedRecipes = () => {
  loading.value = true;

  axios
    .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((response) => {
      recipes.value = response.data.meals.splice(0, 3);
      loading.value = false;
    })
    .catch((error) => {
      console.log(error);
      loading.value = false;
    });
};

getFeaturedRecipes();
</script>
<style lang=""></style>
