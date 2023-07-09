import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const PostActions = createActionGroup({
  source: 'Post',
  events: {
    'Load Posts': emptyProps(),
    'Load Posts Success': props<{ data: unknown }>(),
    'Load Posts Failure': props<{ error: unknown }>(),
  }
});
