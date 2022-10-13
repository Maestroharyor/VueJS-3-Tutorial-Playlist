<script setup>
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import HomeFeaturedRecipes from "../components/partials/HomeFeaturedRecipes.vue";
import HomeFoodOfTheDay from "../components/partials/HomeFoodOfTheDay.vue";
import RecipesDetailInfo from "../components/partials/RecipesDetailInfo.vue";
</script>

<template>
  <DefaultLayout>
    <RecipesDetailInfo />
    <HomeFeaturedRecipes />
    <hr />
    <HomeFoodOfTheDay />
  </DefaultLayout>
</template>
