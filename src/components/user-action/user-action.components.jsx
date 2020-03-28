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
    handelsubmit()
    {
        const quantity=this.state.amount +'.0000 '+this.props.symbol;
        if(toString(this.props.type).toUpperCase==="SELL")
            ApiService.sell({from:this.state.from,quantity:quantity});
        else if(toString(this.props.type).toUpperCase==="BUY")
            ApiService.buy({from:this.state.from,quantity:quantity});

    }   
    handelChange = event => {
        const {value,name} =event.target;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className='action-container'>
                <h2 className='action-type' >{toString(this.props.type).toUpperCase}</h2>
                <form className='form' >
                    <FormInput name="from" value={this.state.from} handelchange={this.handechange} label="jungle account name"></FormInput>
                    <div classNam='quantity'>
                        <FormInput name="amount" value={this.state.amount} handelchange={this.handechange} label={"amount to "+this.props.type +"PS:1 equals to 1.0000"}></FormInput>
                        <label className='symbol'>{this.props.symbol}</label>
                    </div>
                    <CustomButton type="submit">{this.props.type}</CustomButton>
                </form>
            </div>
        )

    }
}

export default userAction;