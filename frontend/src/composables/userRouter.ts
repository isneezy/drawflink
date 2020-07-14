import { computed, getCurrentInstance } from '@vue/composition-api'

export default function() {
  const vm = getCurrentInstance()
  if (!vm) throw Error('useRouter can only be used inside setup function')
  const route = computed(() => vm.$route)
  const params = computed(() => vm.$route.params)
  const query = computed(() => vm.$route.query)
  const router = vm.$router

  return { router, route, params, query }
}
