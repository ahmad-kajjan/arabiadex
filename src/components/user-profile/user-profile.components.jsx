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
                        this.props.currencyBalance.map(currency=>(
                            <div>
                                {currency}
                            </div>)
                            )
                        }
                    </div>
            </div>
         );
    }
}
const mapStatetoProps = state=>({
    currentUser:state.user.currentUser,
    currencyBalance:state.user.currencyBalance
})
export default connect(mapStatetoProps)(userProfile);