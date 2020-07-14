<template>
  <div class="home">
    <h1>dwarflink</h1>
    <url-input @shorten="shortenUrl" />
    <h2>Recent urls</h2>
    <table>
      <thead>
        <tr>
          <th>Url</th>
          <th>Short Url</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="url in urls" :key="url._id">
          <td>
            <a :href="url.url" target="_blank">{{ url.url }}</a>
          </td>
          <td>
            <a :href="url.shortUrl" target="_blank">{{ url.shortCode }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import UrlInput from '@/components/UrlInput.vue'
import { defineComponent, onMounted } from '@vue/composition-api'
import useStore from '@/composables/useStore'
import userRouter from '@/composables/userRouter'
export default defineComponent({
  name: 'Home',
  components: { UrlInput },
  setup() {
    const { shortUrls } = useStore()
    const { urls, shortenUrl } = shortUrls
    const { query } = userRouter()

    onMounted(() => {
      shortUrls.fetchRecentUrls(query.value)
    })

    return { urls, shortenUrl }
  }
})
</script>
