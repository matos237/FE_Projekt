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

<style scoped> 
  main { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 10px; 
    margin-left: 130px;
  } 
</style>