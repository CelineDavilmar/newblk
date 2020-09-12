import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Services from './components/Services';
import Bookmarks from './components/Bookmarks';
import Goal from './components/Goal';
import Contact from './components/Contact';
import Error from './components/Error';
import Password from './components/Password';
import Navigation from './components/Navigation';
import LoginSuccess from './components/LoginSuccess';


class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Login" component={Login}/>
             <Route path="/Services" component={Services}/>
             <Route path="/Bookmarks" component={Bookmarks}/>
             <Route path="/Goal" component={Goal}/>
             <Route path="/contact" component={Contact}/>
             <Route component={Register}/>
             <Route component={Password}/>
             <Route component={LoginSuccess}/>
             <Route component={Error}/>
           </Switch>
        </div>
      </BrowserRouter>
    );

}
}

export default App;
