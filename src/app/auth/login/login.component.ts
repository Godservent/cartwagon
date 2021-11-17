import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onLoginSubmit(form: NgForm){
    if(!(form.form.get('email')?.hasError("invalid"))){
      this.authService.loginUser({
        email: form.value.email,
        password: form.value.password
      })
    }else{
      this.router.navigate(['/']);
    }
  }

}
