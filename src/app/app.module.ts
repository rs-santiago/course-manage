import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404 } from './error404/error404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,

    CourseListComponent,
    CourseInfoComponent,
    
    StarComponent,
    
    ReplacePipe,
    
    NavBarComponent,
    
    Error404
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'course',
        pathMatch: 'full'
      },
      {
        path: 'course',
        component: CourseListComponent
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent
      },
      {
        path: '**',
        component: Error404
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
