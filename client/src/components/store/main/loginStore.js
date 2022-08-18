import { applySnapshot, types } from 'mobx-state-tree';

const IDENTIFIER = 'loginModel';

const model = types
  .model(IDENTIFIER, {
    /** 스토어 아이덴티티 */
    identifier: types.optional(types.identifier, IDENTIFIER),
    /** 이메일 */
    email: types.optional(types.string, ''),
    /** 이름 */
    name: types.optional(types.string, ''),
    /** password */
    password: types.optional(types.string, ''),
    /** check password */
    checkPassword: types.optional(types.string, ''),
  })
  .actions(self => {
    return {
      /** search field set */
      setInputField(fieldName, val) {
        self[fieldName] = val;
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
  name: '',
  password: '',
  checkPassword: '',
};

/** create or initialize */
const create = model.create(defaultValue);

const loginStore = {
  create,
  defaultValue,
  model,
};

export default loginStore;
