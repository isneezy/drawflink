<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, provide } from '@vue/composition-api'
import createStore, { StoreKey } from '@/store/createStore'
export default defineComponent({
  setup() {
    const store = createStore()
    provide(StoreKey, store)
    return { store }
  }
})
</script>
