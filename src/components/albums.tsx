import React from 'react';
import { observer, inject } from 'mobx-react';
import { AlbumView } from './albumsView';

interface Props {
  store?: {
    albums?: any[];
  };
}

class Albums extends React.Component<Props> {

  render () {
    const { store } = this.props;

    return (
      <section className="cf w-100 pa2-ns">
        {store && store.albums && store.albums.slice(0, 8).map(album => 
          <AlbumView key={album.id} album={album} />
        )}
      </section>
    )
  }
}

export default inject('store')(observer(Albums));
