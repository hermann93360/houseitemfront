import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectHouseComponent } from './auth-house/connect-house/connect-house.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { NavComponent } from './nav/nav.component';
import { InputComponent } from './elements/input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ButtonComponent } from './elements/button/button.component';
import { AuthHouseComponent } from './auth-house/auth-house.component';
import {RouterModule, Routes} from "@angular/router";
import { RegisterHouseComponent } from './auth-house/register-house/register-house.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'access', component: AuthHouseComponent,
    children: [
      {
        path: 'connect',
        component: ConnectHouseComponent,
        data: {animation: 'connect'}
      },
      {
        path: 'register',
        component: RegisterHouseComponent,
        data: {animation: 'register'}
      },
      {
        path: '',
        component: ConnectHouseComponent,
        data: {animation: 'connect'}
      }
    ]
  },
  { path: '', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ConnectHouseComponent,
    NavComponent,
    InputComponent,
    ButtonComponent,
    AuthHouseComponent,
    RegisterHouseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
