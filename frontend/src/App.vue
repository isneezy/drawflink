<template>
  <provider class="container">
    <router-view />
  </provider>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import Provider from '@/components/Provider'
export default defineComponent({
  components: { Provider }
})
</script>

<style lang="css">
@import 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css';
@import 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap';

:root {
  --color-white: #fff;
  --color-gray-100: #f7fafc;
  --color-gray-200: #edf2f7;
  --color-gray-300: #e2e8f0;
  --color-gray-400: #cbd5e0;
  --color-gray-500: #a0aec0;
  --color-gray-600: #718096;
  --color-gray-700: #4a5568;
  --color-gray-800: #2d3748;
  --color-gray-900: #1a202c;

  --color-teal-100: #e6fffa;
  --color-teal-200: #b2f5ea;
  --color-teal-300: #81e6d9;
  --color-teal-400: #4fd1c5;
  --color-teal-500: #38b2ac;
  --color-teal-600: #319795;
  --color-teal-700: #2c7a7b;
  --color-teal-800: #285e61;
  --color-teal-900: #234e52;

  --color-body: var(--color-gray-800);
  --color-bg: var(--color-gray-100);
}

html {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-body);
  background-color: var(--color-bg);
}

.container {
  margin: 0 auto;
  max-width: 920px;
  padding: 0 8px;
}
</style>
