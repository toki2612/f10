import { observable, action, computed, runInAction } from 'mobx'
import fire from '../firebase'

class DataStore {
  @observable events: any = null
  @observable projects: any = null

  constructor () {
    fire.ref('events').on('value', (snapshot) => {
      runInAction(() => {
        this.events = snapshot.val()
      })
    })
    fire.ref('projects').on('value', (snapshot) => {
      runInAction(() => {
        this.projects = snapshot.val()
      })
    })
  }
}

export const dataStore = new DataStore()

// @ts-ignore
window.dataStore = dataStore