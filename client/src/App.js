import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';

function App() {

  return (
    <AuthProvider>
      <Router>
      <Container>
          <MenuBar/>
          <Route exact path = "/" component = {Home}/>
          <AuthRoute exact path = "/login" component = {Login}/>
          <AuthRoute exact path = "/register" component = {Register}/>
          <Route exact path="/pages/First" component = {First}/>
          <Route exact path="/pages/Second" component = {Second}/>
          <Route exact path="/pages/Third" component = {Third}/>
      </Container> 
    </Router>
    </AuthProvider>
        
  );

}
export default App;
