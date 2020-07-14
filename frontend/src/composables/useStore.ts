import { inject } from '@vue/composition-api'
import { Store, StoreKey } from '@/store/createStore'
export default function useStore(): Store {
  const store = inject<Store>(StoreKey)
  if (store) {
    return store
  } else {
    throw Error('Store is not available yet...')
  }
}
