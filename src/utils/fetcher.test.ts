import { fetcher } from "./fetcher";
jest.mock('../../__mocks__/fetch');

describe('fetchter tests', () => {
  it('should return a function', () => {
    return expect(fetcher('albums')).resolves.toMatchSnapshot();
  });
});