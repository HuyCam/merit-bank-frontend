import ActionType from '../actions/actionType';

export const registerStatus = (state = '', action) => {
    switch(action.type) {
        case ActionType.REGISTER_STATUS:
            return action.payload;
        default:
            return state;
    }
}

export const loginStatus = (state ='', action) => {
    switch(action.type) {
        case ActionType.LOGIN_STATUS:
            return action.payload;
        default:
            return state;
    }
}

export const JWT = (state = null, action) => {
    switch (action.type) {
        case ActionType.JWT:
            return action.payload;
        default:
            return state;
    }
}

export const profile = (state = null, action) => {
    switch (action.type) {
        case ActionType.ADD_PROFILE:
            return action.payload;
        default:
            return state;
    }
}

export const checkings = (state = null, action) => {
    switch (action.type) {
        case ActionType.ADD_CHECKINGS:
            return action.payload;
        case ActionType.ADD_A_CHECKING:
            console.log('data',action.payload);
            let newState = JSON.parse(JSON.stringify(state));
            newState.push(action.payload);
            return newState;
        default:
            return state;
    }
}

export const savings = (state = null, action) => {
    switch (action.type) {
        case ActionType.ADD_SAVINGS:
            return action.payload;
        case ActionType.UPDATE_SAVINGS:
            // let updatedAcc = action.payload;
            // let newState = JSON.parse(JSON.stringify(state));
            // newState = newState.forEach(acc => {
            //     if (acc.id === updatedAcc.id) {
            //         acc = updatedAcc;
            //     }
            // });(acc => {

            // })
            break;
        case ActionType.ADD_A_SAVING:
            let newState = JSON.parse(JSON.stringify(state));
            newState.push(action.payload);
            return newState;
        default:
            return state;
    }
}

export const cds = (state = null, action) => {
    switch (action.type) {
        case ActionType.ADD_CDS:
            return action.payload;
        default:
            return state;
    }
}

export const accHolderRegisterStatus = (state = '', action) => {
    switch(action.type) {
        case ActionType.REGISTER_ACCOUNTHOLDER_STATUS:
            return action.payload;
        default:
            return state;
    }
}

