import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{
  authChange = new Subject<boolean>();//Event Emmiter for Authentication Changes

  private user: User ={email:"",password:""};

  constructor(private router: Router){}

  registerUser(authData : AuthData){
    //signup new user service
    this.user = {
      email: authData.email,
      password: authData.password,
      userID: Math.round(Math.random() *10000).toString()
    }
    this.authChange.next(true);
    if (this.authChange){this.router.navigate(["/dashboard"]);}
  }

  loginUser(authData :AuthData){
    //login user service
    this.user = {
      email: authData.email,
      password: authData.password,
      //userID: Math.round(Math.random() *10000).toString()
    }
    //login status
    if (this.user.email == "test@email.com"){this.authChange.next(true);}
    if (this.authChange){this.router.navigate(["/dashboard"]);}
  }
  logout(){
    this.user ={ email:"",password:""}
    this.authChange.next(false);
    this.router.navigate(["/"]);
  }

  getUser(){
    return {...this.user }
  }

  isAuth(){
    return (this.user.email =="test@gmail.com" && this.user.password=="qqqqqqqq")
    //(this.user.email!="")||(this.user.email!=null)
  }

}
