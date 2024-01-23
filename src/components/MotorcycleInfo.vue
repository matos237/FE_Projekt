<template>
    <div class="motorcycle-info" v-for="motorcycle in this.store.motorcycles" :key="motorcycle.id" @click="this.$router.push(`/view/${motorcycle.id}`)">
      <h2>{{ motorcycle.brand }} {{ motorcycle.model }}</h2>
      <p>Year: {{ motorcycle.year }}</p>
      <p>Engine: {{ motorcycle.engine }}</p>
      <p>Top Speed: {{ motorcycle.topSpeed }} kph</p>
      <p>Price: {{ motorcycle.price }} €</p>
    </div>
  </template>
  
  <script>
import { useStore } from '../stores/store';

  export default {
    data() {
      return {
        store : useStore()
      };
    },
  };
  </script>
  