<template>
    <div class="motorcycle-window" v-for="motorcycle in this.store.motorcycles">
      <div class="motorcycle-view" v-if="motorcycle.id == this.$route.params.id">
      <h2 class="name">{{ motorcycle.brand }} {{ motorcycle.model }}</h2>
      <p>Year: {{ motorcycle.year }}</p>
      <p>Engine: {{ motorcycle.engine }}</p>
      <p>Top Speed: {{ motorcycle.topSpeed }} kph</p>
      <p>Price: {{ motorcycle.price }} €</p>
    </div>
    </div>
  </template>
  
  <script>
import { useStore } from '../stores/store';

  export default {
    data() {
      return {
        store : useStore(),
        
      };
    },
  };
  </script>
  
  <style scoped> 

    .name{
      

    }
    .motorcycle-view {
      margin-top: 100px;
      height: 500px;
      background-color: #f8f8f8; 
      padding: 20px; 
      border: 1px solid #ddd; 
      border-radius: 5px;  
      margin-bottom: 10px;
      display: flex;
      flex-direction: column; 
    } 
  </style>