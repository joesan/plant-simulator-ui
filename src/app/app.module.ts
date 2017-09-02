import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {
  ApiService,
  AuthGuard,
  FooterComponent,
  HeaderComponent,
  JwtService,
  ProfilesService,
  SharedModule,
  UserService
} from './shared';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './shared/services/authentication.service';
import { AlertService } from './shared/services/alert.service';
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './shared/services/fake-backend';
import { PowerplantComponent } from './powerplant/powerplant.component';
import { AlertComponent } from './shared/alert/alert.component';
import { PowerPlantService } from './shared/services/powerplant.service';
import { VirtualScrollModule } from 'angular2-virtual-scroll';

// const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    PowerplantComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    VirtualScrollModule,
    routing
  ],
  providers: [
    ApiService,
    AuthGuard,
    JwtService,
    AuthenticationService,
    AlertService,
    ProfilesService,
    UserService,
    PowerPlantService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
