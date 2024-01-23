<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/">Home</router-link>
      </div>
      <div class="navbar-text">
        <h3>Motorcycle Informations</h3>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/admin">Admin</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <style>
  .navbar-text{
    margin-left: 10%;
  }
  .navbar {
    background-color: #3498db;
    padding: 1rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
  }
  
  .navbar a {
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;
    margin-left: 1rem;
  }
  
  .navbar a:hover {
    text-decoration: underline;
  }
  </style>