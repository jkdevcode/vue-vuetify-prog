<template>
  <v-card class="mx-auto pa-4">
    <v-card-title class="text-h4 mb-4">Accesibilidad (a11y)</v-card-title>
    <v-card-text>
      <v-alert color="info" icon="mdi-information" class="mb-4">
        Bienvenido a la vista de Accesibilidad
      </v-alert>

      <p class="text-body-1">
        La accesibilidad web (también conocida como a11y) se refiere a la práctica de crear sitios
        web que puedan ser utilizados por cualquier persona, independientemente de sus capacidades o
        situación.
      </p>

      <v-divider class="my-4" />

      <h3 class="text-h6 mb-2">Aspectos principales:</h3>
      <v-list>
        <v-list-item v-for="(item, index) in aspectos" :key="index" :title="item" />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
  const aspectos = [
    'Navegación por teclado',
    'Compatibilidad con lectores de pantalla',
    'Alto contraste y legibilidad',
    'Estructura semántica del contenido',
    'Textos alternativos para imágenes',
  ];
</script>
