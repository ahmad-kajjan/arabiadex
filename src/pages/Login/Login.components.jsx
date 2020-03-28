import React from 'react';
import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../../components/custom-button/custom-button.components';
import ApiService from '../../service/ApiService';
import {connect} from 'react-redux';
import {setCurrencyBalance, setCurrentUser} from '../../redux/user/user.actions';
import './Login.styles.scss';



class  Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
              from  : '',
              privatekey : '',
        }
      
    }
  
    handelSubmit = event => {
       
        event.preventDefault();
        const {from,privatekey} =this.state;
        ApiService.login({from:from}).then(ans =>{
            console.log(ans);
            if( ans.rows[0].user!==from){
                ApiService.addPermission({from:from,privatekey:privatekey});}
                const test=ApiService.accountCurrency({from:from});
                test.then(currency=>{
                        this.props.setCurrentUser(from);
                        this.props.setCurrencyBalance(currency);
                    });
               
            }).catch((e)=>{
            console.log('\nCaught exception: ' + e);
            
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
                     <FormInput name="from"  value={this.state.from} handelchange={this.handelChange} label={"account_name"} required />
                     <FormInput name="privatekey"  value={this.state.privatekey} handelchange={this.handelChange} label={"Enter your private Key "} required />
                    <div className ="buttons">
                        <CustomButton type='button' name="login" onClick={this.handelSubmit}>Login</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps =state=>({
    currentUser:state.user.currentUser,
    currencyBalance:state.user.currencyBalance
})

const mapDispatchToProps=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user)),
    setCurrencyBalance: currency=>dispatch(setCurrencyBalance(currency))
})

export default connect(mapStateToProps,mapDispatchToProps)(Login); 