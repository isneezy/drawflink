<template>
  <div>
    <div
      class="url-input"
      :class="{ 'url-input--focused': focused, 'url-input--busy': busy }"
      @keyup.enter="onSubmit"
    >
      <input
        id="url-input"
        name="url"
        v-model="inputValue"
        :disabled="busy"
        placeholder="Enter your original URL eg. https://primarybid.com/static/TermsAndConditions.pdf"
        @focus="focused = true"
        @blur="focused = false"
      />
      <button :disabled="busy" @click="onSubmit">
        Shorten URL
      </button>
      <loading-spinner
        class="url-input__loading-spinner"
        v-if="busy"
        fill="var(--color-teal-500)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
export default defineComponent({
  components: { LoadingSpinner },
  props: {
    value: { type: String, default: '' },
    busy: { type: Boolean, default: false }
  },
  setup(props, { emit }) {
    const inputValue = ref<string>('')
    const focused = ref(false)
    watch(
      () => props.value,
      (value) => (inputValue.value = value)
    )
    function onSubmit() {
      emit('shorten', inputValue.value)
    }
    return { inputValue, onSubmit, focused }
  }
})
</script>
<style scoped>
.url-input {
  position: relative;
  display: flex;
  border: 2px var(--color-gray-300) solid;
  border-radius: 3px;
}
.url-input input {
  flex: 1 1;
  padding: 8px 10px;
  appearance: none;
  border: none;
  box-sizing: border-box;
  width: 100%;
}
.url-input input:focus {
  outline: none;
}
.url-input input:disabled {
  background-color: var(--color-gray-100);
}
.url-input.url-input--focused {
  border-color: var(--color-teal-600);
}

.url-input button {
  cursor: pointer;
  appearance: none;
  color: var(--color-white);
  background-color: var(--color-teal-600);
  border-radius: 0 3px 3px 0;
  border: none;
  padding: 4px 12px;
  display: block;
}
.url-input button:disabled {
  background-color: var(--color-gray-500);
}
.url-input.url-input--focused button {
  border-radius: 0;
}
.url-input button:hover:enabled,
.url-input button:focus {
  outline: none;
  background-color: var(--color-teal-700);
}

.url-input__loading-spinner {
  position: absolute;
  height: 64px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
