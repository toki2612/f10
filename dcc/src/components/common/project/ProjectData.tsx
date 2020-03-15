import { observer } from 'mobx-react'
import * as React from 'react'
import classnames from 'classnames'
import styles from './ProjectData.module.css'
import { TextButton, BackButton } from '../Buttons'
import { observable, action, computed } from 'mobx'
import bind from 'bind-decorator'
import { routerStore } from '../../../stores/routerStore'
import { RouteComponentProps } from 'react-router-dom'
import { dataStore } from '../../../stores/dataStore'
import ReactCountryFlag from 'react-country-flag'
import { IconButton } from '@material-ui/core'
const group = require('../../../resources/img/group.svg')
const vaultSrc = require('../../../resources/img/vault.svg')

type MatchParams = {
  id: string
}

interface IProjectDataProps extends RouteComponentProps<MatchParams> {

}

@observer
export class ProjectData extends React.Component<IProjectDataProps> {

  @computed
  get ndaSigned () {
    return dataStore.projects && dataStore.projects[this.props.match.params.id].nda
  }

  @bind
  @action
  signNda () {
    // this.ndaSigned = true
    console.log(this.props.match)
    routerStore.push('/' + this.props.match.params.id + '/jblogin')
  }
  
  @bind
  toDueDiligence () {
    routerStore.push('/' + this.props.match.params.id + '/data/due_diligence')
  }

  @bind
  openVault () {
    routerStore.push('/' + this.props.match.params.id + '/data/vault')
  }

  render () {
    const data = dataStore.projects ? dataStore.projects[this.props.match.params.id] : null

    let NDABox: JSX.Element | null = null
    if (!this.ndaSigned) {
      NDABox = <div className={styles.ndaBox}>
      <div className={styles.ndaMessage}>If you want to see more details about this investment opportunity, please sign their NDA.</div>
      <TextButton text='Sign NDA' onClick={this.signNda}/>
    </div>
    }

    let vault: JSX.Element | null = null
    if (this.ndaSigned) {
      vault = <IconButton className={styles.vault} onClick={this.openVault}>
        <img alt='vault' src={vaultSrc} />
      </IconButton>
    }

    const team: JSX.Element[] = []
    const teamNames = ['Michael Ionov', 'Urs Volt', 'Rahel Zingg']
    for (let i = 0; i < 3; i++) {
      team.push(
       <div className={styles.teamMember}>
          <div key={i} className={styles.teamPic} style={{backgroundImage: `url(${require(`../../../resources/img/team-${i}.png`)})`}}/> 
          <div className={styles.teamName}>{teamNames[i]}</div>
       </div>
      )
    }

    return (
      <div className={classnames(styles.container, this.ndaSigned ? undefined : styles.locked)}>
        <BackButton onClick={this.ndaSigned ? () => routerStore.push('/') : routerStore.goBack}/>
        {vault}
        <div className={styles.logo}>
            <img src={require(`../../../resources/img/logo-${this.props.match.params.id}.png`)} alt='logo'/>
          </div>
        <div className={styles.mainPage} style={{ overflowY: this.ndaSigned ? 'auto' : 'hidden' }}>
          <div className={styles.data}>
            <div className={styles.textData}>
              <div className={styles.name}>
                @{data && data.name}
              </div>
              <div className={styles.description}>
                {data && data.description}
              </div>
              <div className={styles.tags}>
                #blockchain
              </div>
            </div>
            <div className={styles.moreData}>
              <div className={styles.category}>
                <img src={require(`../../../resources/sdg/E-WEB-Goal-${data ? (data.sdg < 10 ? '0' + data.sdg : data.sdg) : 10}.png`)} alt={`sdg`}/>
              </div>
            </div>
          </div>
          <div className={styles.params1}>
            <div className={styles.tags}>
              {data && data.country}
              <ReactCountryFlag
              countryCode={data ? data.country : 'CH'}
              style={{
                  fontSize: '2em',
                  lineHeight: '2em',
              }}
            />
            </div>
            <div className={styles.tags}>
              {data && data.year}
            </div>
            <div className={styles.tags}>
             <span>
              <img src={group} alt='group-icon'/>
              {data && data.team}
             </span>
            </div>
          </div>
          <div className={styles.params2}>
            <div className={styles.tags}>
            {data && data.type}
            </div>
            <div className={styles.tags}>
            {data && data.investment}
            </div>
          </div>
          <div className={styles.params3}>
            <div className={styles.tags}>
              <h3>Problem</h3>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            </div>
            <div className={styles.tags}>
            <h3>Solution</h3>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            </div>
          </div>
          <div className={styles.params4}>
            <div className={styles.tags}>
              <h3>Team</h3>
              <div className={styles.team}>
                {team}
              </div>
            </div>
          </div>
          <div className={styles.docs}>
            <TextButton text='Due Diligence' onClick={this.toDueDiligence}/>
            <TextButton text='Private deal'/>
            <TextButton text='Club deal'/>
          </div>
        </div>
        {NDABox}
      </div>
    )
  }
}
