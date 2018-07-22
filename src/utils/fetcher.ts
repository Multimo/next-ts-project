// isomophic fetch since fetch only works only exists on the window
import fetch from 'node-fetch';


const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json // 
  } catch (e) {
    console.log(e);
  }
}

export const getAlbums = () => fetcher('https://jsonplaceholder.typicode.com/albums');
export const getAlbumPhotos = (id: string) => fetcher(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
export const getAlbumById = (id: string) => fetcher(`https://jsonplaceholder.typicode.com/albums/${id}`);

export const getPosts = () => fetcher('https://jsonplaceholder.typicode.com/posts');
export const getPostComments = (id: string) => fetcher(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
export const getPostById = (id: string) => fetcher(`https://jsonplaceholder.typicode.com/posts/${id}`);