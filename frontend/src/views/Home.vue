<template>
  <div class="home">
    <div class="wrapper">
      <h1>dwarflink</h1>
      <url-input class="home__url-input" :busy="waiting('urls.shorten')" @shorten="shortenUrl" />
      <h2>Recent urls</h2>
      <table style="display: none">
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
    const { shortUrls, waiting } = useStore()
    const { urls, shortenUrl } = shortUrls
    const { query } = userRouter()

    onMounted(() => {
      shortUrls.fetchRecentUrls(query.value)
    })

    return { urls, shortenUrl, waiting }
  }
})
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.home__url-input {
  max-width: 520px;
  margin: 0 auto;
}
.wrapper {
  width: 100%;
}
</style>
