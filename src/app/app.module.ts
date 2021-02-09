import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Error404 } from './error404/error404.component';
import { CourseMododule } from './courses/course.modele';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseMododule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'course',
        pathMatch: 'full'
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
