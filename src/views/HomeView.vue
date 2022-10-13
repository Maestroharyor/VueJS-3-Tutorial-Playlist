<script setup>
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import HomeHero from '../components/partials/HomeHero.vue';
import HomeFoodOfTheDay from '../components/partials/HomeFoodOfTheDay.vue';
import HomePopularFoods from '../components/partials/HomePopularFoods.vue';
import HomeFeaturedRecipes from '../components/partials/HomeFeaturedRecipes.vue';
</script>

<template>
  <DefaultLayout>
    <HomeHero />
    <HomeFoodOfTheDay />
    <HomePopularFoods />
    <HomeFeaturedRecipes />
  </DefaultLayout>

</template>
