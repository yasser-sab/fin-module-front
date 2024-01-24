import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRegistrationRoutingModule } from './training-registration-routing.module';
import { TrainingRegistrationCreateComponent } from './create/training-registration-create.component';
import { TrainingRegistrationListComponent } from './list/training-registration-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    TrainingRegistrationCreateComponent,
    TrainingRegistrationListComponent
  ],
  imports: [
    CommonModule,
    TrainingRegistrationRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
    MultiSelectModule
  ]
})
export class TrainingRegistrationModule { }
