<template>
  <table class="short-url-list">
    <thead>
      <tr>
        <th>Url</th>
        <th>Short Url</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="url in urls" :key="url._id">
        <td>
          <div>
            <a :href="url.url" :title="url.url" target="_blank">
              {{ url.url }}
            </a>
          </div>
        </td>
        <td>
          <div>
            <a :href="url.shortUrl" :title="url.shortUrl" target="_blank">
              {{ url.shortCode }}
            </a>
          </div>
        </td>
        <td>
          <button class="copy-button" title="Copy">
            <copy-icon />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Url } from '@/store/createShortUrlsStore'
import CopyIcon from '@/components/svg/Copy.vue'
export default defineComponent({
  components: { CopyIcon },
  props: {
    urls: { type: Array as () => Url[] }
  }
})
</script>
<style scoped>
table {
  overflow: hidden;
  table-layout: fixed;
  max-width: 100%;
  width: 100%;
}
thead {
  background-color: var(--color-gray-100);
}
tbody {
  background-color: var(--color-white);
}
th,
td {
  padding: 0.5rem 0.75rem;
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--color-gray-300);
}
th:last-child,
td:last-child {
  width: 40px;
}
th {
  text-align: left;
  font-weight: 400;
  color: var(--color-gray-600);
  text-transform: uppercase;
}
tr:hover td {
  background-color: var(--color-gray-100);
}
a {
  display: block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.copy-button {
  appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: var(--color-gray-600);
  margin-right: 2px;
  margin-left: 2px;
}
</style>
