<template lang="">
  <DefaultLayout>
    <div class="py-20 px-10">Fetch Detail View</div>
    <div class="text-center animate-bounce text-lg" v-if="loading">
      Loading...
    </div>

    <div class="text-lg" v-if="!loading">
      <p class="text-2xl font-bold mb-5">{{ post.title }}</p>
      <p class="text-lg">{{ post.body }}</p>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
let post = ref({});
let loading = ref(false);

const fetchData = () => {
  loading.value = true;
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then((response) => {
      post.value = response.data;
      loading.value = false;
    })
    .catch((error) => {
      console.log(error);
      loading.value = false;
    });
};

fetchData();
</script>
<style lang=""></style>
