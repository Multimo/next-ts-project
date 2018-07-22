import React from 'react'
import Link from 'next/link'
import { observer, inject } from 'mobx-react'

interface Props {
  store?: {
    albums?: any[];
  };
  title: string;
  linkTo: string;
}

class Albums extends React.Component<Props> {

  render () {
    const { store } = this.props;

    return (
      <div>
        <h1>{this.props.title}</h1>
        <nav>
          <Link href={this.props.linkTo}><a>Navigate</a></Link>
        </nav>
        <h1 onClick={store.toggler}>{store.toggle ? 'yay' : 'naha'}</h1>
        <hr/>
        <ul>
          {store && store.albums && store.albums.map(album => 
            <li key={album.id} >{album.title}</li>
          )}
         </ul> 
      </div>
    )
  }
}

export default inject('store')(observer(Albums));
