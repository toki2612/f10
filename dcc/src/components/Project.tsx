import { observer } from 'mobx-react'
import * as React from 'react'
import classnames from 'classnames'
import styles from './Project.module.css'
import { TextButton } from './common/Buttons'
import { observable, action } from 'mobx'
import bind from 'bind-decorator'
import { routerStore } from '../stores/routerStore'

interface IProjectProps {
  data?: any
}

@observer
export class Project extends React.Component<IProjectProps> {
  @observable slideNumber: number = 0

  @bind
  @action
  slideLeft () {
    this.slideNumber += 1
    routerStore.push('/1/data')
  }

  @bind
  @action
  slideRight () {
    this.slideNumber -= 1
  }
  

  render () {
    return (
      <div className={classnames(styles.container, {[styles.slide1]: this.slideNumber === 1})}>
        <div className={styles.mainPage}>
          <div className={styles.video}>
            Video
          </div>
          <div className={styles.data} onClick={this.slideLeft}>
            <div className={styles.textData}>
              <div className={styles.name}>
                @Name
              </div>
              <div className={styles.description}>
                Description
              </div>
              <div className={styles.tags}>
                #blockchain
              </div>
            </div>
          <div className={styles.moreData}>

          </div>
        </div>
        <div className={styles.params1}>
          <div className={styles.tags}>
                Country
              </div>
              <div className={styles.tags}>
                Years
              </div>
              <div className={styles.tags}>
                Employees
              </div>
          </div>
          <div className={styles.params2}>
            <div className={styles.tags}>
              Equity type
            </div>
            <div className={styles.tags}>
              Capital $$$
            </div>
          </div>
        </div>

        {/* <div className={styles.details}>
          <TextButton text='Term sheet'/>
          <TextButton text='Term sheet'/>
        </div> */}
      </div>
    )
  }
}
