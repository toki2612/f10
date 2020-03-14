import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Profile.module.css'
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { routerStore } from '../stores/routerStore';
import { Paper } from '@material-ui/core';
import { PieChart } from './PieChart';
import { dataStore } from '../stores/dataStore';
import { Event } from '../components/Events'

interface IProfileProps {

}

@observer
export class Profile extends React.Component<IProfileProps> {

  render () {

    const avatar: JSX.Element = <div className={styles.avatar}>
        <div className={styles.photo}>
          <img src={require('../resources/img/team-3.png')} alt='avatar'/>
        </div>
        <div className={styles.name}>Hans Zuckermann</div>
    </div>

    const favorites: JSX.Element = <div className={styles.favoritesBox}>
      Favorites
      <div className={styles.favorites}>
        <Paper elevation={1} className={styles.favorite}></Paper>
        <Paper elevation={1} className={styles.favorite}></Paper>
      </div>
    </div>


    const favEvents: JSX.Element[] = []
    if (dataStore.events && Object.keys(dataStore.events).length >= 2) {
      for (let i = 0; i < 2; i++) {
        const id = Object.keys(dataStore.events)[i]
        console.log({...dataStore.events[id], id})
        favEvents.push(
          <Paper key={i} elevation={1} className={styles.favorite}>
            <Event data={{...dataStore.events[id], id}} inProfile/>
          </Paper>
        )
      }
    }
    const events: JSX.Element = <div className={styles.favoritesBox}>
      Events
      <div className={styles.favorites}>
        {favEvents}
      </div>
      </div>

    const portfolio: JSX.Element = <div className={styles.favoritesBox}>
    SDG portfolio
      <div className={styles.portfolio}>
        <PieChart />
      </div>
    </div>

    return (
      <div className={styles.container}>
        {avatar}
        {favorites}
        {events}
        {portfolio}
        {/* <div className={styles.portfolio}></div> */}
      </div>
    )
  }
}
