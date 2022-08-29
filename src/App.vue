<template lang="html">
  <DefaultLayout>
    <!-- 
    <div class="max-w-[1000px] mx-auto py-20">
      <h3 class="text-3xl font-bold text-center">List</h3>
      <div class="flex flex-col gap-5 text-center py-10">
        <div v-for="(item, index) in dataList"
          :key="index"
          @click="filterTodos(item.id)">
          {{ item.title }}
        </div>
      </div>
    </div> -->

    <!-- <div v-if="lightMode"
      class="bg-green-500 p-5 text-white">Light Mode</div>
    <div v-else
      class="bg-red-500 p-3 text-white">Dark Mode</div>

    {{ lightMode }}

    <button @click="switchMode">change</button> -->
    <p v-big>Increased Font Size</p>
    <div v-big>
      Adjust font size
    </div>

    <div>
      <input type="text"
        class="border p-5"
        v-focus>
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
      lightMode: false,
      dataList: [
        {
          id: 1,
          title: "Pariatur voluptate duis commodo sit eiusmod reprehenderit ex aute irure laboris eu sit veniam.",
          active: false
        },
        {
          id: 2,
          title: "Anim duis quis esse aliquip amet.",
          active: false
        },
        {
          id: 3,
          title: "Ullamco veniam consectetur cupidatat consectetur aliqua est ipsum quis eu.",
          active: false
        },
        {
          id: 4,
          title: "Consectetur consectetur mollit ea amet ullamco irure amet aliquip.",
          active: false
        },
        {
          id: 5,
          title: "Magna ut labore eiusmod ex nostrud magna consequat elit ex tempor cupidatat.",
          active: false
        },
        {
          id: 6,
          title: "Elit veniam occaecat sunt qui quis duis mollit magna adipisicing nulla nulla.",
          active: false
        },
        {
          id: 7,
          title: "Exercitation ea id est ut voluptate velit officia.",
          active: false
        },
        {
          id: 8,
          title: "Ea veniam id occaecat mollit fugiat eiusmod.",
          active: false
        },
        {
          id: 9,
          title: "Nulla eu in laboris dolore magna.",
          active: false
        },
        {
          id: 10,
          title: "Aliquip minim ut qui proident officia eu officia.",
          active: false
        },
        {
          id: 11,
          title: "Laboris sunt duis velit velit ullamco aliquip officia aliqua dolore aliquip ad exercitation.",
          active: false
        },
        {
          id: 12,
          title: "Mollit officia ad commodo pariatur aliquip consectetur anim cillum incididunt aliquip aliquip.",
          active: false
        },
      ]
    }
  },
  methods: {
    switchMode() {
      this.lightMode = !this.lightMode
    },
    filterTodos(id) {
      const newTodoLsit = this.dataList.filter(list => list.id !== id)
      this.dataList = newTodoLsit
    },

  },



}
</script>
