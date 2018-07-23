import React, { Fragment } from 'react';
import { Provider } from 'mobx-react'
import { rehydrateStore, initStore } from "../src/utils/rehydrateStore";
import { getAlbums } from '../src/utils/fetcher';
import Albums from '../src/components/albums';
import { Header } from '../src/components/header';

interface Props {
  initialState: any,
  isServer: boolean,
}

export default class AlbumsPage extends React.Component<Props> {
  store: any;

  static async getInitialProps ({ req }) {
    const isServer = !!req;
    const albums = await getAlbums();
    return await initStore(isServer, { albums });
  }

  constructor (props: Readonly<Props>) {
    super(props)
    this.store = rehydrateStore(this.props.initialState);
  }

  render () {
    return (
      <Provider store={this.store}>
        <Fragment>
          <Header title="Albums" linkPath="/posts" linkText="Posts" />
          <Albums />
        </Fragment>
      </Provider>
    )
  }
}
