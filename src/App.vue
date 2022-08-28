<template lang="html">
  <DefaultLayout>
    <div class="flex flex-col gap-5 justify-center items-center py-20">
      <h3 class="text-4xl font-bold text-green-600">TO do list</h3>
      <p class="text-3xl cursor-pointer"
        :style="{ color: active ? activeColor : nonActiveColor }"
        @click="toggleActive">Learn VueJS</p>
    </div>

    {{ active }}
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
      active: false,
      activeColor: "red",
      nonActiveColor: "green"
    }
  },
  methods: {
    toggleActive() {
      this.active = !this.active

    },
  },

}
</script>
