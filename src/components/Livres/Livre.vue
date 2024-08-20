<template>
    <h1 class="text-center">Liste de livre</h1>
    <AjouterLivre class="border-bottom pb-4" @on-add="add" ref="formComponent"/>
    <ListeLivre :livres="livres" class="mt-4" @on-remove="remove"  @on-edit="edit"/>
    <!-- <ModifierLivre /> -->
</template>


<script setup>
import { ref } from 'vue';
import AjouterLivre from './ajouterLivre.vue';
import ListeLivre from './ListeLivre.vue';
// import ModifierLivre from './modifierLivre.vue';




const livres = ref([
  { titre: 'Les Soleils des Indépendances', auteur: 'Ahmadou Kourouma'},
  { titre: 'L\'Aventure ambiguë', auteur: ' Cheikh Hamidou Kane'},
  { titre: 'Chinua Achebe', auteur: 'Things Fall Apart'},
  { titre: 'Les Bouts de bois de Dieu', auteur: 'Ousmane Sembène'},
  { titre: 'Americanah', auteur: 'Ngozi Adichie'}
]);
const formComponent = ref();

const add = (titre, auteur) => {
  livres.value.push({
    titre,
    auteur
  });
  console.log("reception evenement");
  
} 

const remove = (index) => {
  livres.value.splice(index, 1);
}

const edit = (index) => {
  const livre = livres.value[index];
  formComponent.value.edit(livre);
}
</script>