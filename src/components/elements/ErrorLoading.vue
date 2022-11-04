<template lang="">
  <div
    class="max-w-[500px] px-5 mx-auto flex flex-col items-center justify-center gap-5"
  >
    <p class="text-3xl font-medium text-red-600">OOPS... Recipe Not Found 😟</p>
    <button
      class="bg-green-600 px-5 py-2 rounded text-white inline-flex gap-3 items-center hover:bg-green-700 transition ease-in-out duration-300"
      @click="router.go(0)"
    >
      <span>Please Reload Page</span>
      <font-awesome-icon icon="fa-solid fa-circle-notch" class="text-white" />
    </button>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<style lang=""></style>
