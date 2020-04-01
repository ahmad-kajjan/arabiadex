import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUsers} from '../../redux/user/user.actions';
import './header.styles.scss';

class header extends React.Component{
    constructor(props)
    {   
        super(props);
    }
    signout = event=>{
        this.props.setUsers(null);
    }
 render(){ 
   return (
        <div className ="header">
            <Link className='icon-container' to='/'>
                <img src ="https://media.caramel.la/_CdWCc2Nz?e=0,0,340,587&r=80"  alt="icon" className='icon' />
            </Link>
            <div className="options">
                {  this.props.users ?
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
const mapStateToProps =state=>({
    users:state.user.users,
 
   
})

const mapDispatchToProps=dispatch=>({
    setUsers:users=>dispatch(setUsers(users)),
})
export default connect(mapStateToProps,mapDispatchToProps)(header);