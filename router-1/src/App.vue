<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav class="navbar" style="background-color: #e3f2fd;">
    <div class="container">
      <router-link class="navbar-brand" to="/" >
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        F1 API
      </router-link>
      <div>
        <router-link class="btn btn-outline-primary me-2" to="/">Home</router-link>
        <RouterLink class="btn btn-outline-primary" to="/calendar">Carreras</RouterLink>
      </div>
    </div>

  </nav >
  <div class="container">
    <RouterView />
  </div>
  
</template>
