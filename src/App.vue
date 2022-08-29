<template lang="html">
  <DefaultLayout>
    <div class="grid grid-cols-2 gap-10 max-w-[1200px] mx-auto my-10 items-center">
      <form class="bg-gray-100 rounded px-5 py-8 flex flex-col gap-5 border-[10px] border-gray-800"
        @submit.prevent="handleSubmit">
        <div>
          <h3 class="text-4xl text-center text-green-700 font-bold mb-4">Anime Registration Form</h3>
        </div>
        <div>
          <label for=""
            class="block mb-3">USERNAME:</label>
          <input type="text"
            class="text-lg py-2 px-4 w-full border rounded"
            v-model="username">
        </div>
        <div>
          <label for=""
            class="block mb-3">PASSWORD:</label>
          <input type="password"
            class="text-lg py-2 px-4 w-full border rounded"
            v-model="password">
        </div>

        <div>
          <label for=""
            class="block mb-3">FAVORITE ANIME:</label>
          <select name=""
            id=""
            class="w-full py-2 px-4 bg-white text-lg"
            v-model="favoriteAnime">
            <option value="one-piece">One Piece</option>
            <option value="naruto">Naruto</option>
            <option value="dragon-ball">Dragon Ball</option>
          </select>
        </div>

        <div>
          <label for=""
            class="block mb-3">FAVORITE POWER SYSTEMS:</label>
          <div class="flex flex-wrap gap-x-4 gap-y-8">
            <div><input type="checkbox"
                name="chakra"
                id="chakra"
                value="chakra"
                v-model="powerSystems"> <label for="chakra">Chakra</label></div>
            <div><input type="checkbox"
                name="devil-fruits"
                id="devil-fruits"
                value="devil-fruits"
                v-model="powerSystems"> <label for="devil-fruits">Devil Fruits</label></div>
            <div><input type="checkbox"
                name="haki"
                id="haki"
                value="haki"
                v-model="powerSystems"> <label for="haki">Haki</label></div>
            <div><input type="checkbox"
                name="nen"
                id="nen"
                value="nen"
                v-model="powerSystems"> <label for="nen">Nen</label></div>
          </div>

        </div>

        <div>
          <label for=""
            class="block mb-3">FAVORITE ANIME GENRES:</label>
          <textarea name=""
            id=""
            cols="2"
            class="w-full text-xl rounded border py-2 px-4"
            v-model="singleFavoriteGenre"
            @keyup="addToGenre"></textarea>
          <ul class="flex gap-5 flex-wrap mt-7">
            <li v-for="(item, index) in favoriteGenre"
              :key="index"
              class="py-1.5 px-4 bg-green-500 text-white rounded-full">{{  item  }}</li>
          </ul>
        </div>

        <div>
          <input type="checkbox"
            name="terms"
            id="terms"
            v-model="terms"> <label for="terms"
            class="cursor-pointer">Accept the terms and conditions</label>
        </div>

        <div>
          <button type="submit"
            class="w-full py-2 px-5 text-center rounded-full bg-green-500 hover:bg-green-700 transition ease-in-out duration-300 text-white">Register</button>
        </div>
      </form>
      <div>
        <div>
          <h3 class="text-4xl text-center text-green-700 font-bold mb-4">Form Results:</h3>
        </div>

        <div class="flex flex-col gap-5">
          <div v-if="username">
            <p>USERNAME:</p>
            <p>{{  username  }}</p>
          </div>
          <div v-if="password">
            <p>PASSWORD:</p>
            <p>{{  password  }}</p>
          </div>
          <div v-if="favoriteAnime">
            <p class="uppercase">Favourite Anime:</p>
            <p>{{  favoriteAnime  }}</p>
          </div>
          <div v-if="powerSystems.length">
            <p class="uppercase">Power Systems:</p>
            <ul>
              <li v-for="(item, index) in powerSystems"
                :key="index"
                class="list-disc list-inside">{{  item  }}</li>
            </ul>

          </div>
          <div v-if="favoriteGenre.length">
            <p class="uppercase">Genres:</p>
            <ul>
              <li v-for="(item, index) in favoriteGenre"
                :key="index"
                class="list-disc list-inside">{{  item  }}</li>
            </ul>

          </div>

          <div v-if="terms">
            <p class="uppercase">Terms:</p>
            <p>{{  terms  }}</p>
          </div>
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
      username: "",
      password: "",
      favoriteAnime: "",
      powerSystems: [],
      singleFavoriteGenre: "",
      favoriteGenre: [],
      terms: false
    }
  },
  methods: {
    addToGenre(e) {
      if (e.key === ",") {
        const singleGenre = this.singleFavoriteGenre.substring(0, this.singleFavoriteGenre.length - 1)
        if (!this.favoriteGenre.includes(singleGenre)) {
          this.favoriteGenre.push(singleGenre)

        }
        this.singleFavoriteGenre = ""

      }
    },
    handleSubmit() {
      // e.preventDefault()
      console.log({
        username: this.username,
        password: this.password,
        favoriteAnime: this.favoriteAnime,
        powerSystems: this.powerSystems,
        singleFavoriteGenre: this.singleFavoriteGenre,
        favoriteGenre: this.favoriteGenre,
        terms: this.terms
      })
    }
  },


}
</script>