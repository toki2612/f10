import { observer } from 'mobx-react'
import * as React from 'react'
import classnames from 'classnames'
import styles from './Project.module.css'
import { observable, action } from 'mobx'
import bind from 'bind-decorator'
import { routerStore } from '../../../stores/routerStore'
import { IconButton } from '@material-ui/core'
const HeartFilled = require('react-ionicons/lib/IosHeart')
const HeartEmpty = require('react-ionicons/lib/IosHeartOutline')

interface IProjectProps {
  data: any
}

@observer
export class Project extends React.Component<IProjectProps> {
  @observable slideNumber: number = 0

  @bind
  @action
  slideLeft () {
    this.slideNumber += 1
    routerStore.push(`/${this.props.data.idx}/data`)
  }

  @bind
  @action
  slideRight () {
    this.slideNumber -= 1
  }
  

  render () {
    const { data } = this.props
    return (
      <div className={classnames(styles.container, {[styles.slide1]: this.slideNumber === 1})}>
        <div className={styles.mainPage}>
          <div className={styles.video}>
            Video
          </div>
          <div className={styles.data} onClick={this.slideLeft}>
            <div className={styles.textData}>
              <div className={styles.name}>
                @{data.name}
              </div>
              <div className={styles.description}>
                {data.description}
              </div>
              <div className={styles.tags}>
                #blockchain
              </div>
            </div>
            <div className={styles.moreData}>
              <div className={styles.category}></div>
              <IconButton><HeartEmpty color='white'/></IconButton>
            </div>
        </div>
        <div className={styles.params1}>
          <div className={styles.tags}>
            {data.country}
            </div>
            <div className={styles.tags}>
            {data.year}
            </div>
            <div className={styles.tags}>
            {data.team}
            </div>
          </div>
          <div className={styles.params2}>
            <div className={styles.tags}>
            {data.type}
            </div>
            <div className={styles.tags}>
            {data.investment}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
