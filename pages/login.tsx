import React from 'react';
import { Provider } from 'mobx-react';
import Albums from '../src/components/albums';


export default class LoginPage extends React.Component {
  store: any;

  // static async getInitialProps ({ req }) {
  //   const isServer = !!req;
  //   const albums = await getAlbums();
  //   return await initStore(isServer, { albums });
  // }

  // constructor (props) {
  //   super(props)
  //   this.store = rehydrateStore(this.props.initialState);
  // }

  render () {
    return (
      <div>
        
      </div>
    )
  }
}
