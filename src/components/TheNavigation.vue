<template>
  <div id="app">
    <div class="container bg-gray-100 mx-auto grid grid-cols-4 ">
      <p class="col-span-1 py-3 px-2 text-lg font-mono font-extrabold flex justify-center">
        The Vue3 School Travel App
      </p>
      <div class="flex flex-row col-span-3 gap-3 pt-2">
        <router-link class="hover:text-red-300" to="/">Home</router-link>
        <p v-for="item in destination" :key="item.name">
          <router-link :to="{name: 'DestintaionDetails', params: {id: item.id}}">{{
            item.name
          }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  // get json file data
  import store from '../store.js'
  import {ref} from 'vue'

  export default {
    setup() {
      const name = 'TheNavigation'
      const destination = ref(store.destinations)
      return {
        name,
        destination,
      }
    },
  }
</script>

<style scoped>
  a.vue_router_active {
    color: purple;
    @apply underline;
  }
</style>
