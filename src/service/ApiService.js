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
                    data:{from:datavalue.from,quantity:datavalue.quantity},
            }]},
            {
                blocksBehind:3,
                expireSeconds:30,
            });
            console.log(resultWithConfig);
    }
    catch(e){
        console.log('\nCaught exception: ' + e);
        if (e instanceof RpcError)
        console.log(JSON.stringify(e.json, null, 2));
    }
}

async function getAccountinfo (datavalue)
{
    const rpc=new JsonRpc('http://jungle2.cryptolions.io:80',{fetch});
    try{
        const res=rpc.get_account(datavalue.from);  
        return res;
    }
    catch(e){
        console.log('\nCaught exception: ' + e);
        if (e instanceof RpcError)
        console.log(JSON.stringify(e.json, null, 2));
    }
    
}

async function getAccountCurrency(datavalue)
    {
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
    const privatekey=datavalue.privatekey;
    console.log(privatekey);    
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
        console.log(res);
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
       takeAction("buy",{from:from,quantity:quantity});                        
    }

    static sell({from,quantity})
    {   
        takeAction("sell",{from:from,quantity:quantity});                    
    }
    static accountInfo(userName)
    {
         return getAccountinfo({from:userName});
    }
   
    static  accountCurrency()
    {
        return getAccountCurrency({from:"jungledexts1",symbol:"EOS"});
    }
    static addPermission({from,quantity})
    {
        setPermission({from:from,privatekey:quantity});
    }
}

export default ApiService;