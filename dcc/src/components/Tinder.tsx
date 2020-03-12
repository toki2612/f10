import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Tinder.module.css'
import { RouteComponentProps } from 'react-router-dom'
import ReactFullpage from '@fullpage/react-fullpage';
import { Project } from './Project'
import bind from 'bind-decorator';
import { routerStore } from '../stores/routerStore';

// const pluginWrapper = () => {
//   require('./statics/fullpage.scrollHorizontally.min');
// };

type MatchParams = {
  uid: string
}

interface ITinderProps extends RouteComponentProps<MatchParams> {

}

@observer
export class Tinder extends React.Component<ITinderProps> {

  componentDidMount () {
    routerStore.push(`/${0}`)
  }

  @bind
  updateRoute (idx: number) {
    routerStore.push(`/${idx}`)
  }

  render () {
    const sections: JSX.Element[] = []
    for (let i = 0; i < 3; i++) {
      sections.push(
        <div key={i} className="section">
          <Project />
        </div>
      )
    }

    return (
      <div className={styles.container}>
        {<ReactFullpage
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
