import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesComponent } from './profiles.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './effects/profile.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProfilesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProfilesRoutingModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers }),
    EffectsModule.forFeature([ProfileEffects])
  ]
})
export class ProfilesModule { }
