import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DeveloperListComponent } from './components/developer-list/developer-list.component';
import { DeveloperDetailsComponent } from './components/developer-details/developer-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'developer-list', component: DeveloperListComponent },
  { path: ':developer_id', component: DeveloperDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
