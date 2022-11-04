<template lang="">
  <div class="bg-[#F5F6F7] py-20 px-5" v-if="categoryInfo !== null">
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
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
let categoryInfo = computed(
  () =>
    store.state.categories.filter(
      (category) =>
        category.strCategory.toLowerCase() === route.params.name.toLowerCase()
    )[0]
);

console.log(categoryInfo.value);
</script>
<style lang=""></style>
