import { applySnapshot, Instance, types } from 'mobx-state-tree';

/** adm */
import modalStore from './ModalModel/ModalStore';
import userStore from './UserModel/UserStore';

let initStore

// store
const store = types.model('store', {
  /** 스토어 아이덴티티 */
  identifier: types.optional(types.identifier, 'store'),
  /** 모달 모델 */
  modalModel: types.optional(modalStore.model, () => modalStore.create),
    /** 유저 모델 */
  userModel: types.optional(userStore.model, () => userStore.create),
});

/** 스토어 initialize */
const initializeStore = (isServer, snapshot = null) => {
  const defaultValue = {
    /** modal Model */
     modalModel: { ...modalStore.defaultValue },
         /** user Model */
     userModel: { ...userStore.defaultValue },
  };

  // 서버일 경우에 대한 로직 작성
  if (isServer) {
    initStore = store.create(defaultValue);
  }

  // 클라이언트일 경우에 대한 로직 작성
  if ((store) === null) {
    initStore = store.create(defaultValue);
  }

  // 스냅샷 있을 경우 스토어에 스냅샷을 적용
  if (snapshot) {
    applySnapshot(initStore, snapshot);
  }

  return initStore;
};

export { initializeStore };