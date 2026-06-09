<template>
    

    <div class="card w-96 bg-base-100 card-md shadow-sm">
    <div class="card-body">
        <div class="contener-count">
        <button class="btn btn-error" @click="moin()">-</button>
        <p>Le nombre est : {{ count }}</p>
        <button class="btn btn-error" @click="plus">+</button>
    </div>
    </div>
    </div>


</template>

<script setup lang='js'>
import { ref } from 'vue';
const count = ref(0);
const moin = () => {
    console.log("ok")
    count.value = count.value - 1;
}
const plus = () => {
    console.log("ok")
    count.value = count.value + 1;
}
</script>

<style scoped lang="css">
</style>