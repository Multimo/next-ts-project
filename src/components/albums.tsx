import React from 'react';
import { observer, inject } from 'mobx-react';
import { AlbumView } from './albumsView';

interface Props {
  store: {
    albums: any[];
    sortAlbumsAlphabetically(): any[];
  };
}

class Albums extends React.Component<Props> {
  state = { 
    showAll: false,
    sortAlpha: false,
  };
  
  handleShowAll = () => {
    this.setState({ showAll: true });
  }

  handleSortAlpha = () => {
    this.setState({ sortAlpha: !this.state.sortAlpha });
  }

  render () {
    const { store } = this.props;
    const { showAll, sortAlpha } = this.state;
    const sortedAlbums: any[] = sortAlpha ? store.sortAlbumsAlphabetically() : store.albums;
    const albums = showAll ? sortedAlbums : sortedAlbums.slice(0, 8);
    
    return (
      <div>
          <button 
            className="mr2 ms2 f6 link dim ph3 pv2 mb2 dib white bg-dark-blue bn mt2" 
            onClick={() => this.handleSortAlpha()}
          >
            Sort alphabetically
          </button>
        <section className="flex flex-wrap w-100 pa2-ns">
          {albums.map((album: any) => <AlbumView key={album.id} album={album} /> )}
        </section>

        {!showAll && (
          <button 
            className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue bn mt2" 
            onClick={() => this.handleShowAll()}
          >
            Show all
          </button>
        )}
      </div>
    )
  }
}

export default inject('store')(observer(Albums));
