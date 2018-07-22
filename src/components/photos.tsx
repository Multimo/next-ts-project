import React from 'react';
import Link from 'next/link'
import { observer, inject } from 'mobx-react';

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
        <div className="fl w-100">
        {album.photos.map(image => (
           <div className="fl w-25">
             <a className="db aspect-ratio aspect-ratio--1x1 dim">
              <img src={image.url} />
              <span role="img" className="bg-center cover aspect-ratio--object"></span>
             </a>
           </div>
        ))}
        </div>
      </div>
    )
  }
}

export default inject('store')(observer(Photos));
