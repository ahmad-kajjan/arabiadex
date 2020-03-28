import React from 'react';
import ApiService from '../../service/ApiService';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';

import './user-action.styles.scss';

class userAction extends React.Component{
    constructor(props){
        super(props);
        this.state={
            from:'',
            amount :'',
        }
    }
    handelSubmit=event=>
    {
        event.preventDefault();
        const quantity=this.state.amount +'.0000 '+this.props.symbol;
        if(this.props.type==="sell")
            ApiService.sell({from:this.state.from,quantity:quantity});
        else if(this.props.type==="buy")
            ApiService.buy({from:this.state.from,quantity:quantity});

    }   
    handelChange = event => {
        const {value,name} =event.target;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className='action-container'>
                <h2 className='action-type' >{this.props.type}</h2>
                <form   onSubmit={this.handelSubmit}>
                    <div className='inputs'>
                        <FormInput name="from" value={this.state.from} handelchange={this.handelChange} label="jungle account name"></FormInput>
                        <div className='quantity'>
                            <FormInput name="amount" value={this.state.amount} handelchange={this.handelChange} label={"amount to "+this.props.type +" PS:1 equals to 1.0000 in JUNGLE Currency"}></FormInput>
                        </div>
                    </div>
                    <div className='button'>
                        <CustomButton type="submit" >{this.props.type}</CustomButton>
                    </div>
                </form>
            </div>
        )

    }
}

export default userAction;