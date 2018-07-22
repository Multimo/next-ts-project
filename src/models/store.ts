import { types, applySnapshot, flow, getSnapshot } from 'mobx-state-tree';

// isomophic fetch since fetch only works only exists on the window
import fetch from 'node-fetch';

let store = null

export const getAlbums = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albums = await res.json();
    return albums;
  } catch (e) {
    console.log(e);
  }
}

export const getPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return posts;
  } catch (e) {
    console.log(e);
  }
}

const Album = types.model('Album' ,{
  id: types.number,
  userId: types.number,
  title: types.string,
})

const Post = types.model('Post' ,{
  id: types.number,
  userId: types.number,
  title: types.string,
})

export const albumStore = types
  .model('store', {
    albums: types.optional(types.array(Album), []),
    posts: types.optional(types.array(Post), []),
    toggle: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    toggler() {
      self.toggle = !self.toggle;
    },
  }));
    // const fetchAlbums = flow(function* () {
    //   const res = yield getAlbums();
    //   console.log('FETCHED!!!!!!!!!!!!!!!!!')
    //   applySnapshot(self.albums, res)
    // });

    // return ({
    //   // afterCreate() {
    //   //   fetchAlbums()
    //   // },
    //   fetchAlbums,
      
    // });
  // });

export const alStore = albumStore.create();

// export const rehydrateStore = async (isServer: boolean, snapshot = null) => {
//   if (isServer || alStore.albums.length === 0) {
//     const hellomyoldfirend = await getAlbums();
//     const posts = await getPosts();
//     console.log()
//     store = albumStore.create({
//       albums: hellomyoldfirend || [],
//       posts: posts || [],
//     });
//     return { 
//       initialState: getSnapshot(store), 
//       isServer, 
//     };
//   }
  

//   // if (snapshot) {
//   //   console.log('is store alive?', alStore, snapshot)
//   //   return store
//   // }
//     // store = applySnapshot(alStore, snapshot)

//   return alStore;
// };

export const rehydrateStore = (initialState) => {
  initialState && applySnapshot(alStore, initialState);
  return alStore;
}

export const initStore = async () => {
  if (alStore.albums.length && alStore.posts.length) {
    return albumStore;
  }

  const hellomyoldfirend = await getAlbums();
  const posts = await getPosts();
  console.log()
  store = albumStore.create({
    albums: hellomyoldfirend || [],
    posts: posts || [],
  });
  return { 
    initialState: getSnapshot(store), 
  };
};

