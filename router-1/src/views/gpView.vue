<script setup>

import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData';
import {useCounterStore} from '@/store/counter.js'
import {useFavoritoStore} from '@/store/favoritos.js'

const route = useRoute();
const router = useRouter();
const useCounter = useCounterStore()
const useFavorito = useFavoritoStore();
const back = () => {
    router.push('/calendar');
}

const { data, getData, loading, error } = useGetData();

const {add,findGp} = useFavorito;

/*const getData = async () =>{
    try {
        const {data} = await axios.get(`https://ergast.com/api/f1/2023/${route.params.round}.json`);
        gp.value = data.MRData.RaceTable.Races[0];
        console.log(gp.value)

    } catch (error) {
        console.log(error)
        gp.value=null;
    }
};*/
getData(`https://ergast.com/api/f1/2023/${route.params.round}.json`);
</script>
<template>
    <h1>Home counter: {{useCounter.count }} </h1>
  <h2>Double: {{ useCounter.double }}</h2>
  <button @click="useCounter.increment">Increment</button>
    <p v-if="loading">Cargando Informacion...</p>
    <div class="alert alert-danger" v-else-if="error" > 404 : No existe la carrera</div>
    <div v-else-if="data">
        <table class="default">
            <tr>
                <th scope="row">Temporada:</th>
                <td>{{ data.MRData.RaceTable.Races[0].season }}</td>
            </tr>
            <tr>
                <th>Round:</th>
                <td>{{ data.MRData.RaceTable.Races[0].round }}</td>
            </tr>
            <tr>
                <th>Nombre Gran Premio:</th>
                <td>{{ data.MRData.RaceTable.Races[0].raceName }}</td>
            </tr>
            <tr>
                <th>Nombre del Circuito:</th>
                <td>{{ data.MRData.RaceTable.Races[0].Circuit.circuitName }}</td>
            </tr>
            <tr>
                <th>Nombre de la ciudad:</th>
                <td>{{ data.MRData.RaceTable.Races[0].Circuit.Location.locality }}</td>
            </tr>
            <tr>
                <th>Nombre del pais:</th>
                <td>{{ data.MRData.RaceTable.Races[0].Circuit.Location.country }}</td>
            </tr>
            <tr>
                <th>Fecha:</th>
                <td>{{ data.MRData.RaceTable.Races[0].date }}</td>
            </tr>
        </table>
        <button :disabled="findGp(data.MRData.RaceTable.Races[0].round)" @click="add(data.MRData.RaceTable.Races[0])" class="btn btn-outline-success mb-2">Agregar Favoritos</button>
    </div>
    <button @click="back" class="btn btn-outline-primary">Regresar</button>
</template>