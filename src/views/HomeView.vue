<template>
  <div class="home">

    <p>{{ninjaTwo.name}}</p>
    <p ref="para">{{ninjaTwo.rank}}</p>
    <p>{{test1}} - {{test2}}</p>
    <div>
      <button @click="changeTest">Update test variables</button>
    </div>
    <input type="text"
      v-model="search">
    <button @click="handleClickTwo">Click me</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';



export default {
  name: 'HomeView',
  setup() {
    console.log("Setup runs")

    let ninjaOne = ref({ name: "naruto", rank: "genin" });
    let ninjaTwo = reactive({ name: "kakashi", rank: "jounin" });

    let test1 = ref("VueJS")
    let test2 = reactive("ReactJS")

    let search = ref("")

    let para = ref(null)

    console.log(para.value)

    const handleClickOne = () => {
      ninjaOne.value.name = "sasuke"
      ninjaOne.value.rank = "chunin"
      console.log(search.value)
      // if (para.value.classList.contains("testing")) {
      //   para.value.classList.remove("testing")
      // } else {
      //   para.value.classList.add("testing")
      // }

    }
    const handleClickTwo = () => {
      ninjaTwo.name = "Madara"
      ninjaTwo.rank = "hokage"
    }

    const changeTest = () => {
      test1.value = "NuxtJS"
      test2 = "NextJS"
    }


    return {
      ninjaOne, handleClickOne, para, search, ninjaTwo, handleClickTwo, test1, test2, changeTest
    }
  },
  // updated() {
  //   console.log(this.search)
  // },
  mounted() {
    console.log("Component mounted")
  }

}
</script>
