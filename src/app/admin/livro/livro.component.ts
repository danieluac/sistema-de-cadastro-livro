import { CategoriaComponent } from './categoria/categoria.component';
import { AuthService } from './../../service/auth.service';
import { AdminService } from './../../service/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/component/modal.component';
import {MatTableDataSource} from '@angular/material/table';




@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  livroForm = new FormGroup({
    titulo : new FormControl('',[Validators.required]),
    isbn : new FormControl('',[Validators.required]),
    edicao : new FormControl('',[Validators.required]),
    quantidade : new FormControl('',[Validators.required]),
    anolancamento : new FormControl('',[Validators.required]),
    categoria : new FormControl('',[Validators.required]),
    editora : new FormControl('',[Validators.required]),
    autor : new FormControl('',[Validators.required]),
    id : new FormControl(null),
    foto : new FormControl(null),
    created_at : new FormControl(null),
    updated_at : new FormControl(null),
  });
  autorData : any;
  editoraData : any;
  categoriaData : any;
  public displayedColumns: string[] = ['titulo','isbn','edicao','quantidade','categoria','acao'];
  public dataSource: any;
  public btnTitulo : string = "Cadastrar livro";
  public showFormLivro  :  boolean  = false;
  public updateData = false;
  public loadingLivroData = true;
  authorizeChild = false;
  //classe para modal - modal
  public modalComp = new ModalComponent()
  @ViewChild(CategoriaComponent) categoria;
  message : any;
  constructor(private adminService : AdminService,private authService : AuthService) { }

  ngOnInit(): void {
    this.listarlivros();
    
  }
  receiveCategoria($event) {
    this.categoriaData = $event;
  }
  receiveEditora($event) {
    this.editoraData = $event;
  }
  receiveAutor($event) {
    this.autorData = $event;
  }
  ngAfterContentInit() {
    
     this.authorizeChild = true
  }
  setData(data : any){
    this.dataSource  = new MatTableDataSource(data)
  }
  listarlivros(){
          this.adminService.getLivro().subscribe((data)=> {
            this.setData(data.result);
            this.loadingLivroData = false;
      }, (error)=> {
            this.authService.handleErrorWhenLogin(error)
      });
  }
  public onSubmit(){

    if(this.updateData){
    
     this.adminService.UpdateLivro(this.livroForm.value).subscribe(
       (response) => { 
         this.adminService.putMessage(response.message); 
         this.setData(response.result);
         this.updateData = false;
         this.livroForm.reset();
         this.setFormLivro();
        },
       (error) =>{ }
     )
    }else{
      this.adminService.registerLivro(this.livroForm.value).subscribe(
        (respo) => {
          this.setData(respo.result);
          this.adminService.putMessage(respo.message);
          this.livroForm.reset();
        },
        (error) => { })
    }
  }
  onUpdate(data : any){
    this.setFormLivro();
    this.livroForm.setValue(data);
    this.showFormLivro = true;
    this.updateData = true;
  }
  onDelete(id : number){
    this.adminService.deleteLivro(id).subscribe( (response) => {
      this.adminService.putMessage(response.message);
        this.setData(response.result);
      },    
       (error) =>{ });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  setFormLivro() {
    if(this.showFormLivro === false)
    {
      this.showFormLivro = true ;
      this.btnTitulo = ' Listar Livros';
    }
    else {
      this.showFormLivro = false;
      this.btnTitulo = ' Cadastrar Livro';
    }
  }

}
