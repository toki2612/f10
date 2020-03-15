import { observer } from 'mobx-react'
import * as React from 'react'
import classnames from 'classnames'
import styles from './Events.module.css'
import { Link, RouteComponentProps } from 'react-router-dom';
import { dataStore } from '../stores/dataStore';
import { routerStore } from '../stores/routerStore';
import { BackButton, TextButton } from './common/Buttons';
import { computed } from 'mobx';

type MatchParams = {
  id: string
}

interface IEventPageProps extends RouteComponentProps<MatchParams> {
}

@observer
export class EventPage extends React.Component<IEventPageProps> {

  @computed
  get isPrivate () {
    return this.props.match.params.id !== 'zermatt'
  }

  render () {
    console.log(this.props)

    let privateBox: JSX.Element | null = null
    if (this.isPrivate) {
      privateBox = <div className={styles.privateBox}>
        <div>This is a private event</div>
        <TextButton text='Request invitation'/>
      </div>
    }
   
    const data = dataStore.events ? dataStore.events[this.props.match.params.id] : null

    let event: JSX.Element | null = null
    event = <>
      <div className={styles.event}>
      <div className={styles.data}>
        <div className={styles.text}><strong>Location:</strong></div>
          <div className={styles.text}>{data && data.location}</div>
      </div>
      <div className={styles.data}>
        <div className={styles.text}><strong>Time:</strong></div>
        <div className={styles.text}>{data && data.time + '_' + data.time}</div>
      </div>
      </div>
      <div className={styles.opportunities}>
        Following investments opportunities will be presented:<br />
        <strong>@Medicalchain</strong><br />
        <strong>@Walo - Project Power Plant</strong><br />
        <strong>@NextUnicorn</strong><br />
        <strong>@Walo - Projet Highway Davos-Sargans</strong><br />
      </div>
      {!this.isPrivate && <TextButton text='Invite a friend'/>}
      </>

    return (
      <div className={styles.eventPageBox} style={{ backgroundImage: `url(${require(`../resources/img/${this.props.match.params.id}.jpg`)})` }}>
        <BackButton onClick={routerStore.goBack}/>
        {!this.isPrivate && <div className={styles.darkOverlay}/>}
        {event}
        {this.isPrivate && <div className={styles.blurred}/>}
        {privateBox}
      </div>
    )
  }
}

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
      <Link className={classnames(styles.eventBox, this.props.inProfile ? styles.inProfile : undefined)} to={'/events/' + data.id} style={{ backgroundImage: `url(${require(`../resources/img/${data.id}.jpg`)})` }} key={data.id}>
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
