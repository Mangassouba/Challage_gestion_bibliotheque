<script setup>
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Gestion Bibliotheque</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/Livres"
                >Liste de Livres</RouterLink
              >
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
        </div>
      </div>
    </nav>
    <div class="container mt-5">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
