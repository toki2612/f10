import { observer } from 'mobx-react'
import * as React from 'react'
import classnames from 'classnames'
import styles from './Project.module.css'
import { observable, action } from 'mobx'
import bind from 'bind-decorator'
import { routerStore } from '../../../stores/routerStore'
import { IconButton } from '@material-ui/core'
import ReactCountryFlag from "react-country-flag"
import { dataStore } from '../../../stores/dataStore'
const HeartFilled = require('react-ionicons/lib/IosHeart')
const HeartEmpty = require('react-ionicons/lib/IosHeartOutline')
const group = require('../../../resources/img/group.svg')

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
    routerStore.push(`/${this.props.data.id}/data`)
  }

  @bind
  @action
  slideRight () {
    this.slideNumber -= 1
  }
  
  @bind
  @action
  toggleLike (e: any) {
    e.preventDefault()
    if (!('liked' in dataStore.projects[this.props.data.id])) {
      dataStore.projects[this.props.data.id].liked = true
    } else {
      dataStore.projects[this.props.data.id].liked = !dataStore.projects[this.props.data.id].liked
    }
  }

  render () {
    const { data } = this.props
    return (
      <div className={classnames(styles.container, {[styles.slide1]: this.slideNumber === 1})}>
        <div className={styles.mainPage}>
          <div className={styles.video} style={{backgroundImage: `url(${require(`../../../resources/img/${data.id}.gif`)})`}} onClick={this.slideLeft}/>
          <div className={styles.data}>
            <div className={styles.textData} onClick={this.slideLeft}>
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
              <div className={styles.category}>
                <img src={require(`../../../resources/sdg/E-WEB-Goal-${data.sdg < 10 ? '0' + data.sdg : data.sdg}.png`)} alt={`sdg-${data.sdg}`}/>
              </div>
              <IconButton onClick={this.toggleLike}>
                {data.liked ? <HeartFilled color='white'/> : <HeartEmpty color='white'/>}
              </IconButton>
            </div>
        </div>
        <div className={styles.params1}>
          <div className={styles.tags}>
          {data.country}
            <ReactCountryFlag
              countryCode={'CH'}
              style={{
                  fontSize: '2em',
                  lineHeight: '2em',
              }}
            />
            </div>
            <div className={styles.tags}>
            {data.year}
            </div>
            <div className={styles.tags}>
            <span>
              <img src={group} alt='group-icon'/>
              {data && data.team}
             </span>
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
