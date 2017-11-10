import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// used to create fake backend
import { fakeBackendProvider } from '../shared/helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app-routing.module';

import { AuthGuard } from '../shared/guard/index';
import { AuthenticationService, UserService } from  '../shared/services/index';
import { LoginComponent, RequestNewPasswordComponent, } from './auth/index';
import { DashboardComponent } from './dashboard/index';
import { NotfoundComponent } from './notfound/index';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotfoundComponent,
    RequestNewPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    // providers user to fcreate backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
