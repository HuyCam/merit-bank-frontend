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
        default:
            return state;
    }
}

export const savings = (state = null, action) => {
    switch (action.type) {
        case ActionType.ADD_SAVINGS:
            return action.payload;
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