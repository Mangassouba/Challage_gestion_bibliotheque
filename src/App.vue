<script setup>
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
    <div class="container p-3">
      <a class="navbar-brand" href="#">Gestion Bibliotheque</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Livres"
                >Liste de Livres</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Membres"
                >Liste des Membres</RouterLink
              >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Prets"
                >Liste des Prets</RouterLink
              >
          </li>
        </ul>
        <form>
          <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </div>
  </nav>


  <div>
    <div class="container mt-5">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>

