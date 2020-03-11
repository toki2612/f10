import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Project.module.css'

interface IProjectProps {
  data?: any
}

@observer
export class Project extends React.Component<IProjectProps> {

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.video}>
          Video
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
      </div>
    )
  }
}
