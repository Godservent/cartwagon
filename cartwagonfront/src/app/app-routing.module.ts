import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { MainpageComponent } from "./mainpage/mainpage.component";

const routes: Routes = [
  {path :"" , component: MainpageComponent},
  {path: "auth/login", component: LoginComponent},
  {path: "auth/signup", component: SignupComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouting{}
