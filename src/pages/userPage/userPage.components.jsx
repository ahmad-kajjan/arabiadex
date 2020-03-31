import React from 'react';

import UserAction from '../../components/user-action/user-action.components';
import UserProfile from '../../components/user-profile/user-profile.components';
import {connect} from 'react-redux';
import './userPage.styles.scss';

class UserPage extends React.Component{
    constructor(props)
    {
        super(props);
        console.log(this.props.currencyBalance);
    }
    render(){
        return(
            <div className='userpage'>
                <div className="oneUser">
                    <div className='useractions'>
                        <UserAction type="sell-limit" buttonName="SELL" symbol="JUNGLE"/>
                        <UserAction type="buy-limit" buttonName="BUY" symbol="JUNGLE"
                            currentUser={this.props.firstUser} privatekey={this.props.firstUserPrivateKey}/>
                    </div>
                    <div className='userinfo'> 
                        <UserProfile  currentUser={this.props.firstUser} currencyBalance={this.props.firstUserBalance}/>
                    </div>
                </div>
                <div className="oneUser">
                    <div className='userinfo'> 
                        <UserProfile  currentUser={this.props.contractUser} currencyBalance={this.props.contractUserBalance}/>
                    </div>
                </div>
                <div className="oneUser">
                    <div className='useractions'>
                            <UserAction type="sell-limit" buttonName="SELL" symbol="JUNGLE"/>
                            <UserAction type="buy-limit" buttonName="BUY" symbol="JUNGLE"
                                currentUser={this.props.secondUser} privatekey={this.props.secondUserPrivateKey}/>
                        </div>
                        <div className='userinfo'> 
                            <UserProfile  currentUser={this.props.secondUser} currencyBalance={this.props.secondUserBalance}/>
                    </div>
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


export default connect(mapStateToProps,null)(UserPage);