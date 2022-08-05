import { applySnapshot, Instance, types } from 'mobx-state-tree';

const IDENTIFIER = 'loginModel';

const model = types
  .model(IDENTIFIER, {
    /** 스토어 아이덴티티 */
    identifier: types.optional(types.identifier, IDENTIFIER),
    /** 지원센터코드 */
    email: types.optional(types.string, ''),
  })
  .actions((self) => {
    return {
      /** search field set */
      setInputField(fieldName, val) {
        (self[fieldName]) = val;
      },
      /** 초기화 */
      setInit() {
        applySnapshot(self, defaultValue);
      },
    };
  });

/** 초기화 값 */
const defaultValue = {
  identifier: IDENTIFIER,
  email: '',
};

/** create or initialize */
const create = model.create(defaultValue);

const loginStore = {
  create,
  defaultValue,
  model,
};

export default loginStore;
