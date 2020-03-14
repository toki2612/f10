import { observable, action, computed } from 'mobx'
import { breakpoints } from './breakpointsStore'

class Window {
  @observable width = window.innerWidth
  @observable height = window.innerHeight

  constructor () {
    window.addEventListener(
      'resize',
      () => {
        this.updateViewportHeight()
        this.updateViewportWidth()
      },
      true
    )
  }

  @action
  updateViewportHeight = () => {
    if (window.innerHeight !== this.height) {
      this.height = window.innerHeight
    }
  }

  @action
  updateViewportWidth = () => {
    if (window.innerWidth !== this.width) {
      this.width = window.innerWidth
    }
  }

  @computed
  get isLandscape () {
    return this.height < this.width
  }
}

export const windowStore = new Window()
