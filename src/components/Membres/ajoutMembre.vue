<template>
  <div class="container">
    <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
      <div class="col-sm-2">
        <label for="nom">Nom</label>
        <input type="text" class="form-control" id="nom" v-model="form.nom" />
      </div>
      <div class="col-sm-2">
        <label for="adresse">Adresse</label>
        <input
          type="text"
          class="form-control"
          id="adresse"
          v-model="form.adresse"
        />
      </div>
      <div class="col-sm-2">
        <label for="date_inscription">Date d'inscription</label>
        <input
          type="date"
          class="form-control"
          id="date_inscription"
          v-model="form.date_inscription"
        />
      </div>
      <div class="col-sm-2">
        <label for="telephone">Téléphone</label>
        <input
          type="tel"
          class="form-control"
          id="telephone"
          v-model="form.telephone"
        />
      </div>
      <div class="col-sm-3">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="form.email"
        />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mt-4">Ajouter</button>
      </div>
      <div v-if="error" class="text-danger mt-2">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Form state
const form = ref({
  nom: "",
  adresse: "",
  date_inscription: "",
  telephone: "",
  email: "",
});

const error = ref("");

const emit = defineEmits(["onAdd"]);

const validateForm = () => {
  if (
    !form.value.nom ||
    !form.value.adresse ||
    !form.value.date_inscription ||
    !form.value.telephone ||
    !form.value.email
  ) {
    error.value = "Veuillez saisir tous les champs";
    return false;
  }
  error.value = "";
  return true;
};

const onSubmit = () => {
  if (validateForm()) {
    emit(
      "onAdd",
      form.value.nom,
      form.value.adresse,
      form.value.date_inscription,
      form.value.telephone,
      form.value.email
    );
    form.value = {
      nom: "",
      adresse: "",
      date_inscription: "",
      telephone: "",
      email: "",
    };
  }
};
</script>

<style scoped>
.table .btn-xs {
  padding: 2px 5px;
  font-size: 12px;
}
</style>
