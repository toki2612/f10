import { observer } from 'mobx-react'
import * as React from 'react'
import classnames from 'classnames'
import styles from './Chat.module.css'
const chatSrc = require('../resources/img/chat.png')

interface IChatProps {
  data: any
  inProfile?: boolean
}

@observer
export class Chat extends React.Component<IChatProps> {

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.name}>@Walo</div>
        <div className={styles.chat}>
          <img src={chatSrc} alt='chat'/>
        </div>
      </div>
    )
  }
}