<template>
  <div class="container mt-6 bg-dark p-4">
    <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
      <div class="col-sm-2">
        <label for="nom">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          v-model="formData.nom"
        />
      </div>
      <div class="col-sm-2">
        <label for="adresse">Adresse</label>
        <input
          type="text"
          class="form-control"
          id="adresse"
          v-model="formData.adresse"
        />
      </div>
      <div class="col-sm-2">
        <label for="date_inscription">Date d'inscription</label>
        <input
          type="date"
          class="form-control"
          id="date_inscription"
          v-model="formData.date_inscription"
        />
      </div>
      <div class="col-sm-2">
        <label for="telephone">Téléphone</label>
        <input
          type="tel"
          class="form-control"
          id="telephone"
          v-model="formData.telephone"
        />
      </div>
      <div class="col-sm-3">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="formData.email"
        />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mt-4">Modifier</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const props = defineProps({
  membre: {
    type: Object,
    required: true,
  },
});

const formData = reactive({ ...props.membre });

const emit = defineEmits(["Modifier"]);

const onSubmit = () => {
  emit("Modifier", { ...formData });
};
</script>

<style scoped>
</style>
