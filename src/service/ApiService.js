import {Api,JsonRpc,RpcError} from 'eosjs';
import {JsSignatureProvider} from 'eosjs/dist/eosjs-jssig';
import {eosTestnetApi,eosContractAccountInfo, eosTransferContractAccount} from './Api-Settings';


async function takeAction (api,action,contractaccount,privatekey,actor,datavalue)
{
    const rpc=new JsonRpc(api,{fetch});
    const signatureProvider=new JsSignatureProvider([privatekey]);
    const api=new Api({rpc,signatureProvider,textDecoder :new TextDecoder(),textEncoder:new TextEncoder()});
    try{
        const resultWithConfig = await api.transact({
           actions:[{ 
                account:contractaccount,
                name:action,
                authorization: [{
                    actor:actor,
                     permission:'active',
                    }],
                    data:datavalue,
            }]},
            {
                blocksBehind:3,
                expireSeconds:30,
            });
            return resultWithConfig;
    }
    catch(e){
       return e;
    }
}

async function getAccountCurrency(api,contractaccount,accountName,symbol)
    {
        console.log("currency"+datavalue);
        const rpc=new JsonRpc(api,{fetch});
        try{
            const res=rpc.get_currency_balance(contractaccount,accountName,symbol);
            return res;
        }
        catch(e){
            return e;
        }
    }

async function getTablesInfo(api,datavalue)
{
    const rpc=new JsonRpc(api,{fetch});
        try{
            const res=rpc.get_table_rows({
                                        json:true,
                                        code:datavalue.code,
                                        scope:datavalue.scope,
                                        table:datavalue.table,
                                        lower_bound:datavalue.searchBy,
                                        limit:1,
                                        reverse:false,
                                        show_payer:false});
            return res;
        }
        catch(e){
            return e;
        }
}

class ApiService{
 
   static make_transfer(action,actor,privatekey,datavalue)
   {
        return takeAction(eosTestnetApi.url,action,
                        eosTransferContractAccount.contractAccount,
                        actor,privatekey,datavalue);
   }
   static geteosAccountBalance=(accountName)=>
   {
        
        return getAccountCurrency(eosTestnetApi.url
            ,eosTransferContractAccount.contractAccount
            ,accountName,null);
        
   }
} 

export default ApiService;