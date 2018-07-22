import React from 'react';
import { Provider } from 'mobx-react';
import { getPosts } from '../src/utils/fetcher';
import { rehydrateStore, initStore } from "../src/models/rehydrateStore";
import Posts from '../src/components/posts'

interface Props {
  initialState: any,
  isServer: boolean,
}

export default class PostsPage extends React.Component<Props> {
  store: any;

  static async getInitialProps ({ req }) {
    const isServer = !!req;
    const posts = await getPosts();
    return await initStore(isServer, { posts });
  }

  constructor (props) {
    super(props)
    this.store = rehydrateStore(this.props.initialState);
  }

  render () {
    return (
      <Provider store={this.store}>
        <Posts title='Posts' linkTo='/' />
      </Provider>
    )
  }
}
