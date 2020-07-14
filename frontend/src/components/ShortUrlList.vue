<template>
  <table class="short-url-list">
    <thead>
      <tr>
        <th>Url</th>
        <th>Short Url</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="url in urls" :key="url._id">
        <td>
          <div>
            <a :href="url.url" :title="url.url" target="_blank">{{ url.url }}</a>
          </div>
        </td>
        <td>
          <div>
            <a :href="url.shortUrl" :title="url.shortUrl" target="_blank">{{ url.shortCode }}</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Url } from '@/store/createShortUrlsStore'
export default defineComponent({
  props: {
    urls: { type: Array as () => Url[] }
  }
})
</script>
<style>
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
th, td {
  padding: 0.5rem .75rem;
  letter-spacing: .05em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-bottom: 1px solid var(--color-gray-300);
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
</style>
