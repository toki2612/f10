import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './DueDiligence.module.css'
import { InputBase, Button } from '@material-ui/core';
import bind from 'bind-decorator';
import { routerStore } from '../../../stores/routerStore';
import { TextButton, BackButton } from '../Buttons';
import { RouteComponentProps } from 'react-router';
import { dataStore } from '../../../stores/dataStore';
import { action } from 'mobx';

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

interface IDueDiligenceProps extends RouteComponentProps<MatchParams>{

}

@observer
export class DueDiligence extends React.Component<IDueDiligenceProps> {

  render () {

    const providers: JSX.Element[] = []
    for (const id in dueData) {
      providers.push(
        <div className={styles.provider}>
          <div className={styles.data}>
            <div className={styles.logo}>
              <img alt='' src={dueData[id].logo}/>
            </div>
            <div className={styles.name}>{dueData[id].name}</div>
          </div>
          <TextButton text='Request offer' />
        </div>

      )
    }

    return (
      <div className={styles.container}>
        <BackButton onClick={routerStore.goBack}/>
        <div className={styles.title}>Due Diligence</div>
        {providers}
      </div>
    )
  }
}
