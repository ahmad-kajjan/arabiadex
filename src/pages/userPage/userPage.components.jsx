import React from 'react';

import UserAction from '../../components/user-action/user-action.components';
import UserProfile from '../../components/user-profile/user-profile.components';
import {connect} from 'react-redux';
import './userPage.styles.scss';

class UserPage extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div className='userpage'>
                <div className="oneUser">
                    <div className='userinfo'> 
                        <UserProfile  currentUser={this.props.users[0]} currentBalance={this.props.firstUserBalance}/>
                    </div>
                    <div className='useractions'>
                        <UserAction type="sell_limit" buttonName="SELL" symbol="JUNGLE"
                            currentUser={this.props.users[0]} privatekey={this.props.privateKeys[0]}/>
                        <UserAction type="buy_limit" buttonName="BUY" symbol="JUNGLE"
                            currentUser={this.props.users[0]} privatekey={this.props.privateKeys[0]}/>
                    </div>
                </div>
              
                <div className="oneUser">
                        <div className='userinfo'> 
                            <UserProfile  currentUser={this.props.users[1]} currentBalance={this.props.secondUserBalance}/>
                        </div>
                    <div className='useractions'>
                            <UserAction type="sell_limit" buttonName="SELL" symbol="JUNGLE"
                            currentUser={this.props.users[1]} privatekey={this.props.privateKeys[1]}/>
                            <UserAction type="buy_limit" buttonName="BUY" symbol="JUNGLE"
                                currentUser={this.props.users[1]} privatekey={this.props.privateKeys[1]}/>
                        </div>
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


export default connect(mapStateToProps,null)(UserPage);