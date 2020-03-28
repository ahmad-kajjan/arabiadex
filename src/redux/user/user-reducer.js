const INITAL_STATE = {
    currentUser:null,
    currencyBalance:null
}
const userReducer = (state=INITAL_STATE,action) =>{
    switch (action.type) {
            case 'SET_CURRENCY_BALANCE':
                return {
                    ...state,
                    currencyBalance:action.payload
                }
            case 'SET_CURRENT_USER':
                return {
                    ...state,
                    currentUser:action.payload
                }
    
        default:
            return state;
    }
}

export default userReducer;