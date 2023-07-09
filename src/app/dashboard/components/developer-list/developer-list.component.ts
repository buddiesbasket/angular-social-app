import { Component, OnInit } from '@angular/core';
import { IDeveloper } from '../../models/IDeveloper';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducers';
import * as dashboardActions from '../../actions/dashboard.actions';
import * as dashboardReducer from '../../reducers/dashboard.reducer';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit{

  public developers: IDeveloper[] = [] as IDeveloper[];
  public loading: boolean = false;

  constructor(private store: Store<State>){}

  ngOnInit(): void {
    //dispatch an action
    this.store.dispatch(dashboardActions.loadDevelopers());
    //get developer info from redux store
    this.store.pipe(select(dashboardReducer.dashboardFeatureKey)).subscribe((state) => {
      this.developers = state.developers;
      this.loading = state.loading;
    });
      
  }

}
