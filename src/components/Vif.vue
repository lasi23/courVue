<template>
    <input type="text" v-model="film" class="input input-accent" />
    <button @click="sendFilm()" class="btn btn-neutral">Ajouter à votre  liste</button>
    <h3 v-if="mesFilms.length" class="text-xl font-bold mb-2">Votre Film : {{ mesFilms }}</h3>
    <p v-else class="text-lg text-base-content opacity-75">
        Pas encore de films dans votre liste ? Veuillez en ajouter un.
    </p>
</template>

<script setup lang='js'>
import { ref} from 'vue'

const mesFilms = ref([]);
const film = ref("Mon super film");



function sendFilm(){
    mesFilms.value.push(film.value)
}

</script>


<style scoped lang="css">
</style>