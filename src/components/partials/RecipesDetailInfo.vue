<template lang="">
  <div class="bg-white py-20 px-5 border-t">
    <div
      class="grid grid-cols-1 md:grid-cols-2 max-w-[1000px] mx-auto items-start gap-10"
    >
      <div class="">
        <h3 class="text-4xl font-bold mb-6">Meal Detail</h3>
        <div class="flex flex-col gap-3 mb-10">
          <h6 class="font-bold text-xl">Ingredients:</h6>
          <div class="flex flex-wrap gap-x-5 gap-y-5">
            <p
              class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm"
            >
              Ingredient 1
            </p>
          </div>
        </div>

        <div class="justify-start">
          <p
            class="text-green-900 mb-2 bg-green-50 border border-green-400 rounded-full w-fit px-5 py-1 mt-5"
          >
            Instructions:
          </p>
          <p class="text-lg">
            Non mollit nisi excepteur fugiat veniam ea tempor proident
            exercitation adipisicing proident commodo mollit commodo. Deserunt
            aute voluptate quis pariatur ullamco incididunt dolor ea pariatur
            culpa enim excepteur id qui. Duis incididunt veniam veniam veniam et
            dolor duis labore minim ullamco aliqua tempor aliqua sunt. Consequat
            ipsum elit laborum laborum minim ex anim ex ut labore aute irure. Et
            occaecat magna aute dolor. Ut culpa commodo tempor veniam aute ut.
          </p>
        </div>
        <p class="mt-5 font-bold">Category:</p>
        <div class="mb-10 flex flex-wrap gap-5 mt-3">
          <router-link
            :to="{
              name: 'recipesCategories',
              params: { name: 'category-1' },
            }"
            class="bg-white text-green-600 border border-green-600 hover:border-green-700 px-5 py-1.5 rounded-full text-sm transition duration-300 ease-in-out"
          >
            Category 1
          </router-link>
        </div>

        <p class="mt-3 font-bold">Tags:</p>
        <div class="mb-10 flex flex-wrap gap-5 mt-3">
          <p
            :to="{
              name: 'recipesCategories',
              params: { name: 'tag-1' },
            }"
            class="text-white bg-green-600 border border-green-600 px-5 py-1.5 rounded-full text-sm"
          >
            Tag 1
          </p>
        </div>

        <a
          href="https://youtube.com"
          target="_blank"
          class="py-2 px-5 rounded bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out inline-flex items-center gap-5 text-white mt-5"
        >
          <font-awesome-icon icon="fa-solid fa-play" class="" /><span
            >Watch on YouTube</span
          >
        </a>
      </div>
      <div class="sticky top-8">
        <img
          src="../../assets/foods/chicken-g754ef9688_640.jpg"
          alt=""
          srcset=""
          class="rounded-tl shadow-[20px_20px_0px_2px_rgba(21,128,61,0.95)] border-4 border-gray-200 hover:border-[#F5F6F7] hover:rounded hover:shadow-[0px_0px_0px_10px_rgba(21,128,61,0.95)] transition duration-400 cursor-pointer hover:scale-95"
        />
      </div>

      <div class="md:col-span-2 border-t pt-5 border-gray-300">
        <h5 class="text-4xl font-bold mb-4">More Info:</h5>

        <div class="flex flex-col gap-3">
          <h6 class="font-bold text-xl">Area of origin:</h6>
          <p
            class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm"
          >
            Area
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
