import { applySnapshot, getSnapshot } from 'mobx-state-tree';
import { alStore, albumStore } from "./store";


export const rehydrateStore = (initialState?: any) => {
  initialState && applySnapshot(alStore, initialState);
  return alStore;
};

interface InitialState {
  initialState: any;
}

let store = null;
export const initStore = async (isServer: boolean, response: any,): Promise<InitialState | any> => {
  if (!isServer) {
    applySnapshot(alStore, response)
    return albumStore;
  }

  store = albumStore.create(response);
  
  return {
    initialState: getSnapshot(store),
    store: store,
  };
};