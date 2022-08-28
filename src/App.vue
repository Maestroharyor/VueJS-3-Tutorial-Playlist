<template lang="html">
  <DefaultLayout>
    <div class="p-10 flex flex-col gap-5 items-center justify-center">
      <p class="text-3xl">Welcome to {{ name }}</p>

      <input type="text"
        class="text-2xl p-5 border rounded"
        :value="name">

      <a :href="url">My Link</a>



      <button @click="changeName"
        class="bg-green-500 text-white px-8 py-2 rounded hover:bg-green-600 transition">Change Name</button>
      <button @click="changeLink"
        class="bg-orange-500 text-white px-8 py-2 rounded hover:bg-orange-600 transition">Change Link</button>
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
      name: "Lifetechfacts",
      url: "https://thelifetechfacts.com"
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
    changeLink() {
      this.url = "https://google.com"

    },
  },

}
</script>
