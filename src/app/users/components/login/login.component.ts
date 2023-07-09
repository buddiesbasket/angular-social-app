import { Component, OnInit } from '@angular/core';
import { State } from '../../../reducers';
import { Store } from '@ngrx/store';
import * as userActions from '../../actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public user ={
    name:'',
    email:'',
    password:''
  }
  public showPassword: boolean = false;
  public isEmpty: boolean = false;

  constructor(private store: Store<State>){}

  ngOnInit(): void {
      
  }

  public togglePassword(){
    this.showPassword=!this.showPassword;
  }

  public submitLoginForm(){
    let {email, password} = this.user;
    if(email != '' && password != ''){
      this.store.dispatch(userActions.loginUser({user: this.user}));
      this.isEmpty = false;
    }
    else{
      alert('Please fill all the fields');
      this.isEmpty = true;
    } 
  }
}
