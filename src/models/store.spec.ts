import { albumStore } from './store';


describe('Store unit tests', () => {
  it('should match snapshot when created', () => {
    albumStore.create();
    return expect(albumStore).toMatchSnapshot();
  })
})