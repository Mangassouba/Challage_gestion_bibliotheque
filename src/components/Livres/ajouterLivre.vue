<template>
    <div class="container">
      <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
        <div class="col-sm-3">
          <label for="reference">Titre</label>
          <input
            type="text"
            class="form-control"
            id="reference"
            v-model="titre"
          />
        </div>
        <div class="col-sm-3">
          <label for="designation">Auteur</label>
          <input
            type="text"
            class="form-control"
            id="designation"
            v-model="auteur"
          />
        </div>
        <!-- <div class="col-sm-2">
          <label for="quantite">Quantité</label>
          <input
            type="number"
            class="form-control"
            id="quantite"
            v-model.number="quantite"
          />
        </div>
        <div class="col-sm-2">
          <label for="prix">Prix</label>
          <input
            type="number"
            class="form-control"
            id="prix"
            v-model.number="prix"
          />
        </div> -->
  
        <div class="col-auto">
          <button type="submit" class="btn btn-sm mt-4 btn-primary">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  </template>



<script setup>
import { ref, defineExpose  } from "vue";
const emit = defineEmits(["onAdd"]);

const titre = ref("");
const auteur = ref("");
// const quantite = ref(1);
// const prix = ref(0);
const onSubmit = () => {
  emit("onAdd", titre.value, auteur.value);

  titre.value = "";
  auteur.value = "";
//   quantite.value = "";
//   prix.value = "";
};
const edit = (livre) => {
    titre.value = livre.titre;
    auteur.value = livre.auteur;
//   quantite.value = product.quantite;
//   prix.value = product.prix;
};

defineExpose({
  edit,
});
</script>