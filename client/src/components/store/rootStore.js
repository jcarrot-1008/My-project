import { useMemo } from "react"
import { applySnapshot, Instance, types } from "mobx-state-tree"
import mainStore from "./main/mainStore"
let store
const Store = types.model("store", {
  /** 스토어 아이덴티티 */
  identifier: types.optional(types.identifier, "store"),
  mainModel: types.optional(mainStore.model, () => mainStore.create),
})

/** 스토어 initialize */
const initializeStore = (snapshot = null) => {
  const defaultValue = {
    mainModel: { ...mainStore.defaultValue },
  }

  let initStore = store ?? Store.create(defaultValue)

  if (snapshot) {
    applySnapshot(initStore, snapshot)
  }
  if (typeof window === "undefined") return initStore

  if (!store) store = initStore
  return store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
