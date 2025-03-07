<template>
  <v-container class="md">
    <v-card class="mx-auto pa-4">
      <v-card-title class="text-h4 mb-4">Overlays</v-card-title>

      <v-card-text>
        <v-alert color="info" icon="mdi-information" class="mb-4">
          Los overlays son componentes que se superponen sobre otros elementos
        </v-alert>

        <div class="d-flex justify-center">
          <v-btn>
            Click me
            <v-overlay activator="parent" location-strategy="connected" scroll-strategy="block">
              <v-card class="pa-2">Hello gays!</v-card>
            </v-overlay>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup></script>

<style scoped></style>
