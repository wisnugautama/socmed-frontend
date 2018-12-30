import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './containers/Home';
import User from './containers/User';
import UserDetail from './components/UserDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={User} />
            <Route path="/user/details/:id" component={UserDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
