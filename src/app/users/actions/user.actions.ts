import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from '../models/IUser';

// export const UserActions = createActionGroup({
//   source: 'User',
//   events: {
//     'Load Users': emptyProps(),
//     'Load Users Success': props<{ data: unknown }>(),
//     'Load Users Failure': props<{ error: unknown }>(),
//   }
// });

export const registerUser = createAction(
  '[User] Register user',
  props<{ user: IUser }>()
);

export const registerUserSuccess = createAction(
  '[User] Register user Success',
  props<{ msg: string }>()
);

export const registerUserFailure = createAction(
  '[User] Register user Success',
  props<{ error: string }>()
);

export const loginUser = createAction(
  '[User] Login user',
  props<{ user: IUser }>()
);

export const loginUserSuccess = createAction(
  '[User] Login user Success',
  props<{ msg: string, token: string }>()
);

export const loginUserFailure = createAction(
  '[User] Login user Success',
  props<{ error: string }>()
);

export const getUserInfo = createAction(
  '[User] Get User Info'
);

export const getUserInfoSuccess = createAction(
  '[User] Get User Info Success',
  props<{ user: IUser }>()
);

export const getUserInfoFailure = createAction(
  '[User] Get User Info',
  props<{ error: string }>()
);

export const logoutUser = createAction(
  '[User] Logout User'
);