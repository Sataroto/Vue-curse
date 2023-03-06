<script setup>
import { ref, computed } from 'vue';
const contador = ref(0);
const arregloNumeros = ref([]);
let guardado = ref(false);
let decision = 0;
//funciones botones
  const repetido = () =>{
    if(arregloNumeros.value.length>0){
      for(let i = 0; i < arregloNumeros.value.length ; i++ ){
        if(contador.value === arregloNumeros.value[i]){
          guardado.value = true;
          decision = 1;
          break;
        }
      }
      if(decision === 0){
        guardado.value = false;
      }
      decision= 0;
    }
  };

  const add = ()=>{
    arregloNumeros.value.push(contador.value);
    guardado.value = true;
  };

  const incrementar = () =>{
    contador.value ++;
    repetido();
  };

  const disminuir = () =>{
    contador.value --;
    repetido();
  };

  const resetear = () =>{
    contador.value = 0;
    repetido();
  }

  const clasecontador = computed(()=>{
    if(contador.value === 0){
      return "zero";
    }
    if(contador.value < 0){
      return "negativo";
    }
    if(contador.value > 0){
      return "positivo";
    }
  });

</script>

<template>
  <h2  :class="clasecontador">{{ contador }}</h2>
  <p>
  <button
  @click="incrementar">
    Aumentar
  </button>
  <button
  @click="resetear">
    Resetear
  </button>
  <button
  @click="disminuir">
    Disminuir
  </button>
  <button
  @click="add"
  :disabled="guardado">
    Guardar
  </button>
</p>
<p>
  <ul>
    <li
      v-for="(num,index) in arregloNumeros"
      :key="index"
    >
    {{ num }}
    </li>
  </ul>
</p>
</template>

<style>
  h1{
    color: red;
  }
  .positivo{
    color: green;
  }
  .negativo{
    color: red;
  }
  .zero{
    color: blue;
  }
</style>