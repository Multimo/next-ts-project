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
    )
  }
}

export default inject('store')(observer(Photos));
