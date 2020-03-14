import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Events.module.css'
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { routerStore } from '../stores/routerStore';
import fire from '../firebase';
import { dataStore } from '../stores/dataStore';

interface IEventsProps {

}

@observer
export class Events extends React.Component<IEventsProps> {

  render () {
    const events: JSX.Element[] = []
    if (dataStore.events) {
      for (const id of Object.keys(dataStore.events).reverse()) {
        events.push(
          <Link className={styles.eventBox} to={id} style={{ backgroundImage: `url(${require(`../resources/img/${id}.jpg`)})` }} key={id}>
            <div className={styles.title}>
              <h3>{dataStore.events[id].date}</h3>
              <h3>{id}</h3>
            </div>
          </Link>
        )
      }
    }

    return (
      <div className={styles.container}>
        {events}
      </div>
    )
  }
}
