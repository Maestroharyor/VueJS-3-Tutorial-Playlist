<script setup>
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import RecipeCategoryList from "../components/partials/RecipeCategoryList.vue";
import RecipeCategoryInfo from "../components/partials/RecipeCategoryInfo.vue";
</script>

<template>
  <DefaultLayout>
    <RecipeCategoryInfo />
    <RecipeCategoryList />
  </DefaultLayout>
</template>
