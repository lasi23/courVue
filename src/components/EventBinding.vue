<template>
    <div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Teste moi</h1>
      
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">
        <fieldset class="fieldset">

          <label class="label">Input1</label>
          <input v-on:input="capterInput($event)" type="texte" class="input"/>
          <p>{{ uneString }}</p>

          <label class="label">input2</label>
          <input v-on:keyup.space="capterSpace($event)" type="texte" class="input"  />
          <p>{{ uneString2 }}</p>

          <button v-on:click="alertg" class="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

const uneString = ref('Hello');

function capterInput(event) {
    uneString.value = event.target.value;
}

const uneString2 = ref('Press space');

function capterSpace(e){      
    uneString2.value = event.target.value;    
}

function alertg(){
    alert("alert générale")
}


</script>

<style scoped lang="css">
</style>