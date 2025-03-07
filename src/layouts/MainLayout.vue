<template>
  <v-app>
    <!-- Barra de navegación superior -->
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>Vuetify Docs</v-app-bar-title>

      <v-tabs
        v-model="activeTab"
        color="white"
        align-tabs="center"
      >
        <v-tab
          v-for="item in mainMenuItems"
          :key="item.title"
          :value="item.value"
          @click="handleMainMenuClick(item)"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <!-- Menú lateral -->
    <v-navigation-drawer v-model="drawer" permanent>
      <v-list>
        <v-list-subheader>{{ activeSection }}</v-list-subheader>
        <v-list-item
          v-for="item in subMenuItems[activeTab]"
          :key="item.title"
          :value="item.value"
          :to="item.route"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <v-container fluid>
        <router-view v-slot="{ Component }">
          <v-fade-transition mode="out-in">
            <component :is="Component" />
          </v-fade-transition>
        </router-view>
      </v-container>
    </v-main>

    <!-- Pie de página -->
    <v-footer app color="primary" class="text-center d-flex justify-center">
      <span class="white--text">&copy; {{ new Date().getFullYear() }} - Documentación Vuetify</span>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(true)
const activeTab = ref('functions')
const activeSection = ref('Funciones')

// Menú principal
const mainMenuItems = [
  { title: 'Funciones', value: 'functions' },
  // { title: 'Estilos y Animaciones', value: 'styles' },
  // { title: 'Conceptos Comunes', value: 'concepts' },
  // { title: 'Componentes', value: 'components' },
  // { title: 'API', value: 'api' }
]

// Submenús para cada sección
const subMenuItems = {
  functions: [
    { title: 'Accesibilidad', route: '/functions/accessibility' },
    { title: 'Aliasing', route: '/functions/aliasing' },
    { title: 'Diseño de Aplicación', route: '/functions/layout' }
  ],
  // styles: [
  //   { title: 'Colores', route: '/styles/colors' },
  //   { title: 'Transiciones', route: '/styles/transitions' },
  //   { title: 'Temas', route: '/styles/themes' }
  // ],
  // concepts: [
  //   { title: 'Instalación', route: '/concepts/installation' },
  //   { title: 'Estructura', route: '/concepts/structure' },
  //   { title: 'Plugins', route: '/concepts/plugins' }
  // ],
  // components: [
  //   { title: 'Botones', route: '/components/buttons' },
  //   { title: 'Tarjetas', route: '/components/cards' },
  //   { title: 'Formularios', route: '/components/forms' }
  // ],
  // api: [
  //   { title: 'Referencias', route: '/api/references' },
  //   { title: 'Ejemplos', route: '/api/examples' },
  //   { title: 'Guías', route: '/api/guides' }
  // ]
}

const handleMainMenuClick = (item) => {
  activeSection.value = item.title
  // Navegar a la primera ruta del submenú
  if (subMenuItems[item.value]?.length > 0) {
    router.push(subMenuItems[item.value][0].route)
  }
}
</script>

<style scoped>
.v-app-bar-title {
  margin-right: 2rem;
}
</style>
