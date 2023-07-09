import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { IDeveloper } from '../models/IDeveloper';

// export const DashboardActions = createActionGroup({
//   source: 'Dashboard',
//   events: {
//     'Load Dashboards': emptyProps(),
//     'Load Dashboards Success': props<{ data: unknown }>(),
//     'Load Dashboards Failure': props<{ error: unknown }>(),
//   }
// });

export const loadDevelopers = createAction(
  '[Dashboard] Load Developers'
);

export const loadDevelopersSuccess = createAction(
  '[Dashboard] Load Developers Success',
  props<{ developers: IDeveloper[] }>()
);

export const loadDevelopersFailure = createAction(
  '[Dashboard] Load Developers Failure',
  props<{ error: string }>()
)

export const loadDeveloper = createAction(
  '[Dashboard] Load Developer',
  props<{developerId: string }>()
);

export const loadDeveloperSuccess = createAction(
  '[Dashboard] Load Developer Success',
  props<{ developer: IDeveloper }>()
);

export const loadDeveloperFailure = createAction(
  '[Dashboard] Load Developer Failure',
  props<{ error: string }>()
)