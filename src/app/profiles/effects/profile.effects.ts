import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { ProfileService } from '../services/profile.service';
import * as profileActions  from '../actions/profile.actions';
import * as ProfileReducer from '../reducers/profile.reducer';


@Injectable()
export class ProfileEffects {


  constructor(private actions$: Actions,
              private profileService: ProfileService) {}

  loadDeveloper$ = createEffect(() =>
  this.actions$.pipe(
    ofType(profileActions.loadProfile),
    concatMap((action) => this.profileService.loadProfile().pipe(
      switchMap(({ profile }) => [
        profileActions.loadProfileSuccess({ profile })
      ]),
      catchError((error) => of(profileActions.loadProfileFailure({ error })))
      ))
    )
  ); 

  //delete education
  deleteEducation$ = createEffect(() =>
  this.actions$.pipe(
    ofType(profileActions.deleteEducation),
    mergeMap((action) => this.profileService.deleteEducation(action.eduId).pipe(
      switchMap(({ result, profile }) => [
        profileActions.deleteEducationSuccess({ result, profile })
      ]),
      catchError((error) => of(profileActions.deleteEducationFailure({ error })))
      ))
    )
  ); 

    //delete experience
    deleteExperience$ = createEffect(() =>
    this.actions$.pipe(
      ofType(profileActions.deleteExperience),
      mergeMap((action) => this.profileService.deleteExperience(action.expId).pipe(
        switchMap(({ result, profile }) => [
          profileActions.deleteExperienceSuccess({ result, profile })
        ]),
        catchError((error) => of(profileActions.deleteExperienceFailure({ error })))
        ))
      )
    ); 
}
