<template>
  <div>
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titre</th>
          <th scope="col">Auteur</th>
          <!-- <th scope="col">Quantité</th>
            <th scope="col">Prix</th>
            <th scope="col">Montant</th> -->
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(livre, index) in livres" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ livre.titre }}</td>
          <td>{{ livre.auteur }}</td>
          <!-- <td>{{ product.quantite }}</td>
            <td>{{ product.prix }}</td>
            <td>{{ product.quantite * product.prix }}</td> -->
          <td class="text-center">
            <button class="btn btn-xs btn-info mx-2" @click="detailsLivre(livre)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
                />
              </svg>
            </button>
            <button class="btn btn-xs btn-danger mx-2" @click="destroy(index)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
                />
              </svg>
            </button>
            <button class="btn btn-xs btn-secondary" @click="edit(index)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
      <!-- <tfoot>
          <tr>
            <td colspan="5" class="text-center">Total</td>
            <td>{{ total }}</td>
          </tr>
        </tfoot> -->
    </table>
  </div>
</template>

<script setup>
// import { computed } from "vue";
const emit = defineEmits(["onRemove", "onEdit"]);

const props = defineProps({
  livres: {
    type: Array,
    required: true,
    default: [],
  },
});

// const total = computed(() =>
//   props.products.reduce((acc, item) => acc + item.prix * item.quantite, 0)
// );

const destroy = (index) => {
  emit("onRemove", index);
};
const edit = (index) => {
  emit("onEdit", index);
};

const detailsLivre = (livre) => {
  alert(
    `Titre: ${livre.titre}\n  Auteur: ${livre.auteur}`
  )
}
</script>
