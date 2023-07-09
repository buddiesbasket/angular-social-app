import { Component, OnInit } from '@angular/core';
import { IDeveloper } from '../../models/IDeveloper';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducers';
import * as dashboardActions from '../../actions/dashboard.actions';
import * as dashboardReducer from '../../reducers/dashboard.reducer';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-developer-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.css']
})
export class DeveloperDetailsComponent implements OnInit{

  public developerId: string;
  public developer: IDeveloper = {} as IDeveloper;
  public loading: boolean = false;

  constructor(private store: Store<State>,
              private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.developerId = param.get('developer_id')
    });
    //dispatch an action
    this.store.dispatch(dashboardActions.loadDeveloper({developerId: this.developerId}));
    //get developer info from redux store
    this.store.pipe(select(dashboardReducer.dashboardFeatureKey)).subscribe((state) => {
      this.developer = state.developer;
      this.loading = state.loading;
    });
  }

  public hasDeveloper():boolean{
    return Object.keys(this.developer).length > 0;
  }
}
