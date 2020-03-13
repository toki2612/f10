import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Navigation.module.css'
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { routerStore } from '../stores/routerStore';
// import 'react-ionicons/lib/profi

const Home = require('react-ionicons/lib/IosHomeOutline')
const Search = require('react-ionicons/lib/IosSearchOutline')
const Chats = require('react-ionicons/lib/IosChatbubblesOutline')
const Calendar = require('react-ionicons/lib/IosCalendarOutline')
const Profile = require('react-ionicons/lib/IosPersonOutline')

interface INavigationProps {

}

@observer
export class Navigation extends React.Component<INavigationProps> {

  getColor (path: string) {
    if (routerStore.location.pathname === path) {
      return '#C9AE58'
    }
    return '#fff'
  }

  render () {
    return (
      <div className={styles.container}>
        <IconButton component={Link} to={'/'}><Home color={this.getColor('/')}/></IconButton>
        <IconButton component={Link} to={'/discover'}><Search color={this.getColor('/discover')}/></IconButton>
        <IconButton component={Link} to={'/chats'}><Chats color={this.getColor('/chats')}/></IconButton>
        <IconButton component={Link} to={'/events'}><Calendar color={this.getColor('/events')}/></IconButton>
        <IconButton component={Link} to={'/profile'}><Profile color={this.getColor('/profile')}/></IconButton>
      </div>
    )
  }
}
