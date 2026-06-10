<template>
    <div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">Navigation</a>
  </div>
  <input @click="changeTheme()" type="checkbox" checked="checked" class="toggle" />
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><RouterLink to="/">Acceuil</RouterLink></li>
      <li>
        <details>
          <summary>Sommaire</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><RouterLink to="/">Acceuil</RouterLink></li>
            <li><RouterLink to="/about">A propos</RouterLink></li>
            <li><RouterLink to="contact">Contact</RouterLink></li>
            <li><RouterLink to="TaskList">TaskList</RouterLink></li>
            <li><RouterLink to="DataUser">DataUser</RouterLink></li>
            <li><RouterLink to="Count">Count</RouterLink></li>
            <li><RouterLink to="EventBinding">EventBinding</RouterLink></li>
            <li><RouterLink to="Reactivite">Reactivite</RouterLink></li>
            <li><RouterLink to="StyleDynamique">StyleDynamique</RouterLink></li>
            <li><RouterLink to="Vif">Vif</RouterLink></li>
            <li><RouterLink to="Vfor">Vfor</RouterLink></li>
            <li><RouterLink to="LifeCycle">LifeCycle</RouterLink></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
</template>

<script setup lang='js'>
import { ref } from 'vue';
const theme = ref(false);

function changeTheme(){
  theme.value = !theme.value;
}

</script>

<style scoped lang="css">
  .theme{
  background-color: black;
}

</style>