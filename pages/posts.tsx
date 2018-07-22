import React from 'react';
import { Provider } from 'mobx-react';
import { rehydrateStore, initStore } from "../src/models/rehydrateStore";
import Page from '../src/components/Page'

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
        <Page title='Index Page' linkTo='/' />
      </Provider>
    )
  }
}
