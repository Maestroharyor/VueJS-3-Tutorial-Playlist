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
            :to="{ name: 'recipesCategories', params: { name: tempCategory } }"
            class="bg-white text-green-600 border border-green-600 hover:border-green-700 px-5 py-1.5 rounded-full text-sm transition duration-300 ease-in-out"
          >
            {{ tempCategory }}
          </router-link>
        </p>
      </div>

      <div class="flex-1">
        <select
          class="flex-1 block w-full mt-1 rounded-md bg-gray-100 border focus:border-gray-500 focus:bg-white focus:ring-0 cursor-pointer py-2 px-1"
          v-model="tempCategory"
        >
          <option
            class="cursor-pointer"
            :value="item.strCategory"
            v-for="(item, index) in store.state.categories"
            :key="index"
          >
            {{ item.strCategory }}
          </option>
        </select>
      </div>
    </div>
    <Loader v-if="loading" />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-20 max-w-[1100px] mx-auto pt-16"
      v-if="!loading && store.state.currentRecipesList.length"
    >
      <RecipeCard
        v-for="(item, index) in store.state.currentRecipesList"
        :key="index"
        :recipe="item"
      />
    </div>
  </div>
</template>
<script setup>
// Components
import axios from "axios";
import { ref, watch } from "vue";
import { useStore } from "vuex";
import RecipeCard from "../cards/RecipeCard.vue";
import Loader from "../elements/Loader.vue";

const store = useStore();
let loading = ref(false);
const tempCategory = ref(store.getters.getSelectedCategory);

const getRecipesList = () => {
  loading.value = true;

  axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${tempCategory.value}`
    )
    .then((response) => {
      // store.state.currentRecipesList.value = response.data.meals;
      store.commit("setCurrentRecipesList", response.data.meals);
      loading.value = false;
    })
    .catch((error) => {
      console.log(error);
      loading.value = false;
    });
};

if (!store.state.currentRecipesList.length) {
  getRecipesList();
}

watch(tempCategory, () => {
  getRecipesList();
});
</script>
<style lang=""></style>
