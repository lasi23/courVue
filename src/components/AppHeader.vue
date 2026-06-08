<template>
    <div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">Navigation</a>
  </div>
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
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
</template>

<script setup lang='js'>


</script>

<style scoped lang="css">
</style>