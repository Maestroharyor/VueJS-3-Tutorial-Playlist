<template lang="">
  <DefaultLayout>
    <div class="py-20 px-10">Test View</div>
    <button
      class="text-white bg-green-500 hover:bg-green-700 px-5 py-2"
      @click="createData"
    >
      Add New
    </button>
    <div class="text-center animate-bounce text-lg" v-if="loading">
      Loading...
    </div>
    <div class="max-w-[1000px] mx-auto flex flex-col gap-3 divide-y">
      <div v-for="(item, index) in posts" :key="index">
        <router-link :to="{ name: 'fetchDetail', params: { id: item.id } }">{{
          item.title
        }}</router-link>
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import axios from "axios";
import { ref } from "vue";
let posts = ref([]);
let loading = ref(false);

const fetchData = () => {
  loading.value = true;
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      posts.value = response.data;
      loading.value = false;
    })
    .catch((error) => {
      console.log(error);
      loading.value = false;
    });
};

const createData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "test2",
      body: "Mollit non aliquip commodo quis irure sunt id nisi et magna duis sunt laboris occaecat. Sunt exercitation eu consequat dolor dolor laboris sunt ipsum ea labore ut aliquip fugiat. Ullamco est mollit quis et duis minim ea eiusmod consequat ullamco. Elit mollit commodo quis esse aliqua in.",
      userId: 303,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

fetchData();
</script>
<style lang=""></style>
