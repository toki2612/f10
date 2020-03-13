import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Discover.module.css'
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { routerStore } from '../stores/routerStore';
import { Slider, InputBase } from '@material-ui/core';
import { observable, action } from 'mobx';
import bind from 'bind-decorator';
const Plus = require('react-ionicons/lib/IosAdd')

interface IDiscoverProps {

}

@observer
export class Discover extends React.Component<IDiscoverProps> {
  @observable employees: number[] = [0, 5000]
  @observable capital: number[] = [0, 500]

  @bind
  @action
  handleCapitalChange (event: any, newValue: number | number[]) {
    const newArr = (newValue as number[]).slice()
    this.capital = [...newArr]
  }

  @bind
  @action
  handleEmployeesChange (event: any, newValue: number | number[]) {
    const newArr = (newValue as number[]).slice()
    this.employees = [...newArr]
  }

  @bind
  openSDG () {
    routerStore.push(routerStore.location.pathname + '/sdg')
  }

  render () {

    const videos: JSX.Element[] = []
    for (let i = 0; i < 12; i++) {
      videos.push(
        <div className={styles.video}>

        </div>
      )
    }


    return (
      <div className={styles.container}>
        <div className={styles.fixed}>
          <div className={styles.searchBox}>
            <InputBase 
              id="outlined-basic"
              placeholder="Search"
              classes={{ root: styles.searchInput }}
            />
            <IconButton onClick={this.openSDG}><Plus color={'#fff'}/></IconButton>
          </div>
          <div className={styles.sliders}>
          <Slider
            min={0}
            max={5000}
            value={this.employees}
            onChange={this.handleEmployeesChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            // getAriaValueText={valuetext}
          />
          <Slider
            min={0}
            max={500}
            value={this.capital}
            onChange={this.handleCapitalChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            // getAriaValueText={valuetext}
          />
          </div>
        </div>
        <div className={styles.videos}>
          {videos}
        </div>
      </div>
    )
  }
}
