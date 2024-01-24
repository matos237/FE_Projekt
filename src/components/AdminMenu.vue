<template>
    <div class="admin-page">
      <h2>Admin Page - Add Motorcycle</h2>
      <form @submit.prevent="addMotorcycle">
        <div class="form-group">
          <label for="brand">Brand:</label>
          <input type="text" id="brand" v-model="motorcycle.brand" required />
        </div>
        <div class="form-group">
          <label for="model">Model:</label>
          <input type="text" id="model" v-model="motorcycle.model" required />
        </div>
        <div class="form-group">
          <label for="year">Year:</label>
          <input type="number" id="year" v-model="motorcycle.year" required />
        </div>
        <div class="form-group">
          <label for="engine">Engine:</label>
          <input type="text" id="engine" v-model="motorcycle.engine" required />
        </div>
        <div class="form-group">
          <label for="topSpeed">Top Speed:</label>
          <input type="number" id="topSpeed" v-model="motorcycle.topSpeed" required />
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" id="price" v-model="motorcycle.price" required />
        </div>
        <div class="form-group">
          <label for="image">Image link:</label>
          <input type="text" id="image" v-model="motorcycle.image" required />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="motorcycle.description" required></textarea>
        </div>
        <button type="submit" @click="this.store.addMotorcycle(this.motorcycle)">Add Motorcycle</button>
      </form>
    </div>
  </template>
  
  <script>
import { useStore } from '../stores/store';

  export default {
    data() {
      return {
        store : useStore(),

        motorcycle: {
          brand: '',
          model: '',
          year: null,
          engine: '',
          topSpeed: null,
          price: null,
          image: '',
          description: '',
        },
      };
    },
  };
  </script>
  
  