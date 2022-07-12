import { applySnapshot, Instance, types } from 'mobx-state-tree';


const IDENTIFIER = 'userModel';

/**
 *  User 모델
 */
const model = types
  .model(IDENTIFIER, {
    /** 스토어 아이덴티티 */
    identifier: types.optional(types.identifier, IDENTIFIER),
    /** 팝업오픈상태 */
    jwtToken: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    /** search field set */
    setSearchField(fieldName, val) {
        (self[fieldName]) = val;
      },
    /** 상태값 초기화 */
    setInit() {
      applySnapshot(self, defaultValue);
    },
  }));

/** 초기화 값 */
const defaultValue = {
  identifier: IDENTIFIER,
  jwtToken: false,
};

/** create or initialize */
const create = model.create(defaultValue);

const userStore = {
  create,
  defaultValue,
  model,
};

export default userStore;
