import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Discover.module.css'
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { routerStore } from '../stores/routerStore';
import { Slider, InputBase } from '@material-ui/core';
import { observable, action } from 'mobx';
import ReactCountryFlag from 'react-country-flag'
import bind from 'bind-decorator';
const Plus = require('react-ionicons/lib/IosAdd')
const group = require('../resources/img/group.svg')
const investment = require('../resources/img/payment.svg')

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
    for (let i = 0; i < 10; i++) {
      videos.push(
        <div key={i} className={styles.video} style={{backgroundImage: `url(${require(`../resources/img/dummy-${i}.gif`)})`}}>
          {/* <img src={gifSrc} alt='gif'/> */}
        </div>
      )
    }

    const icons: JSX.Element[] = []
    for (const i of [5, 12, 17]) {
      const n = i < 10 ? '0' + i : i
      icons.push(
        <div className={styles.iconBox} onClick={this.openSDG}>
          <img src={require(`../resources/sdg/E-WEB-Goal-${n}.png`)} alt={`sdg-${i}`}/>
        </div>
      )
    }

    const flags: JSX.Element = <div className={styles.flags}>
      <ReactCountryFlag
        countryCode={'CH'}
        style={{
            fontSize: '2em',
            lineHeight: '2em',
        }}/>
        <ReactCountryFlag
        countryCode={'US'}
        style={{
            fontSize: '2em',
            lineHeight: '2em',
        }}/>
        <ReactCountryFlag
        countryCode={'DE'}
        style={{
            fontSize: '2em',
            lineHeight: '2em',
        }}/>
    </div>
  


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
        </div>
        <div className={styles.scrollable}>
          <div className={styles.icons}>{icons}</div>
          <div className={styles.sliders}>
          <div className={styles.slider}>
          <img src={investment} alt='investment-icon'/>
          <div className={styles.val}>0</div>
            <Slider
              classes={{ rail: styles.rail, track: styles.rail }}
              min={0}
              max={5000}
              value={this.employees}
              onChange={this.handleEmployeesChange}
              valueLabelDisplay="off"
              aria-labelledby="range-slider"
              // getAriaValueText={valuetext}
            />
            <div className={styles.val}>5000</div>
          </div>
          <div className={styles.slider}>
            <img src={group} alt='group-icon'/>
            <div className={styles.val}>0</div>
            <Slider
              classes={{rail: styles.rail, track: styles.rail}}
              min={0}
              max={500}
              value={this.capital}
              onChange={this.handleCapitalChange}
              valueLabelDisplay="off"
              aria-labelledby="range-slider"
              // getAriaValueText={valuetext}
            />
            <div className={styles.val}>500</div>
            </div>
          </div>
          {flags}
          <div className={styles.videos}>
          {videos}
          </div>
        </div>
        
        
      </div>
    )
  }
}
