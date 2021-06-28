import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ApiService} from './service/apiservice.service'
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'; 
import {graphComponent} from './graph/graph.component';
import {restApiComponent} from './reApi/restApi.component';

const routes: Routes = [
  { path: 'three', component: graphComponent },
  { path: 'getPost', component: restApiComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
