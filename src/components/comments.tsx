import React from 'react';
import Link from 'next/link'
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
        <Link href="/posts"><a>go back</a></Link>
        <h1 onClick={store.toggler}>{store.toggle ? 'yay' : 'naha'}</h1>
        <PostView post={post} />
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
