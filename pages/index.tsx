import React from 'react';
import { Provider } from 'mobx-react'
import { rehydrateStore, initStore } from "../src/models/rehydrateStore";
import { getAlbums } from '../src/utils/fetcher';
import Albums from '../src/components/albums';

interface Props {
  initialState: any,
  isServer: boolean,
}

export default class PostsPage extends React.Component<Props> {
  store: any;

  static async getInitialProps ({ req }) {
    const isServer = !!req;
    const albums = await getAlbums();
    return await initStore(isServer, { albums });
  }

  constructor (props) {
    super(props)
    this.store = rehydrateStore(this.props.initialState);
  }

  render () {
    return (
      <Provider store={this.store}>
        <Albums title='Albums Page' linkTo='/posts' />
      </Provider>
    )
  }
}
