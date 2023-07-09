import { Component, OnInit } from '@angular/core';
import { State } from '../../../reducers';
import { Store } from '@ngrx/store';
import * as userActions from '../../actions/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public user ={
    name:'',
    email:'',
    password:''
  }
  public showPassword: boolean = false;
  
  constructor(private store: Store<State>){}

  ngOnInit(): void {
      
  }

  public togglePassword(){
    this.showPassword=!this.showPassword;
  }

  public submitRegisterForm(){
    let {name, email, password} = this.user;
    if(name != '' && email != '' && password != ''){
      this.store.dispatch(userActions.registerUser({user: this.user}));
    }
    else{
      alert('Please fill all the fields');
    }    
  }
}
