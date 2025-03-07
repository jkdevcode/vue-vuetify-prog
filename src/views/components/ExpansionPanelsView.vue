<template>
  <v-container class="md">
    <v-expansion-panels variant="popout">
      <v-expansion-panel>
        <v-expansion-panel-title> Panel 1 </v-expansion-panel-title>
        <v-expansion-panel-text> Contenido del panel 1 </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels variant="inset">
      <v-expansion-panel :key="i" text="Contenido del panel 2" title="Panel 2">
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels variant="popout">
      <v-expansion-panel :key="i" text="Contenido del panel 3" title="Panel 3">
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
// No se requieren importaciones adicionales para este ejemplo básico
</script>

<style scoped></style>
