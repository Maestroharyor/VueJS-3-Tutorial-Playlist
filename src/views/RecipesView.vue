<script setup>
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import HomeFoodOfTheDay from "../components/partials/HomeFoodOfTheDay.vue";
import HomeFeaturedRecipes from "../components/partials/HomeFeaturedRecipes.vue";
import RecipesList from "../components/partials/RecipesList.vue";
</script>

<template>
  <DefaultLayout>
    <HomeFoodOfTheDay />
    <RecipesList />
    <HomeFeaturedRecipes />
  </DefaultLayout>
</template>
