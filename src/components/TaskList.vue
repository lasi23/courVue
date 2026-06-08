<template>
    <div>
        <h1>Utilisation des methodes</h1>
    </div>
    <button class="btn btn-outline btn-success" v-on:click="random()">Joue avec moi</button>
    <p :style="{ backgroundColor: couleur }">{{ affiche }}</p>
</template>
<script setup lang='js'>
import { ref } from 'vue'
const affiche = ref("");
const couleur = ref("")   
const random = () =>{
    const nbr = Math.random();

    if (nbr > 0.5) {
        affiche.value = "bien"
        couleur.value = "green";
    } else {
        affiche.value = "pas bien"
        couleur.value = "red";
    }
}

</script>

<style scoped lang="css">
</style>