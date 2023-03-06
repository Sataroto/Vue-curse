<script setup>

import {ref} from 'vue';
import {RouterLink} from 'vue-router';
import {useGetData} from '@/composables/getData';

const GrandesPremios = ref([]);

const {data, getData, loading,error} = useGetData()
/*const getData = async () => {
    try {
        const {data} = await axios.get('https://ergast.com/api/f1/2023.json')
        GrandesPremios.value=data.MRData.RaceTable.Races;
        console.log(GrandesPremios.value[0])
    } catch (error) {
        console.log(error)
    }
}
*/
getData('https://ergast.com/api/f1/2023.json');

</script>
<template>
    <div>
<h1>Lista de Carreras</h1>
<p v-if="loading">Cargando Informacion...</p>
<div class="alert alert-danger" v-if="error" > {{ error }}</div>
<div v-if="data">
    <ul class="list-group">
        <li class="list-group-item" v-for="GranPremio in data.MRData.RaceTable.Races"
        :key = GranPremio.round> <router-link :to="`/Calendar/${GranPremio.round}`" >{{ GranPremio.raceName }}</router-link>
        </li>
    </ul>
</div>

</div>
</template>