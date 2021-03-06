import React, { Fragment } from 'react';
import { Provider } from 'mobx-react';
import { getPosts } from '../src/utils/fetcher';
import { rehydrateStore, initStore } from "../src/utils/rehydrateStore";
import Posts from '../src/components/posts'
import { Header } from '../src/components/header';

interface Props {
  initialState: any,
  isServer: boolean,
}

export default class PostsPage extends React.Component<Props> {
  store: any;

  static async getInitialProps ({ req }) {
    const isServer = !!req;
    const posts = await getPosts();
    
    // hack to normalise server responses.
    // sometime the service will return posts with just an id
    // which fails MST validation and crashes the page..
    return await initStore(isServer, { 
      posts: posts.filter((post: any) => !!post.userId), 
    });
  }

  constructor (props: Readonly<Props>) {
    super(props)
    this.store = rehydrateStore(this.props.initialState);
  }

  render () {
    return (
      <Provider store={this.store}>
        <Fragment>
          <Header title="Posts" linkPath="/" linkText="Albums" />
          <Posts />
        </Fragment>
      </Provider>
    )
  }
}
