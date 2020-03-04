import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/component/modal.component';
import {MatTableDataSource} from '@angular/material/table';
import { AuthService } from './../../../service/auth.service';
import { AdminService } from './../../../service/admin.service';

@Component({
  selector: 'app-editora',
  templateUrl: './editora.component.html',
  styleUrls: ['./editora.component.css']
})
export class EditoraComponent implements OnInit {

  public editoraForm = new FormGroup({
    nome : new FormControl('',[Validators.required]),
    id : new FormControl(null)
  })
  public modalComp = new ModalComponent;

  @Output() setEditora = new EventEmitter<string>();
  public displayedColumns: string[] = ['nome','opcoes'];
  public dataSource: any;
  private updateData = false;

  constructor(
    public adminService : AdminService, 
    private authService : AuthService, 
    ) { }

  ngOnInit(): void {
    this.listarEditoras();
  }
  setData(data : any){
    this.setEditora.emit(data);
    this.dataSource  = new MatTableDataSource(data)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  listarEditoras(){
    this.adminService.getEditora().subscribe((data)=> {
      this.setData(data.result);
}, (error)=> {this.authService.handleErrorWhenLogin(error)});
  }
   public onSubmit(){

    if(this.updateData){
    
     this.adminService.UpdateEditora(this.editoraForm.value.nome,this.editoraForm.value.id).subscribe(
       (response) => { 
         this.adminService.putMessage(response.message); 
         this.setData(response.result);
         this.modalComp.closeOneModal('cadEditora')
         this.updateData = false;
         this.editoraForm.reset();
        },
       (error) =>{  console.log(error)}
     )
    }else{
      this.adminService.registerEditora(this.editoraForm.value).subscribe(
        (response) => {
          this.editoraForm.reset();
          this.adminService.putMessage(response.message);
          this.setData(response.result);
          this.modalComp.closeOneModal('cadEditora')
        },
        (error) => { console.log(error);  })
    }
  }
  onUpdate(data : {nome : string, id : number}){
    this.modalComp.closeOneModal('listEditora');
    this.editoraForm.setValue(data);
    this.modalComp.openOneModal('cadEditora');
    this.updateData = true;
  }
      onDelete(id : number){
        this.adminService.deleteEditora(id).subscribe( (response) => {
          this.adminService.putMessage(response.message);
            this.setData(response.result);
          });
      }
}
