import { createReducer, on } from '@ngrx/store';
import * as userActions  from '../actions/user.actions';
import { IUser } from '../models/IUser';

export const userFeatureKey = 'user';

export interface State {
  loading: boolean;
  errorMessage: string;
  user: IUser;
  isAuthenticated: boolean;
  token: string;
}

export const initialState: State = {
  loading: false,
  errorMessage: '',
  user: {} as IUser,
  isAuthenticated:false,
  token: ''
};

export const reducer = createReducer(
  initialState,
  //register
  on(userActions.registerUser, (state, {user}) => {
    return{
      ...state,
      loading : true
    }
  }),

  on(userActions.registerUserSuccess, (state, {msg}) => {
    return{
      ...state,
      loading : false
    }
  }),

  on(userActions.registerUserFailure, (state, {error}) => {
    return{
      ...state,
      loading : false,
      errorMessage: error
    }
  }),
  //login
  on(userActions.loginUser, (state, {user}) => {
    return{
      ...state,
      loading : true
    }
  }),

  on(userActions.loginUserSuccess, (state, {msg, token}) => {
    localStorage.setItem('x-access-token', token);
    //console.log(token);
    return{
      ...state,
      loading : false,
      token: token,
      isAuthenticated: true
    }
  }),

  on(userActions.loginUserFailure, (state, {error}) => {
    localStorage.removeItem('x-access-token');
    return{
      ...state,
      loading : false,
      token: '',
      user: {} as IUser,
      isAuthenticated: false,
      errorMessage: error
    }
  }),

  //get user info
  on(userActions.getUserInfo, (state) => {
    return{
      ...state,
      loading : true
    }
  }),

  on(userActions.getUserInfoSuccess, (state, {user}) => {
    return{
      ...state,
      loading : false,
      user: user
    }
  }),

  on(userActions.loginUserFailure, (state, {error}) => {
    return{
      ...state,
      loading : false,
      user: {} as IUser,
      errorMessage: error
    }
  }),

  on(userActions.logoutUser, (state) => {
    localStorage.removeItem('x-access-token');
    return{
      ...state,
      loading : false,
      token: '',
      user: {} as IUser,
      isAuthenticated: false
    }
  }),
);

