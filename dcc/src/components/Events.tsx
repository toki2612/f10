import { observer } from 'mobx-react'
import * as React from 'react'
import classnames from 'classnames'
import styles from './Events.module.css'
import { Link } from 'react-router-dom';
import { dataStore } from '../stores/dataStore';

interface IEventProps {
  data: any
  inProfile?: boolean
}

@observer
export class Event extends React.Component<IEventProps> {

  render () {
    const { data } = this.props
    // console.log(data)
    return (
      <Link className={classnames(styles.eventBox, this.props.inProfile ? styles.inProfile : undefined)} to={data.id} style={{ backgroundImage: `url(${require(`../resources/img/${data.id}.jpg`)})` }} key={data.id}>
        <div className={styles.title}>
          <h3>{data.date}</h3>
          <h3>{data.id}</h3>
        </div>
      </Link>
    )
  }
}

interface IEventsProps {

}

@observer
export class Events extends React.Component<IEventsProps> {

  render () {
    const events: JSX.Element[] = []
    if (dataStore.events) {
      for (const id of Object.keys(dataStore.events).reverse()) {
        events.push(
          <Event key={id} data={{...dataStore.events[id], id}}/>
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
