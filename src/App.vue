<template lang="html">
  <div>
    <p>{{ isSwitchedOn ? "💡" : "Switched Off" }} </p>
    <button @click="changeSwitch">{{ isSwitchedOn ? "Switch off" : "Switched on" }}</button>

    <div>
      <p>{{ myName }}</p>
      <input type="text"
        @keyup="logToConsole"
        ref="input">
    </div>

    <button @click="handleRef">Handle Ref</button>

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
    },
    handleRef() {
      if (this.$refs.input.classList.contains("custom_style")) {
        this.$refs.input.classList.remove("custom_style")
        this.$refs.input.focus()

      } else {
        this.$refs.input.classList.add("custom_style")
      }

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
