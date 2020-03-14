import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './NDA.module.css'
import { InputBase, Button } from '@material-ui/core';
import bind from 'bind-decorator';
import { routerStore } from '../../../stores/routerStore';
import { TextButton } from '../Buttons';

interface INDAProps {

}

@observer
export class NDA extends React.Component<INDAProps> {

  @bind
  acceptNDA () {
    routerStore.push('/0/data')
  }

  render () {

    const logo: JSX.Element = <div className={styles.logo}>
    </div>

    return (
      <div className={styles.container}>
        <div className={styles.title}>NDA</div>
        {logo}
        <div className={styles.text}>
         Lorem ipsum
        </div>
        <div className={styles.button}>
            <TextButton text='Accept' onClick={this.acceptNDA}/>
         </div>
      </div>
    )
  }
}
