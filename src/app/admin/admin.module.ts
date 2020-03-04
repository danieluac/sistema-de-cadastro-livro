import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LivroComponent } from './livro/livro.component';
import { AutorComponent } from './livro/autor/autor.component';
import { CategoriaComponent } from './livro/categoria/categoria.component';
import { EditoraComponent } from './livro/editora/editora.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    DashboardComponent, 
    HeaderComponent, 
    LivroComponent, 
    AutorComponent, 
    CategoriaComponent, 
    EditoraComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule, MatSnackBarModule, MatIconModule
  ]
})
export class AdminModule { }
