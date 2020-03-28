import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from '../../redux/user/user.actions';
import './header.styles.scss';

class header extends React.Component{
    constructor(props)
    {   
        super(props);
    }
    signout = event=>{
        this.props.setCurrentUser(null);
    }
 render(){ 
   return (
        <div className ="header">
            <Link className='icon-container' to='/'>
                <img src ="https://media.caramel.la/_CdWCc2Nz?e=0,0,340,587&r=80"  alt="icon" className='icon' />
            </Link>
            <div className="options">
                {  this.props.currentUser ?
                    <div className='option' onClick={this.signout}>
                        Logout
                    </div>:
                    <Link className='option' to='/login'>
                        Login
                    </Link>
                }
                <Link className='option' to='/contact'>
                    Contact
                </Link>
    
            </div>
        </div>
    )
            }
}
const mapStateToProps = state=>({
    currentUser:state.user.currentUser
})
const mapDispatchToProps=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(header);