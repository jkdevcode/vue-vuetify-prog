<template><!-- inicializamos la plantilla Html -->
  <v-container class="md"> <!-- contenedor principal -->
    <v-col cols="12" sm="6" md="4"> <!-- columna de 12 columnas, 6 columnas en sm, 4 columnas en md -->
      <v-card class="mb-4"> <!-- card -->
        <v-card-title>Título de la Tarjeta</v-card-title>
        <v-card-text>
          Este es un ejemplo básico de una tarjeta usando Vuetify. Las tarjetas son contenedores
          versátiles que pueden mostrar diferentes tipos de contenido.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary">Acción</v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        :variant="variant"
        class="mx-auto"
        color="color"
        subtitle="Greyhound divisely hello coldly fonwderfully"
        title="Headline">
        <template v-slot:actions>
          <v-btn text="Button" />
        </template>
      </v-card>
    </v-col>
  </v-container>
</template>

<script setup>

</script>

<style scoped></style>
