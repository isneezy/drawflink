import { InjectionKey } from '@vue/composition-api'
import createShortUrlsStore from '@/store/createShortUrlsStore'
import createWaitStore from '@/store/createWaitStore'

export default function createStore() {
  const waitStore = createWaitStore()
  const { waiting } = waitStore
  const shortUrls = createShortUrlsStore({ waitStore })
  return { shortUrls, waitStore, waiting }
}

export type Store = ReturnType<typeof createStore>
export const StoreKey: InjectionKey<Store> = Symbol('UseStore')
