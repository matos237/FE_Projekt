<template>
    <div class="motorcycle-window" v-for="motorcycle in this.store.motorcycles">
      <div class="motorcycle-view" v-if="motorcycle.id == this.$route.params.id">
        <h2 class="name">{{ motorcycle.brand }} {{ motorcycle.model }}</h2>
        <div class="info">
        <div class="data">
          <p>Year: {{ motorcycle.year }}</p>
          <p>Engine: {{ motorcycle.engine }}</p>
          <p>Top Speed: {{ motorcycle.topSpeed }} kph</p>
          <p>Price: {{ motorcycle.price }} €</p>
          <p>Description: {{ motorcycle.description }}</p>
        </div>
        <img class="bikeImage" :src="motorcycle.image" alt="Nastala chyba.">
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

    .bikeImage{
      margin-left: 20%;
      width: 550px;
      height: 550px;
    }
    .info{
      display: flex;
    }
    .data{
      display: flex;
      flex-direction: column;
      margin-top: 0px;
      width: 40%;
    }
    .motorcycle-view {
      margin-top: 30px;
      height: 700px;
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