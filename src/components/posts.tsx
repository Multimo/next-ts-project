import React from 'react';
import Link from 'next/link';
import { observer, inject } from 'mobx-react';
import { PostView } from './postView';

interface Props {
  store: {
    posts: any[];
  };
}

class Posts extends React.Component<Props> {
  state = { showAll: false };

  handleShowAll = () => {
    this.setState({ showAll: true });
  }

  render () {
    const { store } = this.props;
    const { showAll } = this.props;
    
    const posts = showAll ? store.posts : store.posts.slice(0, 5);
    console.log(posts)
    return (
      <div>
        <section className="mw7 center avenir">
          {posts.map(post => <PostView key={post.id} post={post} />)}
        </section>
        <button onClick={() => this.handleShowAll()}>Show All</button>
      </div>
    )
  }
}

export default inject('store')(observer(Posts));
