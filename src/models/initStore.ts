import { albumStore } from './store'

let rootStore = null

function initRootStore(isServer = false, langSetup) {
  if (rootStore === null) {
    rootStore = albumStore.create();
  }

  /*
  onAction(rootStore, data => {
    console.log('onSnapshot: ', data)
  })
  */

  return rootStore
}

export default initRootStore