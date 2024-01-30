import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationRoutingModule } from './evaluation-routing.module';
import { EvaluationCreateComponent } from './create/evaluation-create.component';
import { EvaluationListComponent } from './list/evaluation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    EvaluationCreateComponent,
    EvaluationListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    EvaluationRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
    MultiSelectModule
  ]
})
export class EvaluationModule { }
