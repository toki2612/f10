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

@observer
class App extends React.Component {

  async componentDidMount () {
  }

  render () {
    let content: JSX.Element | null = null
    content = (
        <Switch>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/discover/sdg' component={SDG}/>
          <Route exact path='/discover' component={Discover}/>
          <Route exact path='/:id?/data' component={ProjectData}/>
          <Route exact path='/:id?' component={Tinder}/>
        </Switch>
        
      
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
