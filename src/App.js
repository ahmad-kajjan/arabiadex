import React from 'react';
import './App.css';
import Login from './pages/Login/Login.components';
import HomePage from './pages/homePage/homePage.components';
import Header from './components/header/header.components';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import UserPage from './pages/userPage/userPage.components';
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render (){
    return (
      <div className='App'>
        <Header />
        <div className='mainpage'>
          <Route exact path='/arabiadex' component={HomePage}  />
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/userpage' render={()=>(this.props.currentUser) ? (<UserPage/>):(<Redirect to='/login'/>)}/>
          <Route exact path='/login'  render={()=>(this.props.currencyBalance&&this.props.currentUser) ? (<Redirect to='/userpage'/>):(<Login/>)}/>
        </div>
      </div>
    );
    }
}

const mapStateToProps = state=>({
    currencyBalance:state.user.currencyBalance,
    currentUser:state.user.currentUser
});
export default connect(mapStateToProps)(App);
