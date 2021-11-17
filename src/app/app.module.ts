import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './fitnesstracker/home/home.component';
import { CurrenttrainingComponent } from './fitnesstracker/currenttraining/currenttraining.component';
import { PasttrainingComponent } from './fitnesstracker/pasttraining/pasttraining.component';
import { NewtrainingComponent } from './fitnesstracker/newtraining/newtraining.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AppRouting } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeheaderComponent,
    HomebodyComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CurrenttrainingComponent,
    PasttrainingComponent,
    NewtrainingComponent,
    MainpageComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouting,
    FlexLayoutModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
