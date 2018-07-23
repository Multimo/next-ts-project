import { applySnapshot, getSnapshot } from 'mobx-state-tree';
import { alStore, albumStore } from "../models/store";


export const rehydrateStore = (initialState?: any) => {
  initialState && applySnapshot(alStore, initialState);
  return alStore;
};

interface InitialState {
  initialState: any;
}

let store = null;
export const initStore = (isServer: boolean, response: any,): InitialState | any => {
  if (!isServer) {
    applySnapshot(alStore, response)
    return albumStore;
  }

  store = albumStore.create(response);
  
  return {
    initialState: getSnapshot(store),
  };
};