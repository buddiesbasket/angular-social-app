import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { IProfile } from '../models/IProfile';

// export const ProfileActions = createActionGroup({
//   source: 'Profile',
//   events: {
//     'Load Profiles': emptyProps(),
//     'Load Profiles Success': props<{ data: unknown }>(),
//     'Load Profiles Failure': props<{ error: unknown }>(),
//   }
// });

//Load Profile
export const loadProfile = createAction(
  '[Profile] Load Profile'
);

export const loadProfileSuccess = createAction(
  '[Profile] Load Profile Success',
  props<{profile: IProfile}>()
);

export const loadProfileFailure = createAction(
  '[Profile] Load Profile Failure',
  props<{error: string}>()
);

//Delete Experience
export const deleteExperience = createAction(
  '[Profile] Delete Experience',
  props<{expId: string}>()
);

export const deleteExperienceSuccess = createAction(
  '[Profile] Delete Experience Success',
  props<{result: string, profile: IProfile}>()
);

export const deleteExperienceFailure = createAction(
  '[Profile] Delete Experience Failure',
  props<{error: string}>()
);

//Delete Education
export const deleteEducation = createAction(
  '[Profile] Delete Education',
  props<{eduId: string}>()
);

export const deleteEducationSuccess = createAction(
  '[Profile] Delete Education Success',
  props<{result: string, profile: IProfile}>()
);

export const deleteEducationFailure = createAction(
  '[Profile] Delete Education Failure',
  props<{error: string}>()
);