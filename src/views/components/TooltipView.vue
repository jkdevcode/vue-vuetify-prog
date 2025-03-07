<template>
  <v-container class="md">
    <v-card class="mx-auto pa-4">
      <v-card-title class="text-h4 mb-4">Tooltips</v-card-title>

      <v-card-text>
        <v-alert color="info" icon="mdi-information" class="mb-4">
          Los tooltips son pequeños textos informativos que aparecen al pasar el cursor sobre un
          elemento
        </v-alert>

        <div class="d-flex justify-center">
          <v-tooltip   activator="parent"
        location="bottom" text="¡Hola! Soy un tooltip">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" color="white" variant="outlined" rounded="lg">Pasa el cursor aquí</v-btn>
            </template>
          </v-tooltip>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
  // No se requieren importaciones adicionales para este ejemplo básico
</script>

<style scoped></style>
