<template>
    <button class="btn btn-outline">Default</button>
    <button class="btn btn-outline btn-primary">Primary</button>
    <button class="btn btn-outline btn-secondary">Secondary</button>
    <button class="btn btn-outline btn-accent">Accent</button>
    <button class="btn btn-outline btn-info">Info</button>
    <button class="btn btn-outline btn-success">Success</button>
    <button class="btn btn-outline btn-warning">Warning</button>
    <button class="btn btn-outline btn-error">Error</button>
    <div>
        <table> 
          <caption>
            Exercice Text Interpolation
          </caption>  
          <thead>
            <tr>
                <th scope="vol">Variable</th>
                <th scope="vol">Valeur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <th scope="row">isOnline</th>
                <td>{{ isOnline }}</td>
            </tr>
            <tr>
                <th scope="row">unNombre</th>
                <td>{{ unNombre }}</td>
            </tr>
            <tr>
                <th scope="row">UnTableau</th>
                <td>{{ unTableau }}</td>
            </tr>
            <tr>
                <th scope="row">unObjet</th>
                <td>{{ unObjet }}</td>
            </tr>
            <tr>
                <th scope="row">unObjet.name</th>
                <td>{{ unObjet.name }}</td>
            </tr>
            <tr>
                <th scope="row">unObjet['name']</th>
                <td>{{ unObjet['name'] }}</td>
            </tr>
            <tr>
                <th scope="row">unObjet.tel</th>
                <td>{{ unObjet.tel }}</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';
const unLivre = 'Les mémoire de steve Seagal';
const isOnline = true;
const unNombre = 8888;
const unTableau = ['un éléemnt', 99];
const unObjet = {"name":"boby", "tel":"06040302043"};

</script>

<style scoped lang="css">
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}

thead,
tfoot {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td:last-of-type {
  text-align: center;
}

tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}
</style>