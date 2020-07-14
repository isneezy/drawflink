<template>
  <div class="home">
    <div class="wrapper">
      <logo class="logo" />
      <url-input
        class="home__url-input"
        :busy="waiting('urls.shorten')"
        @shorten="shortenUrl"
      />
      <h2>Recent urls</h2>
      <short-url-list :urls="urls" :busy="waiting('urls.index')" />
    </div>
  </div>
</template>

<script lang="ts">
import UrlInput from '@/components/UrlInput.vue'
import ShortUrlList from '@/components/ShortUrlList.vue'
import Logo from '@/components/Logo.vue'
import { defineComponent, onMounted } from '@vue/composition-api'
import useStore from '@/composables/useStore'
import userRouter from '@/composables/userRouter'
export default defineComponent({
  name: 'Home',
  components: { Logo, UrlInput, ShortUrlList },
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
  margin-top: 12px;
}
.logo {
  text-align: center;
}
.home__url-input {
  max-width: 520px;
  margin: 32px auto 0;
}
.wrapper {
  width: 100%;
}
</style>
