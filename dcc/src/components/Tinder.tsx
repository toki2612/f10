import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Tinder.module.css'
import { RouteComponentProps } from 'react-router-dom'
import ReactFullpage from '@fullpage/react-fullpage';
import { Project } from './common/project/Project'
import bind from 'bind-decorator';
import { routerStore } from '../stores/routerStore';
import { dataStore } from '../stores/dataStore';

type MatchParams = {
  uid: string
}

interface ITinderProps extends RouteComponentProps<MatchParams> {

}

@observer
export class Tinder extends React.Component<ITinderProps> {

  componentDidMount () {
    // if (dataStore.projects && Object.keys(dataStore.projects).length) {
    //   const initRoute = `/${dataStore.projects[Object.keys(dataStore.projects)[0]]}`
    //   console.log(initRoute)
    //   routerStore.push('/walo')
    // }
    routerStore.push('/walo')
  }

  @bind
  updateRoute (id: string) {
    routerStore.push(`/${id}`)
  }

  render () {
    const sections: JSX.Element[] = []
    if (dataStore.projects) {
      for (const id in dataStore.projects) {
        const data = {...dataStore.projects[id], id}
        sections.push(
          <div key={id} className="section">
            <Project data={data}/>
          </div>
        )
      }
    }

    return (
      <div className={styles.container}>
        {sections.length && <ReactFullpage
          //fullpage options
          licenseKey = {'39614BC3-00294F80-B8B6ECF0-428BB41B'}
          scrollingSpeed = {500}
          onLeave={(origin: any, destination:any, direction:any) => {
            this.updateRoute(destination.index)
          }}
          render={({ state, fullpageApi }: any) => {
            return (
              <>
                {sections}
              </>
            );
          }}
        />}
      </div>
    )
  }
}
