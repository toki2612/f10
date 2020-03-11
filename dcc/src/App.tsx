import React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { MatchMediaProvider } from 'mobx-react-matchmedia'
import { breakpoints } from './stores/breakpointsStore';
import { Tinder } from './components/Tinder';
import { Navigation } from './components/Navigation';

@observer
class App extends React.Component {

  async componentDidMount () {
  }

  render () {
    let content: JSX.Element | null = null
    content = (
      <Router>
        <Switch>
          <Route exact path='/' component={Tinder}/>
        </Switch>
        <Navigation />
      </Router>
      
    )
    return (
        <React.Fragment>
          { content }
          <MatchMediaProvider breakpoints={ breakpoints } />
        </React.Fragment>
    )
  }
}

export default App
