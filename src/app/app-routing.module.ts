import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./fitnesstracker/home/home.component";
import { MainpageComponent } from "./mainpage/mainpage.component";

const routes: Routes = [
  {path :"" , component: MainpageComponent},
  {path: "auth/login", component: LoginComponent},
  {path: "auth/signup", component: SignupComponent},
  {path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path: "fitnesstrainer", component: HomeComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers: [AuthGuard]
})
export class AppRouting{}
