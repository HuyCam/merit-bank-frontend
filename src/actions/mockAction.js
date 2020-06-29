import ActionType from '../actions/actionType';
import APIs from '../actions/API';

export const autoLogin = () => {
    const myInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({username: 'huycam', password: '123'}),
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