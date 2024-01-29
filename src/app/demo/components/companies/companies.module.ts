import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesCreateComponent } from './create/companies-create.component';
import { CompaniesListComponent } from './list/companies-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
// import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    CompaniesCreateComponent,
    CompaniesListComponent
    // EditComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
    MultiSelectModule
  ]
})
export class CompaniesModule { }
