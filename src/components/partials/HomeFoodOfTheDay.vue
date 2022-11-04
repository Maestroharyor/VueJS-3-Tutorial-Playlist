<template>
  <div class="bg-[#F5F6F7] py-20 px-5">
    <h3 class="mx-auto text-center px-5 text-4xl md:text-5xl mb-10 font-bold">
      Recipe of The Moment
      <span v-if="loading || store.state.recipeOfTheDay !== null">😉</span>
      <span v-else>😟</span>
    </h3>
    <Loader v-if="loading" />
    <div
      class="flex flex-col md:flex-row max-w-[1000px] mx-auto items-center gap-10"
      v-if="!loading && store.state.recipeOfTheDay !== null"
    >
      <div class="flex-1">
        <h4 class="text-4xl font-bold mb-6">
          {{ store.state.recipeOfTheDay.strMeal }}
        </h4>
        <div class="justify-start">
          <p
            class="text-green-900 mb-2 bg-green-50 border border-green-400 rounded-full w-fit px-5 py-1"
          >
            Instructions:
          </p>
          <p class="text-lg">
            {{ store.state.recipeOfTheDay.strInstructions.substring(0, 99) }}...
          </p>
        </div>
        <div class="mb-10 flex flex-wrap gap-5 mt-5">
          <router-link
            :to="{
              name: 'recipesCategories',
              params: {
                name: store.state.recipeOfTheDay.strCategory.toLowerCase(),
              },
            }"
            class="bg-white text-green-600 border border-green-600 hover:border-green-700 px-5 py-1.5 rounded-full text-sm transition duration-300 ease-in-out"
          >
            {{ store.state.recipeOfTheDay.strCategory }}</router-link
          >
        </div>
        <router-link
          :to="{
            name: 'recipesDetails',
            params: {
              id: `${store.state.recipeOfTheDay.strMeal.split(' ').join('-')}-${
                store.state.recipeOfTheDay.idMeal
              }`,
            },
          }"
          class="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
        >
          More Recipe Details</router-link
        >
      </div>
      <div class="flex-1">
        <img
          :src="store.state.recipeOfTheDay.strMealThumb"
          alt=""
          srcset=""
          class="rounded-tl shadow-[20px_20px_0px_2px_rgba(21,128,61,0.95)] border-4 border-gray-200 hover:border-[#F5F6F7] hover:rounded hover:shadow-[0px_0px_0px_10px_rgba(21,128,61,0.95)] transition duration-400 cursor-pointer hover:scale-95"
        />
      </div>
    </div>

    <ErrorLoading v-if="!loading && store.state.recipeOfTheDay === null" />
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useStore } from "vuex";
import Loader from "../elements/Loader.vue";
import ErrorLoading from "../elements/ErrorLoading.vue";

const store = useStore();
let loading = ref(false);

const getRecipeOfTheMoment = () => {
  loading.value = true;

  axios
    .get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => {
      // store.state.recipeOfTheDay.value = response.data.meals[0];
      store.commit("setRecipeOfTheDay", response.data.meals[0]);
      loading.value = false;
    })
    .catch((error) => {
      console.log(error);
      loading.value = false;
    });
};

if (store.state.recipeOfTheDay === null) {
  getRecipeOfTheMoment();
}
</script>
<style lang=""></style>
