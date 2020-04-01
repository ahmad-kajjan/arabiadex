import React from  'react';
import {connect} from 'react-redux';
import './user-profile.styles.scss';
class userProfile extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        return(
            <div className='userprofile'>
                    <div className='username'>{this.props.currentUser}</div>
                    <div className='currencytable'>
                        {
                             this.props.currentBalance.map(currency=>(
                                <div className='currency'>
                                    {currency}
                                </div>)
                                )    
                        }
                    </div>
            </div>
        )
    }
}

export default userProfile;