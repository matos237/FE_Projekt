<template>
    <main>
      <MotorcycleInfo />
    </main>
  </template>
  
  <script>
  import MotorcycleInfo from '../components/MotorcycleInfo.vue';
  
    export default{
        components: {
            MotorcycleInfo
        }
    }
  </script>
  
  <style> 
  main { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 10px; 
    justify-content: center; 
    } 
    
    .motorcycle-info { 
      background-color: #f8f8f8; 
      padding: 20px; 
      border: 1px solid #ddd; 
      border-radius: 5px; 
      flex: 1 0 calc(25% - 10px); 
      /* Adjust the percentage as needed for more or fewer columns */ 
      margin-bottom: 10px; 
      } 
      </style>