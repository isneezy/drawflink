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
  --color-body: #2c3e50;
}

html {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-body);
  background-color: rgba(43, 43, 43, 0.1);
}

.container {
  margin: 0 auto;
  max-width: 920px;
}
</style>
