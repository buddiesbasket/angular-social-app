import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType  } from '@ngrx/effects';
import * as userActions  from '../actions/user.actions';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { catchError, concatMap, map, mergeMap, of, switchMap, tap } from 'rxjs';


@Injectable()
export class UserEffects {


  constructor(private actions$: Actions,
              private userService: UserService,
              private router: Router) {}

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.registerUser),
      concatMap((action) => this.userService.registerUser(action.user).pipe(
        switchMap(({ msg }) => [ userActions.registerUserSuccess({ msg }) ]),
        catchError((error) => of(userActions.registerUserFailure({ error })))
      ))
    )
  );        
  
  loginUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(userActions.loginUser),
    concatMap((action) => this.userService.loginUser(action.user).pipe(
      switchMap(({ msg, token }) => [
        userActions.loginUserSuccess({ msg, token }),
        userActions.getUserInfo()
      ]),
      catchError((error) => of(userActions.loginUserFailure({ error })))
    ))
  )
);  

// updateAddress$ = createEffect(() =>
// this.actions$.pipe(
//   ofType(userActions.updateAddress),
//   concatMap((action) => this.userService.updateAddress(action.address).pipe(
//     map(({ result, user }) => userActions.updateAddressSuccess({ result, user })),
//     catchError((error) => of(userActions.updateAddressFailure({ error })))
//   ))
// )
// );  

//registration success -> redirect to login page
registerUserSuccess$ = createEffect(() =>
this.actions$.pipe(
  ofType(userActions.registerUserSuccess),
  tap(() => this.router.navigate(['/users/login']))
),
{ dispatch: false }
);

//login success -> redirect to home page
loginUserSuccess$ = createEffect(() =>
this.actions$.pipe(
  ofType(userActions.loginUserSuccess),
  tap(({ token }) => localStorage.setItem('x-access-token', token)),
  tap(() => this.router.navigate(['/']))
),
{ dispatch: false }
);

getUserInfo$ = createEffect(() =>
  this.actions$.pipe(
    ofType(userActions.getUserInfo),
    mergeMap((action) => this.userService.getUserInfo().pipe(
      map(({ user }) => 
        userActions.getUserInfoSuccess({ user })
      ),
      catchError((error) => of(userActions.getUserInfoFailure({ error })))
      ))
    )
  );
}
