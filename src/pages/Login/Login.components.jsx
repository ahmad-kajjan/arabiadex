import React from 'react';
import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../../components/custom-button/custom-button.components';
import ApiService from '../../service/ApiService';
import {connect} from 'react-redux';
import {setCurrentUser} from '../../redux/user/user.actions';
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
            // eslint-disable-next-line
        if( ans.rows[0].user!==from){
                ApiService.addPermission({from:from,privatekey:privatekey});}
                const test=ApiService.accountCurrency({from:from});
                test.then(user=>{
                    console.log(user);
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
                        <CustomButton type='button' name="setPermission" onClick={this.handelSubmit}>Login</CustomButton>
                    </div>
                </form>
                <div className='userInfo'>
                        <h3 name='name'></h3>
                </div>
            </div>
        )
    }
}

export default (Login); 