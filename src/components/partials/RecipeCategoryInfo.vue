<template lang="">
  <Loader v-if="loading" />
  <div class="bg-[#F5F6F7] py-20 px-5" v-if="!loading && categoryInfo !== null">
    <h3 class="mx-auto text-center px-5 text-4xl md:text-5xl mb-10 font-bold">
      Viewing {{ categoryInfo.strCategory }}
      <span>😁</span>
    </h3>
    <div
      class="flex flex-col md:flex-row max-w-[1200px] mx-auto items-center gap-20"
    >
      <div class="flex-1">
        <h4 class="text-4xl font-bold mb-6">
          More About
          <span class="text-green-600"> {{ categoryInfo.strCategory }} </span>
        </h4>
        <div class="justify-start">
          <p class="text-lg leading-loose">
            {{ categoryInfo.strCategoryDescription }}
          </p>
        </div>

        <!-- <p class="mt-3 font-bold">Tags:</p>
        <div class="mb-10 flex flex-wrap gap-5 mt-3">
          <p
            :to="{
              name: 'recipesCategories',
              params: { name: 'category-1' },
            }"
            class="text-white bg-green-600 border border-green-600 px-5 py-1.5 rounded-full text-sm"
          >
            Tag 1
          </p>
        </div> -->
      </div>
      <div class="flex-1">
        <img
          :src="categoryInfo.strCategoryThumb"
          alt=""
          srcset=""
          class="rounded-tl shadow-[20px_20px_0px_2px_rgba(21,128,61,0.95)] border-4 border-gray-200 hover:border-[#F5F6F7] hover:rounded hover:shadow-[0px_0px_0px_10px_rgba(21,128,61,0.95)] transition duration-400 cursor-pointer hover:scale-95 w-full"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Loader from "../elements/Loader.vue";

const route = useRoute();
let categoryInfo = ref(null);
let loading = ref(false);

const getCategoryInfo = () => {
  loading.value = true;

  axios
    .get("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => {
      console.log(response.data);
      let currentCategory = response.data.categories.filter(
        (category) => category.strCategory.toLowerCase() === route.params.name
      );
      categoryInfo.value = currentCategory[0];
      loading.value = false;
    })
    .catch((error) => {
      console.log(error);
      loading.value = false;
    });
};

getCategoryInfo();
</script>
<style lang=""></style>
