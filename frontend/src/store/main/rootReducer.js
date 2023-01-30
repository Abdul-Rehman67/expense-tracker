import { combineReducers } from '@reduxjs/toolkit';
import { userLoginReducer,userRegisterReducer } from '../reducers/auth';
// import user from './userSlice';

const rootReducer = combineReducers({
  userLogin:userLoginReducer,
  userRegister:userRegisterReducer
});

export default rootReducer;