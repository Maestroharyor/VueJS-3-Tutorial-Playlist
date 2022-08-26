<template lang="html">
  <HelloWorldComponent />
  <CardComponent />
  <CardComponent />
  <CardComponent />
  <CardComponent />
  <CardComponent />
  <CardComponent />
</template>

<script lang="js">
import HelloWorldComponent from './components/HelloWorldComponent.vue';
import CardComponent from './components/CardComponent.vue';


export default {
  name: 'App',
  components: {
    HelloWorldComponent,
    CardComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
