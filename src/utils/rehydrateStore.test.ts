
import { rehydrateStore, initStore } from './rehydrateStore';

const mockPosts = {   
  posts: [{ 
    id: 123,
    userId: 123,
    title: 'ttile',
    body: 'body of the post goes here',
    comments: [],
  }] 
};

const mockBuiltStore = {
  "albums": [],
  "posts": [
    {
      "body": "body of the post goes here",
      "comments": [],
      "id": 123,
      "title": "ttile",
      "userId": 123,
    },
  ],
  "toggle": false,
};

describe('rehydrateStore tests' ,() => {
  it('initStore: should return initial state if used on server', () => {
      const expected = initStore(true, mockPosts);
      return expect(expected).toEqual({ initialState: mockBuiltStore })
  });

  it('rehydrateStore: should return store if initial state is falsy', () => {
    return expect(rehydrateStore(false)).toMatchSnapshot();
  });

  it('rehydrateStore: should return populated store if initial state', () => {
    return expect(rehydrateStore(mockPosts)).toEqual(mockBuiltStore);
  });
})
