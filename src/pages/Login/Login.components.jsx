import React from 'react';
import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../../components/custom-button/custom-button.components';
import ApiService from '../../service/ApiService';
import {connect} from 'react-redux';
import { setUsers, setFirstUserBalance,setPrivateKeys, setSecondUserBalance} from '../../redux/user/user.actions';
import './Login.styles.scss';



class  Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
              firstUser  : '',
              firstUserPrivateKey : '',
              secondUser :'',
              secondUserPrivateKey:'',
        }
      
    }
  
    handelSubmit = event => {
       
        event.preventDefault();
        const users=[
            this.state.firstUser,this.state.secondUser
        ];
        const privatekeys=[this.state.firstUserPrivateKey,this.state.secondUserPrivateKey];
        
        const {firstUser,firstUserPrivateKey,secondUser,secondUserPrivateKey} =this.state;
        this.props.setUsers(users);
        this.props.setPrivateKeys(privatekeys);
        const res1=ApiService.geteosAccountBalance(firstUser);
        res1.then(currency=>{
            console.log(currency);
            this.props.setFirstUserBalance(currency);
        });
        const res2=ApiService.geteosAccountBalance(secondUser);
        res2.then(currency=>{
            this.props.setSecondUserBalance(currency);
        });
    }
    handelChange = event => {
        const {value,name} =event.target;
        this.setState({[name]:value});
    }
    render()
    {
        return(
            <div className="Login" >
                <h2>USE  your jungle testnet account </h2>
                <form >
                     <FormInput name="firstUser"  value={this.state.firstUser} handelchange={this.handelChange} label={"first account name"} required />
                     <FormInput name="firstUserPrivateKey"  value={this.state.firstUserPrivateKey} handelchange={this.handelChange} label={"Enter first account's private Key "} required />

                    <FormInput name="secondUser"  value={this.state.secondUser} handelchange={this.handelChange} label={"second account name"} required />
                     <FormInput name="secondUserPrivateKey"  value={this.state.secondUserPrivateKey} handelchange={this.handelChange} label={"Enter second account's private Key "} required />
                    <div className ="buttons">
                        <CustomButton type='button' name="login" onClick={this.handelSubmit}>Login</CustomButton>
                    </div>
                </form>
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
    setUsers:users=>dispatch(setUsers(users)),
    setPrivateKeys:privatekeys=>dispatch(setPrivateKeys(privatekeys)),
    setFirstUserBalance: currency=>dispatch(setFirstUserBalance(currency)),
    setSecondUserBalance: currency=>dispatch(setSecondUserBalance(currency)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Login); 