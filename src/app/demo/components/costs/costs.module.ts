import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostsRoutingModule } from './costs-routing.module';
import { CostsCreateComponent } from './create/costs-create.component';
import { CostsListComponent } from './list/costs-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    CostsCreateComponent,
    CostsListComponent
  ],
  imports: [
    CommonModule,
    CostsRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
    MultiSelectModule
  ]
})
export class CostsModule { }
