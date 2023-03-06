<script setup>
import { ref, onMounted } from 'vue';

import BlogPost from './components/BlogPost.vue'; 
import PaginatePost from './components/PaginatePost.vue'
import LoadingComponent from './components/LoadingComponent.vue'

const posts = ref([]);

const favorito = ref('');
const postXpage = 10;
const inicio = ref(0);
const fin = ref(postXpage);
const loading = ref(true);

const cambiarFavorito = (title) => {
  favorito.value = title;
 };

 /*fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((data) => posts.value = data)
  .finally(() => { loading = false});*/
const siguiente = () => { 
  inicio.value += postXpage;
  fin.value += postXpage;
};

const previo = () => { 
  inicio.value -= postXpage;
  fin.value -= postXpage;
};

onMounted(async() => { 
  loading.value = true;
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value= await res.json()
  } catch (error) {
    console.log(error)
  } finally{
    loading.value = false;
  }
});

</script>
<template>
  <LoadingComponent v-if="loading"/>
  <div class="container" v-else>
    <h1>HOLA</h1>
    <PaginatePost @siguiente="siguiente" @previo="previo" :inicio="inicio" :fin = "fin" class="mb-2" /> 
    <h2>Mis Posts Favorito : {{ favorito }}</h2>
    <BlogPost
    v-for="post in posts.slice(inicio,fin)"
    :key="post.id"
    :title="post.title"
    :id = "post.id"
    :body ="post.body"
    @cambiarFavoritoNombre="cambiarFavorito"
    class="mb-2"
  >

  </BlogPost>
  </div>
</template>