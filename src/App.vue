<template lang="html">
  <DefaultLayout>
    <div class="p-10 flex flex-col gap-5 items-center justify-center">
      <p class="text-3xl">Welcome to {{ name }}</p>

      <input type="number"
        class="text-2xl p-5 border rounded"
        v-model.number="name">



      <button @click="changeName"
        class="bg-green-500 text-white px-8 py-2 rounded hover:bg-green-600 transition">Change Name</button>

    </div>


  </DefaultLayout>

</template>

<script lang="js">
import DefaultLayout from './components/layouts/DefaultLayout.vue';


export default {
  name: 'App',
  components: {
    DefaultLayout
  },
  data() {
    return {
      name: "12345",
    }
  },
  methods: {
    changeName() {
      if (this.name.toLowerCase() === "lifetechfacts") {
        this.name = "Maestro"
      } else {
        this.name = "Lifetechfacts"
      }

    },
    handleChange(e) {
      this.name = e.target.value
    }
  },

}
</script>
