
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/component/modal.component';
import {MatTableDataSource} from '@angular/material/table';
import { AuthService } from './../../../service/auth.service';
import { AdminService } from './../../../service/admin.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  public autorForm = new FormGroup({
    nome : new FormControl('',[Validators.required]),
    id : new FormControl(null)
  })
  public modalComp = new ModalComponent;
  public displayedColumns: string[] = ['nome','opcoes'];
  public dataSource: any;
  private updateData = false;
  @Output() setAutor = new EventEmitter<string>();
  constructor(
    public adminService : AdminService, 
    private authService : AuthService, 
    ) { }

  ngOnInit(): void {
    this.listarAutors();
  }
  setData(data : any){
    this.setAutor.emit(data)
    this.dataSource  = new MatTableDataSource(data)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  listarAutors(){
    this.adminService.getAutor().subscribe((data)=> {
      this.setData(data.result);
}, (error)=> {
this.authService.handleErrorWhenLogin(error)
});
  }
   public onSubmit(){

    if(this.updateData){
    
     this.adminService.UpdateAutor(this.autorForm.value.nome,this.autorForm.value.id).subscribe(
       (response) => { 
         this.adminService.putMessage(response.message); 
         this.setData(response.result);
         this.modalComp.closeOneModal('cadAutor')
         this.updateData = false;
         this.autorForm.reset();
        },
       (error) =>{  console.log(error)}
     )
    }else{
      this.adminService.registerAutor(this.autorForm.value).subscribe(
        (response) => {
          this.autorForm.reset();
          this.adminService.putMessage(response.message);
          this.setData(response.result);
          this.modalComp.closeOneModal('cadAutor')
        },
        (error) => { console.log(error);  })
    }
  }
  onUpdate(data : {nome : string, id : number}){
    this.modalComp.closeOneModal('listAutor');
    this.autorForm.setValue(data);
    this.modalComp.openOneModal('cadAutor');
    this.updateData = true;
  }
  onDelete(id : number){
        this.adminService.deleteAutor(id).subscribe( (response) => {
          this.adminService.putMessage(response.message);
            this.setData(response.result);
          });
      }
}
