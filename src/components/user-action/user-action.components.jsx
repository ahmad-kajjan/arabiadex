import React from 'react';
import ApiService from '../../service/ApiService';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import {connect} from 'react-redux';
import {setFirstUserBalance,setSecondUserBalance} from '../../redux/user/user.actions';
import './user-action.styles.scss';

class userAction extends React.Component{
    constructor(props){
        super(props);
        this.state= {
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
       var fromquantity="",toquantity="";
        if(this.props.type==="buy_limit"){
            fromquantity=eosquantity;toquantity=junglquantity;}
        else if (this.props.type==="sell_limit"){
            fromquantity=junglquantity;toquantity=eosquantity;}
        const datavalue={
                from:actor,
                to:"projcarabia1",
                quantity:fromquantity,
                memo:this.props.type+","+this.state.price+","
                    +toquantity+","+this.state.receiver+","+"0"
        }
        console.log(action+" "+actor+" "+ this.props.privatekey+" "+datavalue.quantity+" "+datavalue.memo);
       const res =ApiService.make_transfer(action,actor,this.props.privatekey,datavalue);
        res.then(test=>{
            console.log(test);
           const res1= ApiService.geteosAccountBalance(this.props.users[0]);
           res1.then(currency=>{
               console.log(currency);
                this.props.setFirstUserBalance(currency);
            });
            const res2=ApiService.geteosAccountBalance(this.props.users[1]);
            res2.then(currency=>{
                this.props.setSecondUserBalance(currency);
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
                        <FormInput name="price"  value={this.state.price} handelchange={this.handelChange} label="enter your price offer"/>
                        <FormInput name="amount"  value={this.state.amount} handelchange={this.handelChange} label={"amount to "+this.props.type +" PS:1 equals to 1.0000 in JUNGLE Currency"}/>
                        <FormInput name="total"  value={this.state.total=this.state.amount *this.state.price}  handelchange={this.handelChange} />
                        <FormInput name="receiver" value={this.state.receiver} handelchange={this.handelChange} label="receiver account"/>
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
   users:state.user.users,
})

const mapDispatchToProps=dispatch=>({

    setFirstUserBalance: currency=>dispatch(setFirstUserBalance(currency)),
    setSecondUserBalance: currency=>dispatch(setSecondUserBalance(currency)),
})

export default connect(mapStateToProps,mapDispatchToProps) (userAction);