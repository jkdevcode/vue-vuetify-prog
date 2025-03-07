<template>
  <v-container class="md">
    <v-col cols="12" sm="6" md="4">
      <v-chip class="ma-2">
        Chip Básico
      </v-chip>

      <v-chip class="ma-2" color="primary">
        Chip Primario
      </v-chip>

      <v-chip class="ma-2" color="success" variant="flat">
        <v-icon start icon="mdi-check" />
        Completado
      </v-chip>

      <v-chip class="ma-2" closable>
        Chip cerrable
      </v-chip>

      <v-chip class="ma-2" variant="outlined">
        Con Borde
      </v-chip>

      <v-chip class="ma-2" size="small">
        Pequeño
      </v-chip>
      <v-chip class="ma-2" size="large">
        Grande
      </v-chip>
    </v-col>
  </v-container>
</template>
