import React from 'react';
import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../../components/custom-button/custom-button.components';
import ApiService from '../../service/ApiService';
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
        ApiService.login(this.state);
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
            </div>
        )
    }
}

export default Login; 