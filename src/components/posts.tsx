import React from 'react';
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
    const allUserIds = store.getAllPostUserIds();
    const posts = store.getPostByUserId(parseInt(allUserIds[0]));
    debugger;
    console.log(posts)
    return (
      <section className="mw7 center avenir">
        <p>filtered by userid:{allUserIds[0]}</p>
        {posts.map(post => 
          <PostView key={post.id} post={post} />
        )}
      </section>
    )
  }
}

export default inject('store')(observer(Posts));
