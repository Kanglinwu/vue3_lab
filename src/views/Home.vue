<template>
  <div class="container mx-auto py-4 justify-center grid grid-cols-4 gap-4">
    <p class="text-2xl flex justify-center col-span-4">All Locations</p>
    <div
      class="col-1 transform hover:scale-105 motion-reduce:transform-none"
      v-for="item in destinations"
      :key="item.name"
    >
      <router-link
        class="flex justify-center"
        :to="{name: 'DestintaionDetails', params: {id: item.id, desc: item.description}}"
        >{{ item.name }}</router-link
      >
      <figure>
        <router-link :to="{name: 'DestintaionDetails', params: {id: item.id, desc: item.description}}">
          <img :src="require(`../assets/${item.image}`)" :alt="item.name" />
        </router-link>
      </figure>
    </div>
  </div>
</template>

<script>
  import {ref} from 'vue'
  import store from '../store.js'

  export default {
    setup() {
      const destinations = ref(store.destinations)
      return {
        destinations,
      }
    },
  }
</script>
