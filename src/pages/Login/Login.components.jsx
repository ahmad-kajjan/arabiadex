import React from 'react';
import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../../components/custom-button/custom-button.components';
import ApiService from '../../service/ApiService';
import {eosContractAccountInfo} from '../../service/Api-Settings';
import {connect} from 'react-redux';
import { setFirstUser, setFirstUserBalance, setSecondUser, setSecondUserPrivateKey, setSecondUserBalance, setContractUser, setContractUserPrivateKey, setContractUserBalance} from '../../redux/user/user.actions';
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
        this.props.setContractUserPrivateKey(eosContractAccountInfo.private_key);
        this.props.setContractUser(eosContractAccountInfo.username);
        const {firstUser,firstUserPrivateKey,secondUser,secondUserPrivateKey} =this.state;
        this.props.setFirstUser(firstUser);
        this.props.setFirstUserPrivateKey(firstUserPrivateKey);
        this.props.setSecondUser(secondUser);
        this.props.etSecondUserPrivateKey(secondUserPrivateKey);
        const res1=ApiService.geteosAccountBalance(firstUser);
        res1.then(currency=>{
            this.props.setFirstUserBalance(currency.rows[0]);
        });
        const res2=ApiService.geteosAccountBalance(secondUser);
        res2.then(currency=>{
            this.props.setSecondtUserBalance(currency.rows[0]);
        });
        const res3=ApiService.geteosAccountBalance(eosContractAccountInfo.username);
        res3.then(currency=>{
            this.props.setContractUserBalance(currency.rows[0]);
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
    setFirstUser:user=>dispatch(setFirstUser(user)),
    setFirstUserPrivateKey:privatekey=>dispatch(setFirstUserPrivateKey(privatekey)),
    setFirstUserBalance: currency=>dispatch(setFirstUserBalance(currency)),
    setSecondUser:user=>dispatch(setSecondUser(user)),
    setSecondUserPrivateKey:privatekey=>dispatch(setSecondUserPrivateKey(privatekey)),
    setSecondUserBalance: currency=>dispatch(setSecondUserBalance(currency)),
    setContractUser:user=>dispatch(setContractUser(user)),
    setContractUserPrivateKey:privatekey=>dispatch(setContractUserPrivateKey(privatekey)),
    setContractUserBalance: currency=>dispatch(setContractUserBalance(currency))
})

export default connect(mapStateToProps,mapDispatchToProps)(Login); 