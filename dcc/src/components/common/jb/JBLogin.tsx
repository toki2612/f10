import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './JBLogin.module.css'
import { InputBase, Button } from '@material-ui/core';

interface IJBLoginProps {

}

@observer
export class JBLogin extends React.Component<IJBLoginProps> {

  render () {

    const logo: JSX.Element = <div className={styles.logo}>
    </div>

    return (
      <div className={styles.container}>
        {logo}
        <div className={styles.inputs}>
          <InputBase
            id="outlined-basic"
            placeholder="User ID"
            classes={{ root: styles.inputBox }}
          />
          <InputBase 
            id="outlined-basic"
            placeholder="Password"
            classes={{ root: styles.inputBox }}
          />
          <Button className={styles.button}>
            Login
          </Button>
        </div>
      </div>
    )
  }
}
