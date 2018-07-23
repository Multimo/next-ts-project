import React from 'react';
import { observer, inject } from 'mobx-react';
import { PostView } from './postView';

interface Post {
  id: string,
  userId: string,
  title: string,
  body: string,
  comments: any[],
}

interface Props {
  store: {
    posts: Post[];
    getAllPostUserIds(): number[],
    getPostByUserId(id: number): Post[],
  };
}

class Posts extends React.Component<Props> {
  state = { 
    showAll: false,
    selectedFilter: '1',
  };;

  handleShowAll = () => {
    this.setState({ showAll: true });
  }

  handleFilterChange(event: any) {
    this.setState({ selectedFilter: event.target.value });
  }

  render () {
    const { store } = this.props;
    const { showAll, selectedFilter } = this.state;
    const allUserIds = store.getAllPostUserIds();
    const posts = showAll ? store.posts : store.getPostByUserId(parseInt(selectedFilter));

    return (
      <section className="mw7 center avenir">
        <label htmlFor="posts-filter">Viewing All Posts By </label>
        <select 
          id="posts-filter"
          className="mb2"
          onChange={e => this.handleFilterChange(e)}
        >
          {allUserIds.map(id =>
            <option value={id} key={id}>
              User: {id}
            </option>
          )}
        </select>

        {posts.map((post: Post) => 
          <PostView key={post.id} post={post} />
        )}

        {!showAll && 
          <button 
            className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue bn mt2"
            onClick={() => this.handleShowAll()}
          >
            Show all
          </button>
        }
      </section>
    )
  }
}

export default inject('store')(observer(Posts));
