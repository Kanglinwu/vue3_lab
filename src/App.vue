<template>
  <TheNavigation />
  <router-view :key="$route.path" />
</template>

<script>
  import TheNavigation from './components/TheNavigation.vue'

  export default {
    components: {TheNavigation},
  }
</script>
