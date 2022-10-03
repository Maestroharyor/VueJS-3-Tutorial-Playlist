<template>
  <div class="home">

    <input type="text"
      v-model="search">

    <div>
      <ul>
        <li v-for="ninja in computedNinjas"
          :key="ninja">{{ninja}}</li>
      </ul>
    </div>
    <TestComponent :title="search" />
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect, onMounted, onUpdated } from 'vue';
import TestComponent from '@/components/TestComponent.vue';

console.log("Setup ran");
let search = ref("");
const ninjas = ref(["neji", "naruto", "sasuke", "sakura", "anko", "asuma", "boruto", "choji", "ebisu", "hanabi", "himawari"]);
const computedNinjas = computed(() => {
  return ninjas.value.filter(ninja => ninja.includes(search.value));
});
watch(search, () => {
  console.log(`The value of search is ${search.value}`);
});
watchEffect(() => {
  console.log("Wactch effect active", search.value);
});
onMounted(() => {
  console.log("Now mounted");
});
onUpdated(() => {
  console.log("Now updated");
});


</script>
