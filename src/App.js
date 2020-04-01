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
          <Route exact path='/userpage' render={()=>( (this.props.users&&this.props.privateKeys))  ? (<UserPage/>):(<Redirect to='/login'/>)}/>
          <Route exact path='/login'  render={()=>( (this.props.secondUserBalance))  ? (<Redirect to='/userpage'/>):(<Login/>)}/>
        </div>
      </div>
    );
    }
}

const mapStateToProps =state=>({
  users:state.user.users,
  privateKeys:state.user.privateKeys,
  firstUserBalance:state.user.firstUserBalance,
  secondUserBalance:state.user.secondUserBalance,
  
})

export default connect(mapStateToProps,null)(App);
