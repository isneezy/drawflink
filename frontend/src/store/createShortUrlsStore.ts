import { InjectionKey, reactive, toRefs } from '@vue/composition-api'
import axios from 'axios'
import { Dictionary } from 'vue-router/types/router'

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

export default function createShortUrlsStore() {
  const state = reactive<ShortUrlState>({
    urls: []
  })

  function fetchRecentUrls(params?: Dictionary<string | (string | null)[]>) {
    return axios
      .get<PaginatedResponse<Url>>('http://localhost:3000/api/urls', { params })
      .then((value) => {
        state.urls = value.data.docs
      })
  }

  function shortenUrl(url: string) {
    return axios
      .post<Url>('http://localhost:3000/api/urls/shorten', { url })
      .then((result) => {
        return fetchRecentUrls().then(() => result.data)
      })
  }

  return { ...toRefs(state), fetchRecentUrls, shortenUrl }
}

export type UseShortUrls = ReturnType<typeof createShortUrlsStore>
export const ShortUrlsKey: InjectionKey<UseShortUrls> = Symbol('UseShortUrls')
