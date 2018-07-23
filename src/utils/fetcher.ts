// isomophic fetch since fetch only works only exists on the window
import fetch from 'node-fetch';


export const fetcher = async (url: string) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${url}`);
    const json = await res.json();
    return json;
  } catch (e) {
    console.log(e);
  }
}

export const getAlbums = () => fetcher('albums');
export const getAlbumPhotos = (id: string) => fetcher(`albums/${id}/photos`);
export const getAlbumById = (id: string) => fetcher(`albums/${id}`);

export const getPosts = () => fetcher('posts');
export const getPostComments = (id: string) => fetcher(`posts/${id}/comments`);
export const getPostById = (id: string) => fetcher(`posts/${id}`);