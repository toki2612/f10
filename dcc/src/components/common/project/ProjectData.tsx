import { observer } from 'mobx-react'
import * as React from 'react'
import classnames from 'classnames'
import styles from './ProjectData.module.css'
import { TextButton } from '../Buttons'
import { observable, action } from 'mobx'
import bind from 'bind-decorator'
import { routerStore } from '../../../stores/routerStore'
import { RouteComponentProps } from 'react-router-dom'

type MatchParams = {
  uid: string
}

interface IProjectDataProps extends RouteComponentProps<MatchParams> {
  data?: any
}

@observer
export class ProjectData extends React.Component<IProjectDataProps> {
  @observable ndaSigned: boolean = false

  @bind
  @action
  signNda () {
    this.ndaSigned = true
  }
  
  render () {

    let NDABox: JSX.Element | null = null
    if (!this.ndaSigned) {
      NDABox = <div className={styles.ndaBox}>
      <div className={styles.ndaMessage}>Nda message please sign etc.</div>
      <TextButton text='Sign NDA' onClick={this.signNda}/>
    </div>
    }

    return (
      <div className={classnames(styles.container, this.ndaSigned ? undefined : styles.locked)}>
        <div className={styles.mainPage}>
          <div className={styles.logo}>
            Logo
          </div>
          <div className={styles.data}>
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
          <div className={styles.params3}>
            <div className={styles.tags}>
              <h3>Problem</h3>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            </div>
            <div className={styles.tags}>
            <h3>Solution</h3>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            </div>
          </div>
        </div>
        {NDABox}
      </div>
    )
  }
}
