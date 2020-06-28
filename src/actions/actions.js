import ActionType from './actionType';
import {APIs} from './API';
/*
Register page related actions
 */
export const registerUser = (body) => {
    const myInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(body),
        redirect: 'follow'
      };

    return dispatch => {
        dispatch(updateRegisterStatus('PENDING'))
        fetch(APIs.REGISTER_LINK, myInit)
        .then(response => { 
            if (response.status === 201) {
                dispatch(updateRegisterStatus('SUCCESS'));
            } else {
                dispatch(updateRegisterStatus('FAILED'));
            }

            return response.json();
        })
        .then(json => {
            console.log(json);
           
            
        })
    }
}

export const updateRegisterStatus = (status) => {
    return ({
        type: ActionType.REGISTER_STATUS,
        payload: status
    })
}

/*
Sign in related actions
*/
export const signIn = (credentials) => {
    const myInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(credentials),
        redirect: 'follow'
      };
    return dispatch => {
        fetch(APIs.SIGNIN_LINK, myInit)
        .then(response => { 
            if (response.status !== 200) {
                dispatch(updateLoginStatus('FAILED'));
            }

            return response.json();
        })
        .then(data=> {
            if (data.acc) {
                const {id,firstName,middleName,lastName,ssn, email} = data.acc;
                const {checkingAccounts, savingsAccounts, cdaccounts} = data.acc;

                dispatch(addProfile({
                    id,
                    firstName,
                    middleName,
                    lastName,
                    ssn,
                    email
                }))
                dispatch(addSavings(savingsAccounts));
                dispatch(addCheckings(checkingAccounts));
                dispatch(addCDs(cdaccounts));
            }

            if (data.jwt) {
                dispatch(updateJWT(data.jwt));

                dispatch(updateLoginStatus('SUCCESS'));
            }
            return data;
        });
    }
}

export const updateLoginStatus = (status) => {
    return ({
        type: ActionType.LOGIN_STATUS,
        payload: status
    })
}

export const updateJWT = (data) => {
    return ({
        type: ActionType.JWT,
        payload: data
    })
}

export const addProfile = (data) => {
    return ({
        type: ActionType.ADD_PROFILE,
        payload: data
    })
}

const addCheckings = (data) => {
    return ({
        type: ActionType.ADD_CHECKINGS,
        payload: data
    })
}

const addSavings = (data) => {
    return ({
        type: ActionType.ADD_SAVINGS,
        payload: data
    })
}

const addCDs = (data) => {
    return ({
        type: ActionType.ADD_CDS,
        payload: data
    })
}

export const registerAccountHolder = (data, jwt) => {
    const myInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
            'Access-Control-Allow-Origin': '*'
          },
        body: JSON.stringify(data),
        redirect: 'follow'
      };
    return dispatch => {
        dispatch(updateAccHolderRegisterStatus('PENDING'));
        fetch(APIs.REGISTER_ACCOUNT_HOLDER, myInit)
        .then(response => { 
            if (response.status !== 201) {
                dispatch(updateAccHolderRegisterStatus('FAILED'));
            }

            return response.json();
        })
        .then(data=> {
            if (data) {
                console.log(data);
                const {id,firstName,middleName,lastName,ssn, email} = data;
                const {checkingAccounts, savingsAccounts, cdaccounts} = data;

                dispatch(addProfile({
                    id,
                    firstName,
                    middleName,
                    lastName,
                    ssn,
                    email
                }))
                dispatch(addSavings(savingsAccounts));
                dispatch(addCheckings(checkingAccounts));
                dispatch(addCDs(cdaccounts));

                dispatch(updateAccHolderRegisterStatus('SUCCESS'));
            }
        })
        .catch(error => console.log('error', error));;
    }
}

const updateAccHolderRegisterStatus = (status) => {
    return ({
        type: ActionType.REGISTER_ACCOUNTHOLDER_STATUS,
        payload: status
    })
}