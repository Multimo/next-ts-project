import React from 'react';
import Link from 'next/link';
import { observer, inject } from 'mobx-react';
import { PostView } from './postView';

interface Props {
  store?: {
    posts?: any[];
  };
  title: string;
  linkTo: string;
}

class Posts extends React.Component<Props> {

  render () {
    const { store } = this.props;

    return (
      <div>
        <h1>{this.props.title}</h1>
        <nav>
          <Link href={this.props.linkTo}><a>Navigate</a></Link>
        </nav>
        <h1 onClick={store.toggler}>{store.toggle ? 'yay' : 'naha'}</h1>
           <h2 className="baskerville fw1 ph3 ph0-l">Posts</h2>
          <hr/>
        <section className="mw7 center avenir">
          {store && store.posts && store.posts.slice(0,5).map(post => 
            <PostView post={post} />
          )}
      </section>
        
      </div>
    )
  }
}

export default inject('store')(observer(Posts));
