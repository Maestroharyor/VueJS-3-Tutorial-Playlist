<script setup>
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import RecipeCategoryList from "../components/partials/RecipeCategoryList.vue";
</script>

<template>
  <DefaultLayout>
    <div class="bg-[#F5F6F7] py-20 px-5">
      <h3 class="mx-auto text-center px-5 text-4xl md:text-5xl mb-10 font-bold">
        Viewing Category 1
        <span>😁</span>
      </h3>
      <div
        class="flex flex-col md:flex-row max-w-[1200px] mx-auto items-center gap-20"
      >
        <div class="flex-1">
          <h4 class="text-4xl font-bold mb-6">
            More About <span class="text-green-600"> Category 1 </span>
          </h4>
          <div class="justify-start">
            <p class="text-lg leading-loose">
              Reprehenderit in et elit mollit aute enim mollit qui. Cillum
              laborum amet dolor voluptate id occaecat. Labore in aliqua dolor
              veniam occaecat occaecat nulla. Velit aute ad ad reprehenderit
              consectetur nostrud sit. Laborum aliquip sint aute nulla labore
              ullamco sunt occaecat. Lorem magna reprehenderit cupidatat
              excepteur dolore labore tempor Lorem qui qui officia laboris elit.
            </p>
          </div>

          <p class="mt-3 font-bold">Tags:</p>
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
          </div>
        </div>
        <div class="flex-1">
          <img
            src="../assets/foods/chicken-g754ef9688_640.jpg"
            alt=""
            srcset=""
            class="rounded-tl shadow-[20px_20px_0px_2px_rgba(21,128,61,0.95)] border-4 border-gray-200 hover:border-[#F5F6F7] hover:rounded hover:shadow-[0px_0px_0px_10px_rgba(21,128,61,0.95)] transition duration-400 cursor-pointer hover:scale-95 w-full"
          />
        </div>
      </div>
    </div>
    <RecipeCategoryList />
  </DefaultLayout>
</template>
