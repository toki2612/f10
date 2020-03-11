import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './Tinder.module.css'
import { RouteComponentProps } from 'react-router-dom'
import ReactFullpage from '@fullpage/react-fullpage';

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

  render () {

    return (
      <div className={styles.container}>
        <ReactFullpage
          //fullpage options
          licenseKey = {'39614BC3-00294F80-B8B6ECF0-428BB41B'}
          scrollingSpeed = {500}

          render={({ state, fullpageApi }: any) => {
            return (
              <>
                <div className="section">
                  <p>Section 1 (welcome to fullpage.js)</p>
                  <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button>
                </div>
                <div className="section">
                  <p>Section 2</p>
                </div>
              </>
            );
          }}
        />
      </div>
    )
  }
}
