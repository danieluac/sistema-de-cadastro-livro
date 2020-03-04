import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { User } from '../auth/intafaces/user';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient, private router : Router, private snackBar : MatSnackBar) { }

  public login(credentials : { email : string, password: string}){

    return this.http.post<any>(environment.API_ROOT_URL+'auth/login',credentials);
    
  }
  public registerUser (credentials : {email : string,password: string,name : string}){
    return this.http.post(environment.API_ROOT_URL+'auth/register',credentials);
  }
  public registerToken(token, user){
    localStorage.setItem("token", token);
    localStorage.setItem("user", btoa(JSON.stringify(user)));
  }
  public handleErrorWhenLogin(error : any){
    if(error.status === 401)
    {
      localStorage.clear();
      this.router.navigate(['auth/login']);
    }
  }
  public logOut() : void {
    this.http.get(environment.API_ROOT_URL+"auth/logout", 
    { headers: {"Authorization" : 'Bearer '+this.getToken()} }).subscribe(
      (resp) => {
        localStorage.clear();
        this.router.navigate(['auth/login']);
      },
      (error) => {
        this.handleErrorWhenLogin(error);
      }
    );
  }
  public getToken(){
    return localStorage.getItem('token')? "Bearer "+localStorage.getItem('token') : null;
  }
  public getUser() : User{
    return localStorage.getItem('user')? JSON.parse(atob(localStorage.getItem("user"))) : null;
  }
  public check(): boolean{
    return (localStorage.getItem("token") && localStorage.getItem("user") )? true : false 
  }
}
