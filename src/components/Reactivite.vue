<template>
    

    <div class="card w-96 bg-base-100 card-lg shadow-sm">
    <div class="card-body">
        <h2>Trouve le numéro secret</h2>
        <button class="btn btn-secondary" @click="plusUn()">+1</button>
        <button class="btn btn-secondary" @click="plusCinq()">+5</button>
        <p>Le nombre : {{ result }}</p>
        <p :class="couleur">{{ affiche }}</p>
    </div>
    </div>


</template>

<script setup lang='js'>
import { computed, watch, ref} from 'vue'

const result = ref(0);
const affiche = ref("Joue!");
const couleur = ref("");

const plusUn = () => {
    result.value = result.value + 1;
}
const plusCinq = () => {
    result.value = result.value + 5;
}

watch(result, (newValue) => {
    if(newValue !== 7){
        affiche.value = "Essaie encore";
        couleur.value= 'badge badge-error';
    }
    if(newValue > 7){
        affiche.value = "Tu a dépassé le nombre mystère";
        couleur.value = 'badge badge-error';
    }
    if(newValue === 7){
        affiche.value = "Oui c'est le 7"
        couleur.value = "badge badge-success"
    }
    if(newValue > 30){
        setTimeout( () => {result.value = 0} , 3000)
    }
});





</script>

<style scoped lang="css">
</style>