<template lang="html">
  <div>
    <ParentComponent>
      <Component1 />
      <Component2 />
    </ParentComponent>


  </div>

</template>

<script lang="js">
import Component1 from './components/Component1.vue'
import Component2 from './components/Component2.vue'
import ParentComponent from './components/ParentComponent.vue'

export default {
  name: 'App',
  components: {
    Component1,
    Component2,
    ParentComponent
  },
  data() {
    return {
      myName: "",
      isSwitchedOn: false
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

input.custom_style {
  padding: 20px;

}
</style>
