import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Homepage from './pages/homepage/home';
import Animations from './pages/animations/anim';
import Registration from './pages/registration/reg';
import Navbar from './components/navbar/nav'

class App extends React.Component{
  render(){
    return(
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/animations" exact component={Animations} />
            <Route path="/registration" exact component={Registration} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
