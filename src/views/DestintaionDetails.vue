<template>
  <div class="container mx-auto grid grid-cols-4 gap-3">
    <p class="text-2xl font-bold col-span-4 flex justify-center mt-8 mb-6">{{ data.cur_target.name }}</p>
    <figure class="col-span-1 mr-6">
      <img :src="require(`../assets/${data.cur_target.image}`)" :alt="data.cur_target.name">
    </figure>
    <p class="text-base col-span-3">{{ data.cur_target.description }}</p>
  </div>
</template>

<script>
  // use useRoute to get the parent routing params
  import {useRoute} from 'vue-router'
  import {computed, reactive} from 'vue'
  import store from '../store.js'

  export default {
    setup() {
      const route = useRoute()
      // use the reactive to use the id in the same layer
      const data = reactive({
        id: Number(route.params.id),
        cur_target: computed(() => {
          return store.destinations.find(cur_target => cur_target.id === data.id)
        }),
      })
      return {
        data,
      }
    },
  }
</script>
