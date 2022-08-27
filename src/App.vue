<template lang="html">
  <HelloWorldComponent :title="title" />
  <CardComponent title="Header 1"
    description="Lorem cupidatat eiusmod laborum fugiat irure aute ad consectetur." />
  <!-- <CardComponent title="Header 2"
    description="Adipisicing quis officia Lorem culpa culpa cillum laborum proident occaecat veniam anim." />
  <CardComponent title="Header 3"
    description="Lorem excepteur ullamco est culpa mollit aliqua sit irure aute cupidatat elit ea sunt officia." />
  <CardComponent title="Header 4"
    description="Consectetur deserunt dolore eiusmod reprehenderit amet minim reprehenderit aute." />
  <CardComponent title="Header 5"
    description="Do incididunt elit laborum excepteur." />
  <CardComponent title="New Header 1"
    description="Est consectetur mollit deserunt ad." /> -->
  <LayoutComponentVue>

    <CardComponent title="Header 1"
      description="Lorem cupidatat eiusmod laborum fugiat irure aute ad consectetur." />
    <template v-slot:afterFooter>
      <p>&copy; Maestro</p>
    </template>

  </LayoutComponentVue>

</template>

<script lang="js">
import HelloWorldComponent from './components/HelloWorldComponent.vue';
import CardComponent from './components/CardComponent.vue';
import LayoutComponentVue from './components/LayoutComponent.vue';


export default {
  name: 'App',
  components: {
    HelloWorldComponent,
    CardComponent,
    LayoutComponentVue
  },
  data() {
    return {
      title: "VueJS Lesson 4"
    }
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
