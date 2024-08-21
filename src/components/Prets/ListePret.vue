<template>
  <div class="container mt-4">
    <AjouterPret @onAdd="addPret" />

    <table class="table table-bordered table-sm mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Date d'emprunt</th>
          <th>Date de retour</th>
          <th>Livre</th>
          <th>Membre</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pret, index) in prets" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ pret.date_emprunt }}</td>
          <td>{{ pret.date_retours }}</td>
          <td>{{ pret.id_livre }}</td>
          <td>{{ pret.id_membre }}</td>
          <td>
            <button class="btn btn-danger btn-xs" @click="removePret(index)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <button class="btn btn-secondary btn-xs" @click="editPret(index)">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn btn-info btn-xs" @click="viewDetails(pret)">
              <i class="fa-solid fa-eye"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <EditerPret v-if="isEditing" :pret="currentPret" @Modifier="updatePret" />
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import AjouterPret from "./ajoutPrets.vue";
import EditerPret from "./editPrets.vue";

// Liste initiale des prêts
const prets = ref([
  {
    date_emprunt: "2024-07-15",
    date_retours: "2024-08-15",
    id_livre: "Les Soleils des indépendances",
    id_membre: "Fatimata Sow",
  },
  {
    date_emprunt: "2024-07-20",
    date_retours: "2024-08-20",
    id_livre: "L'Aventure ambigue",
    id_membre: "Ahmed Ould Mohamed",
  },
  {
    date_emprunt: "2024-08-01",
    date_retours: "2024-09-01",
    id_livre: "Chinua Achebe",
    id_membre: "Mariam Diallo",
  },
  {
    date_emprunt: "2024-08-05",
    date_retours: "2024-09-05",
    id_livre: "Americanah",
    id_membre: "Ali Baba",
  },
]);

const isEditing = ref(false);
const currentPret = ref(null);
const indexEditing = ref(null);

const addPret = (date_emprunt, date_retours, id_livre, id_membre) => {
  prets.value.push({
    date_emprunt,
    date_retours,
    id_livre,
    id_membre,
  });
};

const removePret = (index) => {
  prets.value.splice(index, 1);
};

const editPret = (index) => {
  currentPret.value = { ...prets.value[index] };
  indexEditing.value = index;
  isEditing.value = true;
};

const updatePret = (updatedPret) => {
  if (indexEditing.value !== null) {
    prets.value[indexEditing.value] = { ...updatedPret };
  }
  isEditing.value = false;
};

const viewDetails = (pret) => {
  alert(
    `Date d'emprumt: ${pret.date_emprunt}\nDate de retours: ${pret.date_retours}\nLivres: ${pret.id_livre}\nMembres: ${pret.id_membre}`
  );
};
</script>
  
  <style scoped>
.table .btn-xs {
  padding: 2px 5px;
  font-size: 12px;
}
button {
  margin: 5px;
}
</style>
  