<template lang="html">
  <div>
    <p>{{ isSwitchedOn ? "💡" : "Switched Off" }} </p>
    <button @click="changeSwitch">{{ isSwitchedOn ? "Switch off" : "Switched on" }}</button>

    <div>
      <p>{{ myName }}</p>
      <input type="text"
        @keyup="logToConsole">
    </div>

  </div>

</template>

<script lang="js">

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      myName: "",
      isSwitchedOn: false
    }
  },
  methods: {
    changeSwitch() {
      this.isSwitchedOn = !this.isSwitchedOn
    },
    logToConsole(e) {
      this.myName = e.target.value
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
