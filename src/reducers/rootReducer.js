import { combineReducers } from 'redux';
import { dummyData, registerStatus, JWT, loginStatus, cds, checkings, savings, profile, accHolderRegisterStatus} from './reducers';

export const RootReducer = combineReducers({
    dummy: dummyData,
    registerStatus: registerStatus,
    loginStatus,
    accHolderRegisterStatus,
    profile,
    JWT,
    savings,
    checkings,
    cds
});

export default RootReducer;