/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';
import { VBtn } from 'vuetify/components';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  aliases: {
    BotonPrimario: VBtn,
    BotonSecundario: VBtn,
  },
  defaults: {
    BotonPrimario: {
      color: 'primary',
      variant: 'elevated',
      size: 'large',
      class: 'text-capitalize',
      elevation: '2',
    },
    BotonSecundario: {
      color: 'secondary',
      variant: 'outlined',
      size: 'large',
      class: 'text-capitalize',
      elevation: '2',
    },
  },
});
