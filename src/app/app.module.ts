import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './root/components/home/home.component';
import { NavbarComponent } from './root/components/navbar/navbar.component';
import { DeveloperListComponent } from './dashboard/components/developer-list/developer-list.component';
import { DeveloperDetailsComponent } from './dashboard/components/developer-details/developer-details.component';
import { AddEducationComponent } from './profiles/components/add-education/add-education.component';
import { AddExperienceComponent } from './profiles/components/add-experience/add-experience.component';
import { CreateProfileComponent } from './profiles/components/create-profile/create-profile.component';
import { DashboardComponent } from './profiles/components/dashboard/dashboard.component';
import { EditProfileComponent } from './profiles/components/edit-profile/edit-profile.component';
import { CommentsComponent } from './posts/components/comments/comments.component';
import { PostsComponent } from './posts/components/posts/posts.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from './effects/root.effects';
import { ProfileEffects } from './profiles/effects/profile.effects';
import { PostEffects } from './posts/effects/post.effects';
import { UserEffects } from './users/effects/user.effects';
import { DashboardEffects } from './dashboard/effects/dashboard.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DeveloperListComponent,
    DeveloperDetailsComponent,
    AddEducationComponent,
    AddExperienceComponent,
    CreateProfileComponent,
    DashboardComponent,
    EditProfileComponent,
    CommentsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([RootEffects, DashboardEffects, ProfileEffects, PostEffects, UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
