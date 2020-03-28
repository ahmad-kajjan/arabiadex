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
                <div className='userprofile'>
                    <UserProfile/>
                </div>
                <div className='useractions'>
                    <UserAction type="sell" symbol="JUNGLE"/>
                    <UserAction type="buy"  symbol="JUNGLE"/>
                </div>
            </div>
            );
    }
}

const mapStateToProps=state=>({
    currencyBalance:state.user.currencyBalance,
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps,null)(UserPage);