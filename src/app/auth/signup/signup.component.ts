import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSignupSubmit(form: NgForm){
    if(!(form.form.get('email')?.hasError("invalid"))){
      this.authService.registerUser({
        email: form.value.email,
        password: form.value.password
      })
    }else{
      this.router.navigate(['/']);
    }
  }

}
