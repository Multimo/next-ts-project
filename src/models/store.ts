import { types } from 'mobx-state-tree';
import { getAlbums, getPosts } from '../utils/fetcher';

const Photo = types.model('Photo' , {
  albumId: types.number,
  id: types.number,
  title: "",
  url: "",
  thumbnailUrl: ""
});

const Album = types.model('Album' ,{
  id: types.number,
  userId: types.number,
  title: types.string,
  photos: types.optional(types.array(Photo), []), 
});

const Comments = types.model('Comments' , {
    postId: types.number,
    id: types.number,
    name: "",
    email: "",
    body: ""
});

const Post = types.model('Post' ,{
  id: types.number,
  userId: types.number,
  title: types.string,
  comments: types.optional(types.array(Comments), []), 
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
    // afterCreate: async () => {
    //   await getAlbums();
    //   await getPosts();
    // },
  }))
  .views(self => ({
    getPost(postId: number) {
      return self.posts.find(p => p.id === postId);
    },
    getAlbum(albumId: number) {
      return self.albums.find(a => a.id === albumId);
    }
  }));

export const alStore = albumStore.create();
                  