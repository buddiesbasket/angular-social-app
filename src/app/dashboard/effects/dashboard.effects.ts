import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of, switchMap, tap } from 'rxjs';
import * as dashboardActions from '../actions/dashboard.actions';
import { UserService } from 'src/app/users/services/user.service';
import { DashboardService } from '../services/dashboard.service';



@Injectable()
export class DashboardEffects {


  constructor(private actions$: Actions,
              private dashboardService: DashboardService) {}

  loadDevelopers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(dashboardActions.loadDevelopers),
    concatMap((action) => this.dashboardService.loadDevelopers().pipe(
      switchMap(({ developers }) => [
        dashboardActions.loadDevelopersSuccess({ developers })
      ]),
      catchError((error) => of(dashboardActions.loadDevelopersFailure({ error })))
      ))
    )
  ); 

  loadDeveloper$ = createEffect(() =>
  this.actions$.pipe(
    ofType(dashboardActions.loadDeveloper),
    concatMap((action) => this.dashboardService.loadDeveloper(action.developerId).pipe(
      switchMap(({ developer }) => [
        dashboardActions.loadDeveloperSuccess({ developer })
      ]),
      catchError((error) => of(dashboardActions.loadDeveloperFailure({ error })))
      ))
    )
  ); 
}
