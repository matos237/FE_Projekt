<template>
    <div class="motorcycle-window" v-for="motorcycle in this.store.motorcycles">
      <div class="motorcycle-view" v-if="motorcycle.id == this.$route.params.id">
        <h2 class="name">{{ motorcycle.brand }} {{ motorcycle.model }}</h2>
        <div class="data">
          <p>Year: {{ motorcycle.year }}</p>
          <p>Engine: {{ motorcycle.engine }}</p>
          <p>Top Speed: {{ motorcycle.topSpeed }} kph</p>
          <p>Price: {{ motorcycle.price }} €</p>
          <p>Description: {{ motorcycle.description }}</p>
        </div>
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

    .data{
      margin-top: 50px;
      width: 60%;
    }
    .motorcycle-view {
      margin-top: 100px;
      height: 600px;
      background-color: #f8f8f8; 
      padding: 20px; 
      border: 1px solid #ddd; 
      border-radius: 5px;  
      margin-bottom: 10px;
    } 

    .motorcycle-view h2{
      font-size: 36px;
    }

    .motorcycle-view p{
      font-size: 20px;
    }
    .motorcycle-window {
      margin-left: 5%;
      width: 90%;
    }
  </style>