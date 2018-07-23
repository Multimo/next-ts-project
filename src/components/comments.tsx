import React from 'react';
import { observer, inject } from 'mobx-react';
import { PostView } from './postView';

interface Props {
  postId: string,
  store?: any,
}

class Comments extends React.Component<Props> {

  render () {
    const { store, postId } = this.props;
    const post = store.getPost(parseInt(postId));
    return (
      <div>
        <div className="center mw7">
          <PostView post={post} />
        </div>
        <ul className="list pl0 mt0 measure center">
          {post.comments.map(comment => (
            <li
              className="flex items-center lh-copy pa3 ph0-l bb b--black-10"
              key={comment.id}
            >
                <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
                <p className="pl3 flex-auto">
                  {comment.body}
                </p>
                <div className="pl3 flex-auto">
                  <span className="f6 db black-70">{comment.email}</span>
                </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default inject('store')(observer(Comments));
