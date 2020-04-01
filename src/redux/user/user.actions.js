export const setUsers= users=>({
    type:'SET_USERS',
    payload:users
});
export const setPrivateKeys= keys=>({
    type:'SET_PRIVATE_KEYS',
    payload:keys
});
export const setFirstUserBalance= currency=>({
    type:'SET_FIRST_USER_BALANCE',
    payload:currency
});
export const setSecondUserBalance= currency=>({
    type:'SET_SECOND_USER_BALANCE',
    payload:currency
});
