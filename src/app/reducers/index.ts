import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as userReducer from '../users/reducers/user.reducer';
import * as profileReducer from '../profiles/reducers/profile.reducer';
import * as postReducer from '../posts/reducers/post.reducer';
import * as dashboardReducer from '../dashboard/reducers/dashboard.reducer';


export interface State {
  [userReducer.userFeatureKey] : userReducer.State,
  [profileReducer.profileFeatureKey] : profileReducer.State,
  [postReducer.postFeatureKey] : postReducer.State,
  [dashboardReducer.dashboardFeatureKey] : dashboardReducer.State
}

export const reducers: ActionReducerMap<State> = {
  [userReducer.userFeatureKey] : userReducer.reducer,
  [profileReducer.profileFeatureKey]: profileReducer.reducer,
  [postReducer.postFeatureKey]: postReducer.reducer,
  [dashboardReducer.dashboardFeatureKey]: dashboardReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
