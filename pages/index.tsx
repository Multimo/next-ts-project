import React from 'react';
import { Provider } from 'mobx-react'
import { applySnapshot } from 'mobx-state-tree'
import { rehydrateStore, alStore, initStore } from '../src/models/store'
import Albums from '../src/components/albums'

interface Props {
  initialState: any,
  isServer: boolean,
}

export default class PostsPage extends React.Component<Props> {
  store: any;

  static async getInitialProps ({ req }) {
    return await initStore(); 
  }

  constructor (props) {
    super(props)
    this.props.initialState && applySnapshot(alStore, this.props.initialState);
    this.store = alStore; 
  }

  render () {
    const { initialState } = this.props;  
    console.log('%s ================= This store', this.store)
    return (
      <Provider store={this.store || initialState}>
        <Albums title='Index Page' linkTo='/posts' />
      </Provider>
    )
  }
}
