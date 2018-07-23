import React, { Fragment } from 'react';
import { Provider } from 'mobx-react';
import { rehydrateStore, initStore } from "../src/models/rehydrateStore";
import Comments from '../src/components/comments'
import { getPostComments, getPostById } from '../src/utils/fetcher';
import { Goback } from '../src/components/goback';

interface Props {
  initialState: any,
  isServer: boolean,
  postId: string,
}

export default class PostPage extends React.Component<Props> {
  store: any;

  static async getInitialProps ({ req, query }) {
    const postId = query.id;
    const post = await getPostById(postId);
    const comments = await getPostComments(postId);
    post.comments = comments;
    const init = await initStore(!!req, { posts: [post] });
    return {
      initialState: init.initialState,
      postId,
    }
  }

  constructor (props) {
    super(props)
    this.store = rehydrateStore(this.props.initialState);
  }

  render () {
    const { postId } = this.props;
    return (
      <Provider store={this.store}>
        <Fragment>
          <Goback text="Go back to all Posts" linkPath="/posts" />
          <Comments postId={postId} />
        </Fragment>
      </Provider>
    )
  }
}
