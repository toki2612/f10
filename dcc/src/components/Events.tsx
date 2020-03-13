import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Events.module.css'
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { routerStore } from '../stores/routerStore';

interface IEventsProps {

}

const eventsData: {[key: string]: any} = {
  zermatt: {
    date: '21st March, 2020'
  },
  monaco: {
    date: 'Q3 2020'
  },
  lugano: {
    date: 'Q4 2020'
  }
}

@observer
export class Events extends React.Component<IEventsProps> {

  render () {
    const events: JSX.Element[] = []
    for (const id in eventsData) {
      events.push(
        <Link className={styles.eventBox} to={id} style={{ backgroundImage: `url(${require(`../resources/img/${id}.jpg`)})` }}>
          <div className={styles.title}>
            <h3>{eventsData[id].date}</h3>
            <h3>{id}</h3>
          </div>
        </Link>
      )
    }

    return (
      <div className={styles.container}>
        {events}
      </div>
    )
  }
}
