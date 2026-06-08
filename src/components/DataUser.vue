<template>
    <div>
        <h1>Données utilisateur</h1>

        <div class="card card-side bg-base-100 shadow-sm">
            <figure>
                <img v-bind:src="image" :alt="value">
            </figure>
            <div class="card-body">
                <p>{{ name }}</p>
                <input type="text" :value="name" class="input input-accent">
                <p>{{ age }} ans</p>
                <p> age + 10 : {{ newAge() }} ans</p>
                <p>NB Fétiche : {{ fetich }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import {ref} from 'vue';
const image = "src/assets/2111288.jpg";
const name = "Dr Mario";
const age = 45;
const newAge = () => {
   return  age + 10
}
const fetich = Math.random();

</script>

<style scoped lang="css">
</style>