import {Api,JsonRpc,RpcError} from 'eosjs';
import {JsSignatureProvider} from 'eosjs/dist/eosjs-jssig';
async function takeAction (action,datavalue)
{
    const privatekey="5JTnHdR2g8K8eizSeVdLYV4jEMZZv5FqZraSuFXLxH1b8efTR5b";
    const rpc=new JsonRpc('http://jungle2.cryptolions.io:80',{fetch});
    const signatureProvider=new JsSignatureProvider([privatekey]);
    const api=new Api({rpc,signatureProvider,textDecoder :new TextDecoder(),textEncoder:new TextEncoder()});
    try{
        const resultWithConfig = await api.transact({
           actions:[{ 
                account:"jungledex151",
                name:action,
                authorization: [{
                    actor:datavalue.from,
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
        console.log('\nCaught exception: ' + e);
        if (e instanceof RpcError)
        console.log(JSON.stringify(e.json, null, 2));
    }
}

async function getAccountCurrency(datavalue)
    {
        console.log("currency"+datavalue);
        const rpc=new JsonRpc('http://jungle2.cryptolions.io:80',{fetch});
        try{
            const res=rpc.get_currency_balance("eosio.token",datavalue.from,datavalue.symbol)
            return res;
        }
        catch(e){
            console.log('\nCaught exception: ' + e);
            if (e instanceof RpcError)
            console.log(JSON.stringify(e.json, null, 2));
        }
    }

async function setPermission(datavalue)
{
    console.log("Permission data"+datavalue);
    const privatekey=datavalue.privatekey;   
    const rpc=new JsonRpc('http://jungle2.cryptolions.io:80',{fetch});
    const signatureProvider=new JsSignatureProvider([privatekey]);
    const api=new Api({rpc,signatureProvider,textDecoder :new TextDecoder(),textEncoder:new TextEncoder()});
    try{
        const res= await api.transact({
            actions: [{
                account: 'eosio',
                name: 'updateauth',
                authorization: [{
                    actor: datavalue.from, 
                    permission: 'active',
                }],
                data: {
                    account: datavalue.from,  
                    permission: "active",
                    parent: 'owner',
                    auth: {
                        "threshold": 1,
                        "keys": [{
                            "key": "EOS5ZE9hYW9CFqkA99eLeDXLQKxxdpPLfdi2Ps4YpHbKFczcc4QKk",
                            "weight": 1
                        }],
                        "accounts": [{
                            "permission": {
                                "actor": "jungledex151",
                                "permission": "eosio.code"
                            },
                            "weight": 1
                        }],
                        "waits":"",
                    }
                }
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        });
            return res;
      
    }catch(e){
        console.log('\nCaught exception: ' + e);
        if (e instanceof RpcError)
        console.log(JSON.stringify(e.json, null, 2));
    }
}
async function findAccount(user)
{
    console.log("findAccount func"+user);
    const rpc=new JsonRpc('http://jungle2.cryptolions.io:80',{fetch});
        try{
            const res=rpc.get_table_rows({
                                        json:true,
                                        code:"jungledex151",
                                        scope:"jungledex151",
                                        table:"accounttable",
                                        lower_bound:user,
                                        limit:1,
                                        reverse:false,
                                        show_payer:false});
            return res;
        }
        catch(e){
            console.log('\nCaught exception: ' + e);
            if (e instanceof RpcError)
            console.log(JSON.stringify(e.json, null, 2));
        }
}

class ApiService{
    static buy({from,quantity})
    {   
         return  takeAction("buy",{from:from,quantity:quantity});                        
    }

    static sell({from,quantity})
    {   
        return takeAction("sell",{from:from,quantity:quantity});                    
    }
  
    static  accountCurrency({from:from})
    {
        return getAccountCurrency({from:from});
    }

    static login({from:from})
    {
        return findAccount(from);
       
    }
    
    static addPermission({from,privatekey}){
        const res=setPermission({from,privatekey});
        res.then(()=>{
            const result=takeAction("signin",{from:from});
        })
    }
} 

export default ApiService;