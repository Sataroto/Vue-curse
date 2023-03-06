<script setup>
defineProps(['inicio', 'fin'])

const emit = defineEmits(['siguiente','previo']);

</script>
<template>
<div class="btn-group" role="group" aria-label="Basic example">
    <button @click="emit('previo')" type="button" class="btn btn-primary-outline" :disabled="inicio === 0">Anterior</button>
    <button @click="emit('siguiente')" type="button" class="btn btn-primary-outline" :disabled="fin === 100">Siguiente</button>
    
</div>
</template>
<style>
</style>