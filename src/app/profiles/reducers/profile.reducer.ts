import { createReducer, on } from '@ngrx/store';
import * as profileActions  from '../actions/profile.actions';
import { IProfile } from '../models/IProfile';

export const profileFeatureKey = 'profile';

export interface State {
  loading: boolean,
  profile: IProfile,
  errorMessage: string
}

export const initialState: State = {
  loading: false,
  profile: {} as IProfile,
  errorMessage: ''
};

export const reducer = createReducer(
  initialState,
  on(profileActions.loadProfile, (state) => {
    return{
      ...state,
      loading: true
    }
  }),

  on(profileActions.loadProfileSuccess, (state, {profile}) => {
    return{
      ...state,
      loading: false,
      profile: profile
    }
  }),

  on(profileActions.loadProfileFailure, (state, {error}) => {
    return{
      ...state,
      loading: false,
      errorMessage: error
    }
  }),
  //delete education
  on(profileActions.deleteEducation, (state, {eduId}) => {
    return{
      ...state,
      loading: true
    }
  }),

  on(profileActions.deleteEducationSuccess, (state, { result, profile }) => {
    return{
      ...state,
      loading: false,
      profile: profile
    }
  }),

  on(profileActions.deleteEducationFailure, (state, {error}) => {
    return{
      ...state,
      loading: false,
      errorMessage: error
    }
  }),

  //delete experience
  on(profileActions.deleteExperience, (state, {expId}) => {
    return{
      ...state,
      loading: true
    }
  }),

  on(profileActions.deleteExperienceSuccess, (state, { result, profile }) => {
    return{
      ...state,
      loading: false,
      profile: profile
    }
  }),

  on(profileActions.deleteExperienceFailure, (state, {error}) => {
    return{
      ...state,
      loading: false,
      errorMessage: error
    }
  }),

);

