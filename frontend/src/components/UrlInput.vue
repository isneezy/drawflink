<template>
  <div @keyup.enter="onSubmit">
    <input
      v-model="inputValue"
      :disabled="busy"
      placeholder="Enter your original URL eg. https://primarybid.com/static/TermsAndConditions.pdf"
    />
    <button :disabled="busy" @click="onSubmit">Shorten URL</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api'
export default defineComponent({
  props: {
    value: { type: String, default: '' },
    busy: { type: Boolean, default: false }
  },
  setup(props, { emit }) {
    const inputValue = ref<string>('')
    watch(
      () => props.value,
      (value) => (inputValue.value = value)
    )
    function onSubmit() {
      emit('shorten', inputValue.value)
    }
    return { inputValue, onSubmit }
  }
})
</script>
