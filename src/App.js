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
          <Route exact path='/userpage' render={()=>(this.props.firstUser&&this.props.secondUser
                                                    &&this.props.firstUserPrivateKey&&this.props.secondUserPrivateKey) ? (<UserPage/>):(<Redirect to='/login'/>)}/>
          <Route exact path='/login'  render={()=>(this.props.secondUser&&this.props.firstUser
                                                  &&this.props.firstUserBalance&&this.props.secondUserBalance
                                                  &&this.props.firstUserPrivateKey&&this.props.secondUserPrivateKey) ? (<Redirect to='/userpage'/>):(<Login/>)}/>
        </div>
      </div>
    );
    }
}

const mapStateToProps =state=>({
  firstUser:state.user.firstUser,
  firstUserPrivateKey:state.user.firstUserPrivateKey,
  firstUserBalance:state.user.firstUserBalance,
  contractUser:state.user.contractUser,
  contratUserPrivateKey:state.user.contractUserPrivateKey,
  contractUserBalance:state.user.contractUserBalance,
  secondUser:state.user.secondUser,
  secondUserPrivateKey:state.user.secondUserPrivateKey,
  secondUserBalance:state.user.secondUserBalance,
  
})

export default connect(mapStateToProps,null)(App);
