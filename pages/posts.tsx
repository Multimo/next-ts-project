import React from 'react';
import { Provider } from 'mobx-react'
import { applySnapshot } from 'mobx-state-tree'
import { rehydrateStore, alStore, initStore } from '../src/models/store'
import Page from '../src/components/Page'

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
    console.log('try to rehydrate', alStore)
    
    this.store = rehydrateStore(this.props.initialState);
  }

  async componentDidMount() {
  }

  render () {
    const { initialState } = this.props;  
    console.log('%s ================= This store', this.store)
    return (
      <Provider store={this.store || initialState}>
        <Page title='Index Page' linkTo='/' />
      </Provider>
    )
  }
}
