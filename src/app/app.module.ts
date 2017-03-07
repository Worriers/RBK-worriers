import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { GradsComponent } from './grads/grads.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { QaComponent } from './qa/qa.component';
import { AdminComponent } from './admin/admin.component';

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
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'signin', component: MainComponent },
      { path: 'signup', component: MainComponent },
      { path: 'profile/:user', component: ProfileComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'warriors', component: GradsComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'qa', component: QaComponent },
      { path: 'about', component: AboutComponent },
      { path: 'admin', component: QaComponent },
      { path: '**', redirectTo: '/' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
