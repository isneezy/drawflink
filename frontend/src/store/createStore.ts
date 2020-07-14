import { InjectionKey } from '@vue/composition-api'
import createShortUrlsStore from '@/store/createShortUrlsStore'

export default function createStore() {
  const shortUrls = createShortUrlsStore()
  return { shortUrls }
}

export type Store = ReturnType<typeof createStore>
export const StoreKey: InjectionKey<Store> = Symbol('UseStore')
