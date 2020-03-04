import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  });
  loginError : string;
  loginLoading = false;

  constructor(private route : Router, private authService : AuthService) {
    if(authService.check())
        route.navigate(["admin"])
  }

  ngOnInit(): void {

  }
  onSubmit(){
    if(this.loginForm.valid){
      this.loginError = null;
      this.loginLoading = true;
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          this.loginLoading = false;
          this.authService.registerToken(response.token, response.user);
          this.route.navigate(["admin"])
        },
        (error) => {
          if(error.status === 401 ){            
            this.loginError = error.error.error;
          }else if ( error.status === 0 || error.status === 501 )
            this.loginError = " serviço indisponivel tente mais tarde...";
          this.loginLoading = false;
        });    
      }else
          this.loginError =  '*Os campos devem ser preenchidos';
  }

}
