<template>
    <div class="admin-page" v-if="store.showOption == 'current'">
        <h2>Current contact requests</h2>
        <button @click="store.changeDisplay()">Change requests</button>
        <div v-for="contact in this.store.contacts">
            <div class="contacts-info" v-if="contact.status == true">
                <p>Name: {{ contact.name }}</p>
                <p>Email: {{ contact.email }}</p>
                <p>Message: {{ contact.message }} </p>
                <button @click="this.store.changeState(contact.id)">Mark as solved</button>
            </div>
        </div>
    </div>
    <div class="admin-page" v-else>
        <h2>Solved contact requests</h2>
        <button @click="store.changeDisplay()">Change requests</button>
        <div v-for="contact in this.store.contacts">
            <div class="contacts-info" v-if="contact.status == false">
                <p>Name: {{ contact.name }}</p>
                <p>Email: {{ contact.email }}</p>
                <p>Message: {{ contact.message }} </p>
                <h3>This request was solved</h3>
            </div>
        </div>
    </div>    
  </template>
  
  <script>
import { useStore } from '../stores/store';

  export default {
    data() {
      return {
        store: useStore()
      };
    },
  };
  </script>

  <style scoped>
    h3{
        font-weight: bolder;
        color: green;
    }

  </style>