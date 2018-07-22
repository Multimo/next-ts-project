import React from 'react';
import Link from 'next/link'
import { observer, inject } from 'mobx-react';
import { PostView } from './postView';

interface Props {
  albumId: string,
  store?: any,
}

class Photos extends React.Component<Props> {

  render () {
    const { store, albumId } = this.props;
    const album = store.getAlbum(parseInt(albumId));
    return (
      <div>
         <Link href="/"><a>go back</a></Link>
        <h1 onClick={store.toggler}>{store.toggle ? 'yay' : 'naha'}</h1>
        <ul className="list pl0 mt0 measure center">
        {album.photos.map(photo => (
          <li
            className="flex items-center lh-copy pa3 ph0-l bb b--black-10"
            key={photo.id}
          >
            {JSON.stringify(photo)}
          </li>
        ))}
        </ul>
      </div>
    )
  }
}

export default inject('store')(observer(Photos));
