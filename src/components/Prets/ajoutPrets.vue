<template>
  <div class="container">
    <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
      <div class="col-sm-3">
        <label for="date_emprunt">Date d'emprunt</label>
        <input
          type="date"
          class="form-control"
          id="date_emprunt"
          v-model="form.date_emprunt"
        />
      </div>
      <div class="col-sm-3">
        <label for="date_retours">Date de retour</label>
        <input
          type="date"
          class="form-control"
          id="date_retours"
          v-model="form.date_retours"
        />
      </div>
      <div class="col-sm-2">
        <label for="id_livre">Livre</label>
        <!-- <input
          type="number"
          class="form-control"
          id="id_livre"
          v-model="form.id_livre"
        /> -->
        <select
          v-model="form.id_livre"
          class="form-select"
          aria-label="Default select example"
        >
          <option value="Les Soleils des indépendances">
            Les Soleils des indépendances
          </option>
          <option value="L'Aventure ammbigue">L'Aventure ammbigue</option>
          <option value="Chinua Achebe">Chinua Achebe</option>
          <option value="Le Docker noir">Le Docker noir</option>
          <option value="Maimouna">Maimouna</option>
        </select>
      </div>
      <div class="col-sm-2">
        <label for="id_membre">Membre</label>
        <!-- <input
          type="number"
          class="form-control"
          id="id_membre"
          v-model="form.id_membre"
        /> -->
        <select
          v-model="form.id_membre"
          class="form-select"
          aria-label="Default select example"
        >
          <option value="Fatimata Sow">Fatimata Sow</option>
          <option value="Ahmed Ould Mohamed">Ahmed Ould Mohamed</option>
          <option value="Mariam Diallo">Mariam Diallo</option>
          <option value="Mariam Diallo">Ali Baba</option>
          <option value="Mariam Diallo">Oumar Ndiaye</option>
          <option value="Mariam Diallo">Zeinabou Ba</option>
        </select>
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

const form = ref({
  date_emprunt: "",
  date_retours: "",
  id_livre: "",
  id_membre: "",
});

const error = ref("");

const emit = defineEmits(["onAdd"]);

const validateForm = () => {
  if (
    !form.value.date_emprunt ||
    !form.value.date_retours ||
    !form.value.id_livre ||
    !form.value.id_membre
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
      form.value.date_emprunt,
      form.value.date_retours,
      form.value.id_livre,
      form.value.id_membre
    );
    form.value = {
      date_emprunt: "",
      date_retours: "",
      id_livre: "",
      id_membre: "",
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
  