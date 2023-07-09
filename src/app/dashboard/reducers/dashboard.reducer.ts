import { createReducer, on } from '@ngrx/store';
import { IDeveloper } from '../models/IDeveloper';
import * as dashboardActions from '../actions/dashboard.actions';

export const dashboardFeatureKey = 'dashboard';

export interface State {
  developers: IDeveloper[],
  developer: IDeveloper,
  loading: boolean,
  errorMessage: string
}

export const initialState: State = {
  developers: [],
  developer: {} as IDeveloper,
  loading: false,
  errorMessage: ''
};

export const reducer = createReducer(
  initialState,
  on(dashboardActions.loadDevelopers, (state) => {
    return{
      ...state,
      loading: true
    }
  }),

  on(dashboardActions.loadDevelopersSuccess, (state, {developers}) => {
    return{
      ...state,
      loading: false,
      developers: developers
    }
  }),

  on(dashboardActions.loadDevelopersFailure, (state, {error}) => {
    return{
      ...state,
      loading: false,
      errorMessage: error
    }
  }),

  on(dashboardActions.loadDeveloper, (state, {developerId}) => {
    return{
      ...state,
      loading: true
    }
  }),

  on(dashboardActions.loadDeveloperSuccess, (state, {developer}) => {
    return{
      ...state,
      loading: false,
      developer: developer
    }
  }),

  on(dashboardActions.loadDeveloperFailure, (state, {error}) => {
    return{
      ...state,
      loading: false,
      errorMessage: error
    }
  }),
);

