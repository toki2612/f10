import { observable, action, computed, runInAction } from 'mobx'
import fire from '../firebase'

class DataStore {
  @observable events: any = null

  constructor () {
    fire.ref('events').on('value', (snapshot) => {
      runInAction(() => {
        this.events = snapshot.val()
      })
    })
  }
}

export const dataStore = new DataStore()

// @ts-ignore
window.dataStore = dataStore