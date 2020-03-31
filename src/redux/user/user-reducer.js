const INITAL_STATE = {
    firstUser:null,
    firstUserPrivateKey:null,
    firstUserBalance:null,
    secondUser:null,
    secondUserPrivateKey:null,
    secondUserBalance:null,
    contractUser:null,
    contractUserPrivateKey:null,
    contractUserBalance:null
}
const userReducer = (state=INITAL_STATE,action) =>{
    switch (action.type) {
            case 'SET_FIRST_USER_BALANCE':
                return {
                    ...state,
                    firstUserBalance:action.payload
                }
            case 'SET_FIRST_USER':
                return {
                    ...state,
                    firstUser:action.payload
                }
            case 'SET_FIRST_USER_PRIVATE_KEY':
                return {
                    ...state,
                    firstUserPrivateKey:action.payload
                }
            case 'SET_SECOND_USER':
                return {
                    ...state,
                    secondUser:action.payload
                }
            case 'SET_SECOND_USER_PRIVATE_KEY':
                return {
                    ...state,
                    secondUserPrivateKey:action.payload
                }
            case 'SET_SECOND_USER_BALANCE':
                return {
                    ...state,
                    secondUserBalance:action.payload
                }
            case 'SET_CONTRACT_USER':
                return {
                     ...state,
                    contractUser:action.payload
                 }
            case 'SET_CONTRACT_USER_PRIVATE_KEY':
                return {
                    ...state,
                    contractUserPrivateKey:action.payload
                }
            case 'SET_SECOND_USER_BALANCE':
                return {
                    ...state,
                    contractUserBalance:action.payload
               }                           
        
        default:
            return state;
    }
}

export default userReducer;