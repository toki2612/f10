import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Navigation.module.css'
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
// import 'react-ionicons/lib/profi

const Home = require('react-ionicons/lib/IosHomeOutline')
const Search = require('react-ionicons/lib/IosSearchOutline')
const Chats = require('react-ionicons/lib/IosChatbubblesOutline')
const Calendar = require('react-ionicons/lib/IosCalendarOutline')
const Profile = require('react-ionicons/lib/IosPersonOutline')

type MatchParams = {
  uid: string
}

interface INavigationProps {

}

@observer
export class Navigation extends React.Component<INavigationProps> {

  render () {


    return (
      <div className={styles.container}>
          <IconButton component={Link} to={'/'}><Home color="white"/></IconButton>
          <IconButton component={Link} to={'/discover'}><Search color="white"/></IconButton>
          <IconButton component={Link} to={'/events'}><Calendar color="white"/></IconButton>
          <IconButton component={Link} to={'/chats'}><Chats color="white"/></IconButton>
          <IconButton component={Link} to={'/profile'}><Profile color="white"/></IconButton>
      </div>
    )
  }
}
