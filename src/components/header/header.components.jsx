import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setFirstUser,setSecondUser,setContractUser} from '../../redux/user/user.actions';
import './header.styles.scss';

class header extends React.Component{
    constructor(props)
    {   
        super(props);
    }
    signout = event=>{
        this.props.setFirstUser(null);
        this.props.setSecondUser(null);
        this.props.setContractUser(null);
    }
 render(){ 
   return (
        <div className ="header">
            <Link className='icon-container' to='/'>
                <img src ="https://media.caramel.la/_CdWCc2Nz?e=0,0,340,587&r=80"  alt="icon" className='icon' />
            </Link>
            <div className="options">
                {  this.props.firstUser&&this.props.secondUser ?
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

const mapDispatchToProps=dispatch=>({
    setFirstUser:user=>dispatch(setFirstUser(user)),
    setSecondUser:user=>dispatch(setSecondUser(user)),
    setContractUser:user=>dispatch(setContractUser(user)),

})
export default connect(mapStateToProps,mapDispatchToProps)(header);