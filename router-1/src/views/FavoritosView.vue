<script setup>
import {RouterLink} from 'vue-router'
import {storeToRefs} from 'pinia'
import {useFavoritoStore} from '@/store/favoritos.js'

const useFavorito = useFavoritoStore();

const {favoritos} = storeToRefs(useFavorito);

const {remove} = useFavorito;

console.log(favoritos.value.length)
console.log(favoritos.value.length === 0)
</script>
<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0" >Sin favoritos...</p>
    <ul class="list-group" v-else>
        <li class="list-group-item"
        v-for="gp in favoritos"
        :key="gp.round">
        <div> {{gp.raceName}} </div>
        <div>
            <router-link class="btn btn-sm btn-success me-2" :to="`/Calendar/${gp.round}`" >Mas informacion</router-link>
            <button class="btn btn-sm btn-danger" @click="remove(gp.round)" >Eliminar</button>
        </div>
        </li>
    </ul>
</template>