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
import { ConfigureHouseComponent } from './configure-house/configure-house.component';
import { TextComponent } from './elements/text/text.component';
import { HouseControlComponent } from './house-control/house-control.component';
import { ItemControlComponent } from './house-control/item-control/item-control.component';
import { ItemComponent } from './house-control/item/item.component';

const appRoutes: Routes = [
  { path: 'configure', component: ConfigureHouseComponent, data: {animation: 'configure'}, },
  { path: 'houseControl', component: HouseControlComponent, data: {animation: 'houseControl'},
    children: [
      {
        path: 'item',
        component: ItemControlComponent,
        data: {animation: 'itemControl'}
      }
    ]},
  { path: 'access', component: AuthHouseComponent, data: {animation: 'access'},
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
    HomeComponent,
    ConfigureHouseComponent,
    TextComponent,
    HouseControlComponent,
    ItemControlComponent,
    ItemComponent
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
