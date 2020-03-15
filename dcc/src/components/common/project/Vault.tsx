import { observer } from 'mobx-react'
import * as React from 'react'
import classnames from 'classnames'
import styles from './Vault.module.css'
import { InputBase, Button, CircularProgress } from '@material-ui/core';
import bind from 'bind-decorator';
import { routerStore } from '../../../stores/routerStore';
import { TextButton, BackButton } from '../Buttons';
import { RouteComponentProps } from 'react-router';
import { dataStore } from '../../../stores/dataStore';
import { action, observable } from 'mobx';

const dueData: {[key: string]: any} = {
  pwc: {
    logo: require('../../../resources/img/due-0.jpg'),
    name: 'PricewaterhouseCoopers'
  },
  kpmg: {
    logo: require('../../../resources/img/due-1.png'),
    name: 'KPMG'
  }
}

type MatchParams = {
  id: string
}

interface IVaultProps extends RouteComponentProps<MatchParams>{

}

@observer
export class Vault extends React.Component<IVaultProps> {
  @observable success: boolean = false
  @observable loading: boolean = false
  @observable browsing: boolean = false
  timer: any = 0

  @bind
  @action
  setSuccess (value: boolean) {
    this.success = value
  }

  @bind
  @action
  setLoading (value: boolean) {
    this.loading = value
  }

  @bind
  @action
  setBrowsing (value: boolean) {
    this.browsing = value
  }

  @bind
  @action
  upload () {
    if (!this.loading) {
      this.setSuccess(false)
      this.timer = setTimeout(() => {
        this.setBrowsing(true)
      }, 200)
      this.timer = setTimeout(() => {
        this.setLoading(true)
      }, 1500)
      this.timer = setTimeout(() => {
        this.setSuccess(true)
        this.setLoading(false)
      }, 3500)
    }
  }

  render () {

    let uploadArea: JSX.Element | null = null
    if (!this.success) {
      uploadArea = <div className={styles.uploadArea}>
        <div className={styles.uploadIcon}>
        {this.loading && <CircularProgress className={styles.progress} value={20} size={'4.5rem'} thickness={2}/>}
        </div>
        <TextButton text={this.loading ? 'Uploading' : 'Browse files'} onClick={this.upload}/>
      </div>
    }

    const docs: JSX.Element[] = []
    if (this.success) {
      for (const id of ['Financial', 'Legal', 'Other']) {
        docs.push(
          <div className={styles.section}>
            <div className={styles.sectionTitle}>{id}</div>
            <div className={styles.data}>
              <div className={styles.docData} key={Math.random()}>
                <div className={classnames(styles.docType, styles.pdf)}></div>
                <div className={styles.docName}>
                <div className={styles.docTitle}>{id + '_2018-2020.pdf'}</div>
                <div className={styles.docDate}>{'20.02.2020'}</div>
                </div>
              </div>
              <div className={styles.docData} key={Math.random()}>
                <div className={classnames(styles.docType, styles.excel)}></div>
                <div className={styles.docName}>
                <div className={styles.docTitle}>{id + '_2018-2020.excel'}</div>
                <div className={styles.docDate}>{'20.02.2020'}</div>
                </div>
              </div>
              <div className={styles.docData} key={Math.random()}>
                <div className={classnames(styles.docType, styles.pdf)}></div>
                <div className={styles.docName}>
                <div className={styles.docTitle}>{id + '_2018-2020.pdf'}</div>
                <div className={styles.docDate}>{'20.02.2020'}</div>
                </div>
              </div>
              <div className={styles.ownerData}></div>
            </div>
          </div>
  
        )
      }
    }

    return (
      <div className={styles.container}>
        <BackButton onClick={routerStore.goBack}/>
        <div className={styles.title}>Vault</div>
        <div className={styles.introImg}></div>
        {this.browsing && !this.loading && !this.success && <div className={styles.browsing} />}
        {this.success && <div className={styles.docs}>{docs}</div>}
        {uploadArea}
      </div>
    )
  }
}
