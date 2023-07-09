import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/users/models/IUser';
import * as userActions from '../../../users/actions/user.actions';
import * as userReducer from '../../../users/reducers/user.reducer';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducers';
import * as profileActions  from '../../actions/profile.actions';
import * as ProfileReducer from '../../reducers/profile.reducer';
import { IProfile } from '../../models/IProfile';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  //public user: IUser = {} as IUser;
  public profile: IProfile = {} as IProfile;
  public loading: boolean;
  constructor(public store: Store<State>,
              public userService: UserService){}

  ngOnInit(): void {
      // this.store.dispatch(userActions.getUserInfo());
      // //get user info from Ngrx store
      // this.store.pipe(select(userReducer.userFeatureKey)).subscribe((state) => {
      //   this.user = state.user
      // });

      // this.store.pipe(select((state) => state.user)).subscribe((state) => {
      //   this.user = state.user;
      //   this.loading = state.loading;
      // });

      //profile
      this.store.dispatch(profileActions.loadProfile());

      this.store.pipe(select(ProfileReducer.profileFeatureKey)).subscribe((state) => {
        this.profile = state.profile,
        this.loading = state.loading
      })
  }

  public hasProfile():boolean{
    return Object.keys(this.profile).length > 0;
  }

  public isLoggedIn():boolean{
    return this.userService.isLoggedIn();
  }

}
