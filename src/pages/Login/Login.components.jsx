import React from 'react';
import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../../components/custom-button/custom-button.components';
 
class  Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
              account_name  : '',
              private_key   :  '',  
        }
    }
    handelSubmit = event => {
        event.preventDefault();
        this.setstate({account_name:'',private_key:''});
    }
    handelChange = event => {
        const {value,name} =event.target;
        this.setState({[name]:value});
    }
    render()
    {
        return(
            <div className="Login">
                <h2>Login with your jungle testnet account and it's private key</h2>
                <form onSubmit={this.handelSubmit}>
                     <FormInput name="account_name"  value={this.state.account_name} handelchange={this.handelChange} label={"account_name"} required />
                     <FormInput name="private_key"  value={this.state.private_key} handelchange={this.handelChange} label={"private_key"} required />
                    <CustomButton type='submit'>Login</CustomButton>
                </form>
            </div>
        )
    }
}

export default Login; 