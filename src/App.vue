<template lang="html">
  <DefaultLayout>
    <p>Welcome to Homepage</p>
    <font-awesome-icon icon="fa-solid fa-user-secret" />
    <font-awesome-icon icon="fa-solid fa-user" />
    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
  </DefaultLayout>

</template>

<script lang="js">
import DefaultLayout from './components/layouts/DefaultLayout.vue';


export default {
  name: 'App',
  components: {
    DefaultLayout
  },

}
</script>
