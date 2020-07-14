import { reactive } from '@vue/composition-api'

export interface WaitState {
  waiting: string[]
}
export default function createWaitStore() {
  const state = reactive<WaitState>({ waiting: [] })
  function waitStart(name: string) {
    if (!state.waiting.includes(name)) {
      state.waiting.push(name)
    }
  }
  function waitEnd(name: string) {
    if (state.waiting.includes(name)) {
      state.waiting = state.waiting.filter((waiting) => waiting !== name)
    }
  }

  function waiting(...names: string[]): boolean {
    const result = names.reduce(
      (includes, name) => includes || state.waiting.includes(name),
      false
    )
    return result
  }

  return { state, waitStart, waitEnd, waiting }
}

export type WaitStore = ReturnType<typeof createWaitStore>
