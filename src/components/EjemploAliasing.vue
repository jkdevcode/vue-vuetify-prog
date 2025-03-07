<template>
  <div class="pa-4">
    <h2 class="mb-4">Ejemplo de Aliasing en Vuetify</h2>

    <div class="d-flex flex-column gap-4">
      <!-- Botón Primario -->
      <div>
        <h3 class="mb-2">Botón Primario</h3>
        <BotonPrimario @click="mostrarMensaje('primario')">Botón Primario</BotonPrimario>
      </div>

      <!-- Botón Secundario -->
      <div>
        <h3 class="mb-2">Botón Secundario</h3>
        <BotonSecundario @click="mostrarMensaje('secundario')">Botón Secundario</BotonSecundario>
      </div>

      <!-- Mostrar el mensaje -->
      <v-alert
        v-if="mensaje"
        :color="mensajeColor"
        class="mt-4"
        closable
        @click:close="mensaje = ''"
      >
        {{ mensaje }}
      </v-alert>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const mensaje = ref('');
  const mensajeColor = ref('primary');

  const mostrarMensaje = (tipo) => {
    mensaje.value = `Has hecho clic en el botón ${tipo}`;
    mensajeColor.value = tipo === 'primario' ? 'primary' : 'secondary';
  };
</script>

<style scoped>
  .gap-4 {
    gap: 1rem;
  }
</style>
