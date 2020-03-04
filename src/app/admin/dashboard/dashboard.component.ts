import { AdminService } from './../../service/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public livro;
  public autor;
  public categoria;
  public editora;
  constructor(private admin : AdminService) { }

  ngOnInit(): void {
    this.totalData();
  }
  totalData(){
    this.admin.getTotalEstatistica().subscribe(
      (response) =>{
        this.livro = response.result.livro;
        this.categoria = response.result.categoria;
        this.editora = response.result.editora;
        this.autor = response.result.autor;
      }
    )
  }

}
