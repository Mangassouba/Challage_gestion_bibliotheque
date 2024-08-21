# Gestion de Bibliothèque

Ce projet est une application de gestion de bibliothèque développée avec Vue 3 et Vite. Il permet de gérer les membres, les livres, et les prêts de manière intuitive. L'application utilise Vue Router pour une navigation facile entre les différentes sections.

## Fonctionnalités

- **Gestion des Membres** : Ajouter, modifier, supprimer et visualiser les détails des membres inscrits à la bibliothèque.
- **Gestion des Livres** : Ajouter, modifier, supprimer et visualiser les livres disponibles dans la bibliothèque.
- **Gestion des Prêts** : Suivre les prêts de livres, avec la possibilité d'ajouter, modifier et clôturer des prêts.

## Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)

### Installation du Projet

1. **Cloner le dépôt :**

```sh
   git clone https://github.com/Mangassouba/Challage_gestion_bibliotheque.git
   cd gestion_bibliotheque
```

## Installer les dépendances :

```sh
npm install
```

# Configuration

## Lancer le serveur de développement :

```sh
npm run dev
```

## Navigation

L'application utilise Vue Router pour une navigation fluide entre les sections membres, livres, et prêts. Chaque section est accessible depuis la barre de navigation et permet d'accéder rapidement aux fonctionnalités de gestion associées.
Documentation des Composants
Composants Parents
# Documentation des Composants:

## listeMembre :
Ce composant parent est responsable de la gestion globale des membres. Il intègre les composants enfants pour ajouter, modifier, et afficher les membres.

**Fonctionnalités** :
Gère l'état global des membres.
Appelle les composants enfants pour l'ajout, l'édition, et la suppression des membres.
Centralise les données des membres pour un affichage cohérent.

**Ajouter un membre** : Le composant AjouterMembre permet d'ajouter un nouveau membre en remplissant un formulaire avec les informations suivantes : nom, adresse, date d'inscription, téléphone, et email.
**Afficher les membres** : Les membres sont listés dans un tableau avec la possibilité de visualiser, modifier, ou supprimer chaque membre.
**Modifier un membre** : Le composant EditerMembre permet de modifier les informations d'un membre existant.
 Supprimer un membre : Un membre peut être supprimé de la liste.

## Livre :
Ce composant parent gère l'ensemble des opérations liées aux livres. Il intègre les composants pour ajouter, modifier, et afficher les livres.

**Fonctionnalités** :
Gère l'état global des livres.
Appelle les composants enfants pour l'ajout, l'édition, et la suppression des livres.
Centralise les données des livres pour une gestion unifiée.

**Ajouter un livre** : Le composant AjouterLivre permet d'ajouter un nouveau livre avec des informations comme le titre, l'auteur, et la date de publication.
**Afficher les livres** : Les livres sont listés avec la possibilité de voir, modifier ou supprimer chaque livre.
**Modifier un livre** : Un livre existant peut être mis à jour via un formulaire.
Supprimer un livre : Un livre peut être supprimé de la liste.

## listePrets :
Ce composant parent est utilisé pour gérer les prêts de la bibliothèque. Il intègre les composants pour ajouter, modifier, et afficher les prêts.

**Fonctionnalités** :
Gère l'état global des prêts.
Appelle les composants enfants pour l'ajout, l'édition, et la suppression des prêts.
Centralise les données des prêts pour une gestion cohérente.

**Ajouter un prêt** : Le composant AjouterPret permet d'ajouter un nouveau prêt en spécifiant le membre et le livre concernés, ainsi que la date de début et de fin du prêt.
 **Afficher les prêts** : Les prêts en cours sont listés avec des options pour visualiser, modifier ou annuler le prêt.
**Modifier un prêt** : Un prêt peut être mis à jour pour refléter les modifications nécessaires.
**Annuler un prêt** : Un prêt peut être annulé si nécessaire.

## Auteur
- Hama Houllah Mangassouba https://github.com/Mangassouba
- Assa Ousman Baradji https://github.com/AssaBaradji
