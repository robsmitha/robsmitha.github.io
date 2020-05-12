import React, { Component } from 'react';
import './App.css';

//Layouts
import LayoutRoute from './components/_layout/LayoutRoute';

//Components
import Home from './components/Home'
import Repo from './components/Repo'
import Commit from './components/Commit'
import {browserHistory, withRouter} from 'react-router';
//Contexts
import { ThemeProvider } from './contexts/ThemeContext'
import { UserProvider } from './contexts/UserContext'

class App extends Component {

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      window.scrollTo(0,0)
    });
  }
  componentWillUnmount() {
      this.unlisten();
  }
  render(){
    return (
      <ThemeProvider>
        <UserProvider>
          <LayoutRoute exact path='/' component={Home} />
          <LayoutRoute exact path='/repo/:name' component={Repo} />
          <LayoutRoute exact path='/repo/:name/commit/:sha' component={Commit} />
        </UserProvider>
      </ThemeProvider>
    )
  }
}
export default  withRouter(App)