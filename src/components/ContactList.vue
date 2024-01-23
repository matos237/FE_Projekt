<template>
    <div class="admin-page">
        <h2>Current contact requests</h2>
        <div class="motorcycle-info" v-for="contact in this.store.contacts">
            <h2></h2>
            <p>Name: {{ contact.name }}</p>
            <p>Email: {{ contact.email }}</p>
            <p>Message: {{ contact.message }} </p>
        </div>
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