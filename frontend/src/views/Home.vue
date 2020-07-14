<template>
  <div class="home">
    <div class="wrapper">
      <h1>dwarflink</h1>
      <url-input
        class="home__url-input"
        :busy="waiting('urls.shorten')"
        @shorten="shortenUrl"
      />
      <h2>Recent urls</h2>
      <short-url-list :urls="urls" />
    </div>
  </div>
</template>

<script lang="ts">
import UrlInput from '@/components/UrlInput.vue'
import ShortUrlList from '@/components/ShortUrlList.vue'
import { defineComponent, onMounted } from '@vue/composition-api'
import useStore from '@/composables/useStore'
import userRouter from '@/composables/userRouter'
export default defineComponent({
  name: 'Home',
  components: { UrlInput, ShortUrlList },
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
