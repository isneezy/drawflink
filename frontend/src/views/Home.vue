<template>
  <div class="home">
    <div class="wrapper">
      <logo class="logo" />
      <url-input
        class="home__url-input"
        :busy="waiting('urls.shorten')"
        @shorten="shortenUrl"
      />
      <div class="home__recent-urls-card">
        <h2>Recent urls</h2>
        <short-url-list :urls="urls" :busy="waiting('urls.index')" />
        <VuePaginate
          class="pagination"
          :value="pagination.page"
          :page-count="pagination.totalPages"
          @input="goToPage"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VuePaginate from 'vuejs-paginate'
import UrlInput from '@/components/UrlInput.vue'
import ShortUrlList from '@/components/ShortUrlList.vue'
import Logo from '@/components/Logo.vue'
import { defineComponent, onMounted, watch } from '@vue/composition-api'
import useStore from '@/composables/useStore'
import userRouter from '@/composables/userRouter'
export default defineComponent({
  name: 'Home',
  components: { Logo, UrlInput, ShortUrlList, VuePaginate },
  setup() {
    const { shortUrls, waiting } = useStore()
    const { urls, pagination, shortenUrl } = shortUrls
    const { query, router } = userRouter()

    watch(query, () => shortUrls.fetchRecentUrls(query.value))

    onMounted(() => {
      shortUrls.fetchRecentUrls(query.value)
    })

    function goToPage(page: number) {
      router.replace({ path: '/', query: { ...query.value, page: `${page}` } })
    }

    return { urls, pagination, shortenUrl, waiting, goToPage }
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
.home__recent-urls-card {
  margin-top: 1rem;
  background-color: var(--color-white);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.home__recent-urls-card h2 {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-gray-700);
  padding: 10px 8px;
  border-bottom: 1px solid var(--color-gray-300);
}
.wrapper {
  width: 100%;
}
</style>
