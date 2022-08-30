<template lang="html">
  <DefaultLayout>
    <div class="py-7 max-w-[1000px] mx-auto text-center">
      <h1 class="text-6xl mb-10 font-bold">Computed Properties</h1>

      <div class="mb-10">
        <p>{{  fullName  }}</p>
      </div>

      <div>
        <div class="flex gap-5 items-center justify-between">
          <button class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition duration-300"
            @click="ninjutsuScore++">Increase Ninjutsu
            Score</button>
          <button class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition duration-300"
            @click="taijutsuScore++">Increase Taijutsu
            Score</button>
          <button class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition duration-300"
            @click="genjustsuScore++">Increase Genjutsu
            Score</button>
        </div>

        <div class="flex gap-5 items-center justify-between mt-10">
          <p class="text-4xl font-bold">{{  ninjutsuScore  }}</p>
          <p class="text-4xl font-bold">{{  taijutsuScore  }}</p>
          <p class="text-4xl font-bold">{{  genjustsuScore  }}</p>
        </div>

        <div class="flex gap-5 items-center justify-between mt-10">
          <p class="text-xl text-center font-bold">Age * Ninjustu Score = {{  increaseNinjustu  }}</p>
          <p class="text-xl text-center font-bold">Age * Taijutsu Score = {{  increaseTaijutsu  }}</p>
          <p class="text-xl text-center font-bold">Age * Genjutsu Score = {{  increaseGenjutsu  }}</p>
        </div>


      </div>
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
      firstName: "Naruto",
      lastName: "Uzumaki",
      age: 16,
      ninjutsuScore: 0,
      taijutsuScore: 0,
      genjustsuScore: 0
    }
  },

  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    increaseNinjustu() {
      console.log("Increase ninjutsu")
      return this.ninjutsuScore * this.age
    },
    increaseTaijutsu() {
      console.log("Increase taijutsu")
      return this.taijutsuScore * this.age
    },
    increaseGenjutsu() {
      console.log("Increase genjutsu")
      return this.genjustsuScore * this.age
    },
  }



}
</script>