import { types, applySnapshot, flow, getSnapshot } from 'mobx-state-tree';

// isomophic fetch since fetch only works only exists on the window
import fetch from 'node-fetch';

let store = null

export const getPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const albums = await res.json();
    return albums;
  } catch (e) {
    console.log(e);
  }
}

const Album = types.model('Post' ,{
  id: types.number,
  userId: types.number,
  title: types.string,
})

export const postsStore = types
  .model('postsStore', {
    posts: types.optional(types.array(Album), []),
  })
  .actions((self) => {
    const fetchAlbums = flow(function* () {
      const res = yield getPosts();
      console.log('FETCHED!!!!!!!!!!!!!!!!!')
      applySnapshot(self.posts, res)
    });

    return ({
      // afterCreate() {
      //   fetchAlbums()
      // },
      fetchAlbums,
      clearAlbums() {
        self.posts = [];
      },
    });
  });

export const pstStore = postsStore.create();

export const rehydrateStore = async (isServer: boolean, snapshot = null) => {
  if (isServer || pstStore.albums.length === 0) {
    const hellomyoldfirend = await getPosts();
    debugger;
    store = postsStore.create({
      albums: hellomyoldfirend,
    });
    return { 
      initialState: getSnapshot(store), 
      isServer, 
    };
  }
  

  // if (snapshot) {
  //   console.log('is store alive?', alStore, snapshot)
  //   store = applySnapshot(alStore, snapshot)
  //   return store
  // }

  return alStore;
};

