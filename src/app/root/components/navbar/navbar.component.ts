import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/services/user.service';
import * as userActions from '../../../users/actions/user.actions';
import * as userReducer from '../../../users/reducers/user.reducer';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducers';
import { IUser } from 'src/app/users/models/IUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  //public user: IUser = {} as IUser;
  constructor(private userService: UserService,
              private store: Store<State>){}

  ngOnInit(): void {
    // if(this.isLoggedIn()){
    //   this.store.dispatch(userActions.getUserInfo());

    //   this.store.pipe(select(userReducer.userFeatureKey)).subscribe((state) => {
    //     this.user = state.user
    //   });
    // }
      
  }

  // public hasUser():boolean{
  //   return Object.keys(this.user).length > 0;
  // }

  public isLoggedIn():boolean{
    return this.userService.isLoggedIn();
  }

  public clickLogout(){
    //this.userService.logoutUser();
    this.store.dispatch(userActions.logoutUser());
  }
}
