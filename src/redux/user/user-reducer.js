const INITAL_STATE = {
   users:'',
   privateKeys:'',
   firstUserBalance:'',
   secondUserBalance:''
}
const userReducer = (state=INITAL_STATE,action) =>{
    switch (action.type) {
            case 'SET_USERS':
                return {
                    ...state,
                    users:action.payload
                }
            case 'SET_PRIVATE_KEYS':
                return {
                    ...state,
                    privateKeys:action.payload
                }
            case 'SET_FIRST_USER_BALANCE':
                return {
                    ...state,
                    firstUserBalance:action.payload
                }
         
            case 'SET_SECOND_USER_BALANCE':
                return {
                    ...state,
                    secondUserBalance:action.payload
                }
         
        default:
            return state;
    }
}

export default userReducer;