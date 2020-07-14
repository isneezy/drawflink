import { InjectionKey, reactive, toRefs } from '@vue/composition-api'
import { Dictionary } from 'vue-router/types/router'
import axios from 'axios'
import { WaitStore } from '@/store/createWaitStore'

export interface PaginatedResponse<T> {
  docs: T[]
}
export interface Url {
  _id: string
  url: string
  shortUrl: string
  shortCode: string
}

export interface ShortUrlState {
  urls: Url[]
}

interface ShortUrlStoreOptions {
  waitStore: WaitStore
}

export default function createShortUrlsStore({
  waitStore
}: ShortUrlStoreOptions) {
  const state = reactive<ShortUrlState>({
    urls: []
  })

  function fetchRecentUrls(params?: Dictionary<string | (string | null)[]>) {
    waitStore.waitStart('urls.index')
    return axios
      .get<PaginatedResponse<Url>>('http://localhost:3000/api/urls', { params })
      .then((value) => {
        state.urls = value.data.docs
      })
      .finally(() => waitStore.waitEnd('urls.index'))
  }

  function shortenUrl(url: string) {
    waitStore.waitStart('urls.shorten')
    return axios
      .post<Url>('http://localhost:3000/api/urls/shorten', { url })
      .then((result) => {
        return fetchRecentUrls().then(() => result.data)
      })
      .finally(() => waitStore.waitEnd('urls.shorten'))
  }

  return { ...toRefs(state), fetchRecentUrls, shortenUrl }
}

export type UseShortUrls = ReturnType<typeof createShortUrlsStore>
export const ShortUrlsKey: InjectionKey<UseShortUrls> = Symbol('UseShortUrls')
