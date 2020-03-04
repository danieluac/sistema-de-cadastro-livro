import { LivroComponent } from './livro/livro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path : 'admin', redirectTo: 'admin/dashboard', pathMatch: "full"},
  {path : 'admin/dashboard', component : DashboardComponent},
  {path : 'admin/livros', component : LivroComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
