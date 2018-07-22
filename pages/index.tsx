import React from 'react';
import { Provider } from 'mobx-react'
import { applySnapshot } from 'mobx-state-tree'
import { alStore } from '../src/models/store'
import { rehydrateStore, initStore } from "../src/models/rehydrateStore";
import Albums from '../src/components/albums'

interface Props {
  initialState: any,
  isServer: boolean,
}

export default class PostsPage extends React.Component<Props> {
  store: any;

  static async getInitialProps ({ req }) {
    return await initStore(!!req);
  }

  constructor (props) {
    super(props)
    this.store = rehydrateStore(this.props.initialState);
  }

  render () {
    return (
      <Provider store={this.store}>
        <Albums title='Index Page' linkTo='/posts' />
      </Provider>
    )
  }
}
