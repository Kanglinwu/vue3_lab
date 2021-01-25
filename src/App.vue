<template>
  <div id="app">
    <div class="container underline bg-gray-100 mx-auto flex justify-center gap-5">
      <router-link class="hover:text-red-300" to="/">Home</router-link>
      <router-link class="hover:text-red-300" to="/brazil">Brazil</router-link>
      <router-link class="hover:text-red-300" to="/hawaii">Hawaii</router-link>
      <router-link class="hover:text-red-300" to="/jamica">Jamica</router-link>
      <router-link class="hover:text-red-300" to="/panama">Panama</router-link>
    </div>
  </div>
  <router-view />
</template>
