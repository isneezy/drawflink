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
  --color-bg: var(--color-gray-200);
}

html {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-body);
  background-color: var(--color-bg);
  font-size: 0.875rem;
}

/* Change Autocomplete styles in Chrome*/
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  box-shadow: 0 0 0 1000px var(--color-white) inset;
  transition: background-color 5000s ease-in-out 0s;
}

.container {
  margin: 0 auto;
  max-width: 920px;
  padding: 0 8px;
}

.pagination {
  background-color: var(--color-white);
  display: flex;
  justify-content: flex-end;
  padding: 8px 10px;
}
.pagination li {
  display: inline-flex;
  align-items: center;
  margin-left: -1px;
}
.pagination li a:focus {
  outline: none;
}
.pagination li:first-child a {
  border-radius: 3px 0 0 3px;
}
.pagination li:last-child a {
  border-radius: 0 3px 3px 0;
}
.pagination li a {
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-gray-300);
  background-color: var(--color-white);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.pagination li.active a {
  color: var(--color-teal-500);
  font-weight: 600;
}
</style>
