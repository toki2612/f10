import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Navigation.module.css'
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import Search from '@material-ui/icons/Search';
import Calendar from '@material-ui/icons/CalendarToday';
import { Link } from 'react-router-dom';

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
          <IconButton color="inherit" component={Link} to={'/'}><Home /></IconButton>
          <IconButton color="inherit" component={Link} to={'/discover'}><Search /></IconButton>
          <IconButton color="inherit" component={Link} to={'/events'}><Calendar/></IconButton>
          <IconButton color="inherit" component={Link} to={'/chats'}></IconButton>
          <IconButton color="inherit" component={Link} to={'/profile'}></IconButton>
      </div>
    )
  }
}
