import { applySnapshot, Instance, types } from "mobx-state-tree"
import loginStore from "./loginStore"

const IDENTIFIER = "mainModel"

const model = types
  .model(IDENTIFIER, {
    /** 스토어 아이덴티티 */
    identifier: types.optional(types.identifier, IDENTIFIER),
    /** 검색 모델 */
    loginModel: types.optional(loginStore.model, loginStore.defaultValue),
  })
  .actions(self => ({
    /** 상태값 초기화 */
    setInit() {
      applySnapshot(self, defaultValue)
    },
  }))

/** 초기화 값 */
const defaultValue = {
  identifier: IDENTIFIER,
  loginModel: loginStore.defaultValue,
}

/** create or initialize */
const create = model.create(defaultValue)

const mainStore = {
  create,
  defaultValue,
  model,
}

export default mainStore
