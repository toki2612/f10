import React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { Switch, Route } from 'react-router-dom'
import { MatchMediaProvider } from 'mobx-react-matchmedia'
import { breakpoints } from './stores/breakpointsStore';
import { Tinder } from './components/Tinder';
import { Navigation } from './components/Navigation';
import { ProjectData } from './components/common/project/ProjectData';
import { Discover } from './components/Discover';
import { SDG } from './components/SDG';
import { Events } from './components/Events';
import { Profile } from './components/Profile';
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';
import { JBLogin } from './components/common/jb/JBLogin';
import { NDA } from './components/common/project/NDA';
import { dataStore } from './stores/dataStore';
import { Chat } from './components/Chat';

@observer
class App extends React.Component {

  componentDidMount () {
    // dataStore.init()
  }

  render () {
    let content: JSX.Element | null = null
    content = (
      // <Route
      //     render={({ location }) => {
      //       const { pathname } = location;
      //       return (
      //         <TransitionGroup>
      //           <CSSTransition 
      //             key={pathname}
      //             classNames={"page"}
      //             timeout={{
      //               enter: 10000,
      //               exit: 10000,
      //             }}
      //           >
      //             <Route
      //               location={location}
      //               render={() => (
                      <Switch>
                        <Route exact path='/chats' component={Chat}/>
                        <Route exact path='/:id?/jblogin' component={JBLogin}/>
                        <Route exact path='/events' component={Events}/>
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/discover/sdg' component={SDG}/>
                        <Route exact path='/discover' component={Discover}/>
                        <Route exact path='/:id?/data/nda' component={NDA}/>
                        <Route exact path='/:id?/data' component={ProjectData}/>
                        <Route exact path='/:id?' component={Tinder}/>
                      </Switch>
        //             )}
        //           />
        //         </CSSTransition>
        //       </TransitionGroup>
        //     );
        //   }}
        // />
    )
    return (
        <React.Fragment>
          { content }
          <Navigation />
          <MatchMediaProvider breakpoints={ breakpoints } />
        </React.Fragment>
    )
  }
}

export default App
