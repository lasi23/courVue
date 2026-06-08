<template>
  <div>
    <h1>WELCOME TO THE APP</h1>
    <p>Hello {{ userName }}</p>
    <p>Years old {{ ageUser }}</p>
    

  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';
const userName = ref('John Doe');
const ageUser = 77;

</script>
