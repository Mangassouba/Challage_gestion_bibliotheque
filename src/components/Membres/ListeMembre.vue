<template>
  <div class="container mt-6">
    <AjouterMembre @onAdd="addMembre" />

    <table class="table table-bordered table-sm mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Adresse</th>
          <th>Date d'inscription</th>
          <th>Téléphone</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(membre, index) in membres" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ membre.nom }}</td>
          <td>{{ membre.adresse }}</td>
          <td>{{ membre.date_inscription }}</td>
          <td>{{ membre.telephone }}</td>
          <td>{{ membre.email }}</td>
          <td>
            <button class="btn btn-danger btn-xs" @click="removeMembre(index)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <button class="btn btn-secondary btn-xs" @click="editMembre(index)">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn btn-info btn-xs" @click="viewDetails(membre)">
              <i class="fa-solid fa-eye"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <EditerMembre
      v-if="isEditing"
      :membre="currentMembre"
      @Modifier="updateMembre"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AjouterMembre from "./ajoutMembre.vue";
import EditerMembre from "./editMembre.vue";

const membres = ref([
  {
    nom: "Fatimata Sow",
    adresse: "Sebkha, Nouakchott",
    date_inscription: "2024-01-15",
    telephone: "46464489",
    email: "fatimata.sow@example.com",
  },
  {
    nom: "Ahmed Ould Mohamed",
    adresse: "Tevragh Zeina, Nouakchott",
    date_inscription: "2024-02-20",
    telephone: "46321234",
    email: "ahmed.ould.mohamed@example.com",
  },
  {
    nom: "Mariam Diallo",
    adresse: "Cansado, Nouadhibou",
    date_inscription: "2024-03-05",
    telephone: "46123456",
    email: "mariam.diallo@example.com",
  },
  {
    nom: "Ali Baba",
    adresse: "Arafat, Nouakchott",
    date_inscription: "2024-04-10",
    telephone: "46234567",
    email: "ali.baba@example.com",
  },
  {
    nom: "Aissatou Taye",
    adresse: "Basra, Sebkha",
    date_inscription: "2024-05-25",
    telephone: "46987654",
    email: "aissatou.taye@example.com",
  },
]);

const isEditing = ref(false);
const currentMembre = ref(null);
const indexEditing = ref(null);

const addMembre = (nom, adresse, date_inscription, telephone, email) => {
  membres.value.push({
    nom,
    adresse,
    date_inscription,
    telephone,
    email,
  });
};

const removeMembre = (index) => {
  membres.value.splice(index, 1);
};

const editMembre = (index) => {
  currentMembre.value = { ...membres.value[index] };
  indexEditing.value = index;
  isEditing.value = true;
};

const updateMembre = (updatedMembre) => {
  if (indexEditing.value !== null) {
    membres.value[indexEditing.value] = { ...updatedMembre };
  }
  isEditing.value = false;
};

const viewDetails = (membre) => {
  alert(
    `Nom: ${membre.nom}\nAdresse: ${membre.adresse}\nDate d'inscription: ${membre.date_inscription}\nTéléphone: ${membre.telephone}\nEmail: ${membre.email}`
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
