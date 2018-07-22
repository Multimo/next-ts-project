import { applySnapshot, getSnapshot } from 'mobx-state-tree';
import { alStore, albumStore, getAlbums, getPosts } from "./store";


export const rehydrateStore = (initialState?: any) => {
  initialState && applySnapshot(alStore, initialState);
  return alStore;
};


let store = null;
export const initStore = async (isServer: boolean) => {
  if (!isServer && alStore.albums.length && alStore.posts.length) {
    return albumStore;
  }
  const albums = await getAlbums();
  const posts = await getPosts();
  store = albumStore.create({
    albums,
    posts,
  });
  return {
    initialState: getSnapshot(store)
  };
};