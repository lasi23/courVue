<template>
    

    <div class="card w-96 bg-base-100 card-md shadow-sm">
        <div class="card-body">
            <div class="contener-count">
                <button class="btn btn-error" @click="moin()">-</button>
                <p class="badge badge-soft badge-error">Le nombre est : {{ count }}</p>
                <button class="btn btn-error" @click="plus">+</button>
            </div>
            <p>{{ bugs }}</p>
        </div>
    </div>


</template>

<script setup lang='js'>
import { ref, computed } from 'vue';
const count = ref(0);
const moin = () => {
    count.value = count.value - 1;
}
const plus = () => {
    count.value = count.value + 1;
}

const userName = ref("");
const state = ref("");


const bugs = computed(() =>{
    console.log("appel bug ok")

    if(userName.value = ""){
        return state.value ="online"
    }else{
        return state.value = "offline"
    }

})

</script>

<style scoped lang="css">
</style>