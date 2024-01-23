<template>
    <div class="contact-form">
      <h2>Contact Us</h2>
      <form @submit.prevent="addContact">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="contact.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="contact.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="contact.message" required></textarea>
        </div>
        <button type="submit" @click="this.store.addContact(this.contact)">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useStore } from '../stores/store';

  export default {
    data() {
      return {
        store : useStore(),

        contact: {
          name: '',
          email: '',
          message: '',
          status: true
        },
      };
    },
  };
  </script>