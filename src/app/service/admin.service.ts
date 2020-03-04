
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient, private auth : AuthService, private snackBar : MatSnackBar) { }

  public putMessage(sms : string) : void{
    this.snackBar.open(sms,"",{
      panelClass: 'snackbar',duration: 1000, 
      horizontalPosition : "center", verticalPosition :'bottom'
    });
  }

  public registerCategoria(data : {nome : string}){

    return this.http.post<any>(environment.API_ROOT_URL+"livro/categoria",data,
      { headers : {"Authorization" :this.auth.getToken()}});
  }
  public deleteCategoria(id : number){
    return this.http.delete<any>(environment.API_ROOT_URL+"livro/categoria/"+id,
    { headers : {"Authorization" :this.auth.getToken()}});
  }
  public UpdateCategoria(nome : string, id : number){
    return this.http.post<any>(environment.API_ROOT_URL+"livro/categoria/"+id,{nome :nome, "_method": "put"},
    { headers : {"Authorization" :this.auth.getToken()}});
  }

  public getCategoria(): any{
    return this.http.get<any>(environment.API_ROOT_URL+"livro/categoria",
      { headers : {"Authorization" :this.auth.getToken()}});
  } 
  public getTotalEstatistica(): any{
    return this.http.get<any>(environment.API_ROOT_URL+"livro/livro/total-estatistica",
      { headers : {"Authorization" :this.auth.getToken()}});
  }
  public registerEditora(data : {nome : string}){

    return this.http.post<any>(environment.API_ROOT_URL+"livro/editora",data,
      { headers : {"Authorization" :this.auth.getToken()}});
  }
  public deleteEditora(id : number){
    return this.http.delete<any>(environment.API_ROOT_URL+"livro/editora/"+id,
    { headers : {"Authorization" :this.auth.getToken()}});
  }
  public UpdateEditora(nome : string, id : number){
    return this.http.post<any>(environment.API_ROOT_URL+"livro/editora/"+id,{nome :nome, "_method": "put"},
    { headers : {"Authorization" :this.auth.getToken()}});
  }
  public getEditora(): any{
    return this.http.get<any>(environment.API_ROOT_URL+"livro/editora",
      { headers : {"Authorization" :this.auth.getToken()}});
  }
  public registerAutor(data : {nome : string}){

    return this.http.post<any>(environment.API_ROOT_URL+"livro/autor",data,
      { headers : {"Authorization" :this.auth.getToken()}});
  }
  public deleteAutor(id : number){
    return this.http.delete<any>(environment.API_ROOT_URL+"livro/autor/"+id,
    { headers : {"Authorization" :this.auth.getToken()}});
  }
  public UpdateAutor(nome : string, id : number){
    return this.http.post<any>(environment.API_ROOT_URL+"livro/autor/"+id,{nome :nome, "_method": "put"},
    { headers : {"Authorization" :this.auth.getToken()}});
  }
  public getAutor(): any{
    return this.http.get<any>(environment.API_ROOT_URL+"livro/autor",
      { headers : {"Authorization" :this.auth.getToken()}});
  }

  public registerLivro(data : {nome : string}){

    return this.http.post<any>(environment.API_ROOT_URL+"livro/livro",data,
      { headers : {"Authorization" :this.auth.getToken()}});
  }
  public deleteLivro(id : number){
    return this.http.delete<any>(environment.API_ROOT_URL+"livro/livro/"+id,
    { headers : {"Authorization" :this.auth.getToken()}});
  }
  public UpdateLivro(data :any){
    return this.http.post<any>(environment.API_ROOT_URL+"livro/livro/"+data.id,{
      titulo : data.titulo, 
      isbn: data.isbn, 
      quantidade: data.quantidade, 
      anolancamento: data.anolancamento,
      editora: data.edicao, 
      categoria: data.categoria, 
      edicao : data.edicao, autor : data.autor,
      "_method": "put"},
    { headers : {"Authorization" :this.auth.getToken()}});
  }
  public getLivro(): any{
    return this.http.get<any>(environment.API_ROOT_URL+"livro/livro",
      { headers : {"Authorization" :this.auth.getToken()}});
  }
}
