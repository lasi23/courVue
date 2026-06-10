<template>
    <div @click="selectionCard(1)" class="card w-96 card-xs shadow-sm" :style="{backgroundColor: selectCard1===true ? 'red':'aqua' }">
    <div  class="card-body">
        <h2 class="card-title">Xsmall Card</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        
    </div>
    </div>

<br>
<br>
<br>

    <div @click="selectionCard(2)" class="card w-96 bg-base-100 card-xs shadow-sm" :style="{backgroundColor: selectCard2 ? 'green':'violet' }">
    <div class="card-body">
        <h2 class="card-title">Xsmall Card</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        
    </div>
    </div>
    
<br>
<br>
<br>

    <div @click="selectionCard(3)" v-bind:class="{ class1: selectCard3 }" class="card w-96 bg-base-100 card-xs shadow-sm">
    <div class="card-body">
        <h2 class="card-title">Xsmall Card</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        
    </div>
    </div>
    
<br>
<br>
<br>

    <div @click="selectionCard(4)" :class="{class2: selectCard4}" class="card w-96 bg-base-100 card-xs shadow-sm">
    <div class="card-body">
        <h2 class="card-title">Xsmall Card</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        
    </div>
    </div>
<br>
<br>
<br>
    <input type="text" v-on:input="capterInput($event)" :value="titre" class="input" /><br>
    <div :class="[{maClasseHello: selectInput1}, {maClasseWord: selectInput2}]" :style="{visibility: visible}">HELLO WORD {class dynamique}</div><br>
    <input type="text" v-on:input="capterInput2($event)"  :value="titre2" class="input" /><br>
    <div class="badge badge-primary" :style="{backgroundColor: titre2}"></div><br>
    <button @click="selectTitre()" class="btn">Afficher premier input</button>
    
</template>

<script setup lang='js'>
import { ref, watch } from 'vue'

const selectCard1 = ref(false);
const selectCard2 = ref(false);
const selectCard3 = ref(false);
const selectCard4 = ref(false);

function selectionCard(uneCard){
    if(uneCard == 1) selectCard1.value = !selectCard1.value  
    if(uneCard == 2) selectCard2.value = !selectCard2.value 
    if(uneCard == 3) selectCard3.value = !selectCard3.value 
    if(uneCard == 4) selectCard4.value = !selectCard4.value 
}

const titre = ref("Taper hello ou word ici")
const titre2 = ref("Taper une couleur ici")
const selectInput1 = ref(false);
const selectInput2 = ref(false);
const visible = ref("hidden")

function capterInput(e) {
    titre.value = e.target.value
    if(titre.value == "hello"){selectInput1.value = !selectInput1.value}
    else if(titre.value == "word"){selectInput2.value = !selectInput2.value}
    else{selectInput1.value = false; selectInput2.value = false}
    

}
function capterInput2(e){
    titre2.value = e.target.value;
    console.log(titre2.value)
}

function selectTitre(){
    visible.value = "visible";
}

</script>

<style scoped lang="css">
.class1 {
  background-color: mediumslateblue;
  font-style: italic;
}

.class2 {
  background-color: chartreuse;
  font-size: large;
}

.maClasseHello {
    background-color: blue;
}

.maClasseWord {
    background-color: rgb(0, 157, 255);
}

.hidden { visibility: hidden; }


</style>