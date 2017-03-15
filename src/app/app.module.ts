import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { GradsService } from './shared/grads.service';
import { AuthService } from './shared/auth.service';
import { SignupResolve } from './signup/signup.resolve';
import { ProfileResolve } from './profile/profile.resolve';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './shared/test-data.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { GradsComponent } from './grads/grads.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { QaComponent } from './qa/qa.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProfileComponent,
    ProjectsComponent,
    GradsComponent,
    GalleryComponent,
    AboutComponent,
    QaComponent,
    AdminComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'signup', component: SignupComponent, resolve: {gitHubData: SignupResolve} },
      { path: 'warriors/:user', component: ProfileComponent, resolve: {profileData: ProfileResolve} },
      { path: 'projects', component: ProjectsComponent },
      { path: 'warriors', component: GradsComponent, pathMatch : 'full' },
      { path: 'gallery', component: GalleryComponent },
      { path: 'qa', component: QaComponent },
      { path: 'about', component: AboutComponent },
      { path: 'admin', component: QaComponent },
      { path: '**', component: MainComponent }
    ])
  ],
  providers: [GradsService, AuthService, SignupResolve, ProfileResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
