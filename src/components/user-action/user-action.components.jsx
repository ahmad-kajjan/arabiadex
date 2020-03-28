import React from 'react';
import ApiService from '../../service/ApiService';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import {connect} from 'react-redux';
import {setCurrencyBalance,setCurrentUser} from '../../redux/user/user.actions';
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
        const user=this.state.from;
        const quantity=this.state.amount +'.0000 '+this.props.symbol;
        if(this.props.type==="sell"){
          ApiService.sell({from:this.state.from,quantity:quantity}).then(()=>
          {
                const res=ApiService.accountCurrency({from:user});
                res.then(currency=>{
                this.props.setCurrencyBalance(currency);
                });
            })
        }
        else if(this.props.type==="buy"){
           ApiService.buy({from:this.state.from,quantity:quantity}).then(()=>
           {
                const res=ApiService.accountCurrency({from:user});
                res.then(currency=>{
                this.props.setCurrencyBalance(currency);
                });
            })
        }
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
const mapDispatchToProps = dispatch =>({
        setCurrentUser:user=>dispatch(setCurrentUser(user)),
        setCurrencyBalance: currency=>dispatch(setCurrencyBalance(currency))
});
export default connect(null,mapDispatchToProps) (userAction);