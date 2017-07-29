import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    UserListComponent,
    UserDetailsComponent,
    ConnectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    AsyncLocalStorageModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
