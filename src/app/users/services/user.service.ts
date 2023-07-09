import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { IUser } from '../models/IUser';
import { Observable, catchError, map, of, retry } from 'rxjs';
import { ErrorHandlerUtil } from '../../errorHandlerUtil';
import { State } from '../../reducers';
import { Store } from '@ngrx/store';
import * as userActions from '../actions/user.actions';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  constructor(private httpClient: HttpClient,
              private store: Store<State>) { }

  ngOnInit(): void {
      
  }

  public registerUser(user: IUser):Observable<{msg: string}>{
    let dataUrl = `${environment.apiUrl}/users/register`;
    return this.httpClient.post<{msg: string}>(dataUrl, user).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  public loginUser(user: IUser):Observable<{msg: string, token: string}>{
    let dataUrl = `${environment.apiUrl}/users/login`;
    return this.httpClient.post<{msg: string, token: string}>(dataUrl, user).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }
  //get a users info
  // public getUserInfo(){
  //   let dataUrl = `${environment.apiUrl}/users/`;
  //   return this.httpClient.get<{user: IUser}>(dataUrl).pipe(
  //     retry(1),
  //     catchError(ErrorHandlerUtil.handleError)
  //   )
  // }

  //get a users info
  public getUserInfo():Observable<{user: IUser, error: string}>{
    let dataUrl = `${environment.apiUrl}/users/`;
    return this.httpClient.get<{user: IUser, error: string}>(dataUrl).pipe(
      map((user) => {
        this.store.dispatch(userActions.getUserInfoSuccess( user ));
        return user;
      }),
      catchError(ErrorHandlerUtil.handleError)
  )}

  //logout
  public logoutUser(){
    this.store.dispatch(userActions.logoutUser());
    console.log('Logout Successful');
  }

  //isloggedin
  public isLoggedIn():boolean{
    return !!localStorage.getItem('x-access-token');
  }

  //get token
  public getToken(){
    if(this.isLoggedIn()){
      return localStorage.getItem('x-access-token');
    }
    else{
      return 'No Token Available';
    }
  }
}
