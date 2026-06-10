<template>
    <div class="card w-96 bg-base-100 card-xl shadow-sm">
    <div class="card-body">
        <h2 class="card-title">Les pokémon</h2>

        <div v-for="pokemon in pokeList" :key="pokemon.name" class="badge badge-success">
            {{ pokemon.name }}
        </div>
    </div>
    </div>

    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend v-if="meteo" class="fieldset-legend">Meteo de {{ meteo.city_info.name }}</legend>

        <div v-if="meteo" class="badge badge-xl"> Température maximale : {{ meteo.fcst_day_0.tmax }}</div>
        <div v-if="meteo" class="badge badge-xl">Température minimal : {{ meteo.fcst_day_0.tmin }}</div>
        <div v-if="meteo" class="badge badge-xl">Température actuel : {{ meteo.current_condition.tmp }}</div>
        <div v-if="meteo" class="badge badge-xl">Condition météo : {{ meteo.current_condition.condition }}</div>
    </fieldset>
</template>

<script setup lang='js'>
import {ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const pokeList = ref([]);
const meteo = ref(null) 

    async function getData() {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            pokeList.value = result.results 
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    }
    
    async function getMeteo() {
        const url = "https://prevision-meteo.ch/services/json/toulouse";
        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            meteo.value = result
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    }

    


onMounted(() => {
    getData();
    getMeteo();
});

onUpdated(() => {
});

onBeforeUnmount(() => {
    stopWatch();
});

</script>

<style scoped lang="css">
</style>