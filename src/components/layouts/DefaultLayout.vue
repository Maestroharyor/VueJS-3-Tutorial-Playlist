<template>
  <MainHeader />
  <MobileHeader />
  <slot></slot>
  <Footer />
</template>
<script>
import MainHeader from "../headers/MainHeader.vue";
import MobileHeader from "../headers/MobileHeader.vue";
import Footer from "../footers/Footer.vue";
export default {
  components: { MainHeader, MobileHeader, Footer },
};
</script>
<style lang=""></style>
