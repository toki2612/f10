import * as React from 'react'

import styles from './Buttons.module.css'
// import classnames from 'classnames'
import { ButtonBase, Typography, IconButton } from '@material-ui/core'

const Back = require('react-ionicons/lib/IosArrowBack')

type IButton = {
  onClick? (e?: React.MouseEvent): void
  text?: string
  alt?: string
  size?: 'small' | 'large'
  url?: string
  color?: string
}

export class TextButton extends React.Component<IButton> {

  render () {
    return (
      <ButtonBase classes={{ root: styles.textButton }} onClick={this.props.onClick} style={{ backgroundColor: this.props.color }}>
        <Typography classes={{ root: styles.textButtonText }}>{this.props.text}</Typography>
      </ButtonBase>
    )
  }
}

export class BackButton extends React.Component<IButton> {

  render () {
    return (
      <IconButton classes={{ root: styles.backButton }} onClick={this.props.onClick} style={{ backgroundColor: this.props.color }}>
        <Back color='#fff' />
      </IconButton>
    )
  }
}
