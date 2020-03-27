import React from 'react';
import './App.css';
import Login from './pages/Login/Login.components';
import HomePage from './pages/homePage/homePage.components';
import Header from './components/header/header.components';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Header />
      <div className='mainpage'>
        <Route exact path='/arabiadex' component={HomePage} />
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/login' component={Login}/>
      </div>
    </div>
  );
}

export default App;
