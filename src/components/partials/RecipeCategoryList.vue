<template lang="">
  <div class="py-20 px-5">
    <Loader v-if="loading" />
    <div
      class="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-5"
      v-if="!loading && recipes.length"
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
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import RecipeCard from "../cards/RecipeCard.vue";
import Loader from "../elements/Loader.vue";

const route = useRoute();
let recipes = ref([]);
let loading = ref(false);

const getCategoryRecipes = () => {
  loading.value = true;

  axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.name}`
    )
    .then((response) => {
      recipes.value = response.data.meals;
      loading.value = false;
    })
    .catch((error) => {
      console.log(error);
      loading.value = false;
    });
};

getCategoryRecipes();
</script>
<style lang=""></style>
