<template>
    <div class="motorcycle-info" v-for="motorcycle in this.store.motorcycles" @click="this.$router.push(`/view/${motorcycle.id}`)">
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
  
  <style> 
  .motorcycle-info { 
    background-color: #f8f8f8; 
    padding: 20px; 
    border: 1px solid #ddd; 
    border-radius: 5px; 
    margin: 10px; 
    display: flex; 
    flex-direction: column; 
    gap: 10px; 
  } 
    
  .motorcycle-info h2 { 
      font-size: 24px; 
      margin-top: 0; 
      } 
      
  .motorcycle-info p { 
    font-size: 16px; 
  } 
    </style>
  