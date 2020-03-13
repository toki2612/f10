import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './SDG.module.css'
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { routerStore } from '../stores/routerStore';

interface ISDGProps {

}

@observer
export class SDG extends React.Component<ISDGProps> {

  render () {
    const icons: JSX.Element[] = []
    for (let i = 1; i < 18; i++) {
      const n = i < 10 ? '0' + i : i
      icons.push(
        <div className={styles.iconBox}>
          <img src={require(`../resources/sdg/E-WEB-Goal-${n}.png`)} alt={`sdg-${i}`}/>
        </div>
      )
    }

    return (
      <div className={styles.container}>
        {icons}
      </div>
    )
  }
}
