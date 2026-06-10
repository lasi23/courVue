<template>
    <input type="text" v-model="film" class="input input-accent" />
    <button @click="sendFilm()" class="btn btn-neutral">Ajouter à votre  liste</button>
    <li @click="deleteFilm(index)" v-for="(item, index) in mesFilms" class="text-xl font-bold mb-2">{{ item }}</li>
    
</template>
<script setup lang='js'>
import { ref} from 'vue'

const mesFilms = ref([]);
const film = ref("Mon super film");



function sendFilm(){
    mesFilms.value.push(film.value)
}

function deleteFilm(i){
    mesFilms.value.splice(i)
}


</script>

<style scoped lang="css">
</style>