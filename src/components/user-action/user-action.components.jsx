import React from 'react';
import ApiService from '../../service/ApiService';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import {connect} from 'react-redux';
import {setFirstUserBalance,setSecondUserBalance,setContractUserBalance} from '../../redux/user/user.actions';
import './user-action.styles.scss';

class userAction extends React.Component{
    constructor(props){
        super(props);
        this.state={
            price:'',
            amount :'',
            total:'',
            receiver:'',
        }
    }
    handelSubmit=event=>
    {
        event.preventDefault();
        const junglquantity=this.state.amount +'.0000 '+this.props.symbol;
        const eosquantity=this.state.total+'.0000 '+"EOS";
        const action="transfer";
        const actor=this.props.currentUser;
        let fromquantity,toquantity;
        if(this.props.type=="buy_limit")
            fromquantity=eosquantity,toquantity=junglquantity;
        else if (this.props.type=="sell_limit")
            fromquantity=junglquantity,toquantity=eosquantity;
        const datavalue={
                from:actor,
                to:"projcarabia1",
                quantity:fromquantity,
                memo:this.props.type+','+this.state.price+','
                    +toquantity+','+this.state.receiver+','+'0'
        }
       const res =ApiService.make_transfer(action,actor,this.props.privatekey,datavalue);
        res.then(test=>{
           const res1= ApiService.geteosAccountBalance(firstUser).then(currency=>{
                setFirstUserBalance(currency.rows[0]);
            });
            const res2=ApiService.geteosAccountBalance(secondUser).then(currency=>{
                setSecondUserBalance(currency.rows[0]);
            })
            const res3=ApiService.geteosAccountBalance(contractUser).then(currency=>{
                setContractUserBalance(currency.rows[0]);
            })
        });
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
                        <FormInput name="price" value={this.state.price} handelchange={this.handelChange} label="jungle account name"/>
                        <FormInput name="amount" value={this.state.amount} handelchange={this.handelChange} label={"amount to "+this.props.type +" PS:1 equals to 1.0000 in JUNGLE Currency"}/>
                        <FormInput name="total" type='read-only' value={this.state.price * this.state.total} handelchange={this.handelChange} label={"total eos price"}/>
                        <FormInput name="receiver" value={this.state.receiver} handelchange={this.handelChange} label={"receiver account"}/>
                    </div>
                    <div className='button'>
                        <CustomButton type="submit" >{this.props.buttonName}</CustomButton>
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

    setFirstUserBalance: currency=>dispatch(setFirstUserBalance(currency)),
    setSecondUserBalance: currency=>dispatch(setSecondUserBalance(currency)),
    setContractUserBalance: currency=>dispatch(setContractUserBalance(currency))
})

export default connect(mapStateToProps,mapDispatchToProps) (userAction);