import { createReducer, on } from '@ngrx/store';
import { PostActions } from '../actions/post.actions';

export const postFeatureKey = 'post';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

