import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainersRoutingModule } from './trainers-routing.module';
import { AddTrainerComponent } from './add/add-trainer.component';
import { ShowTrainerComponent } from './show/show-trainer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MultiSelectModule } from 'primeng/multiselect';
import { EditTrainerComponent } from './edit/edit-trainer.component';


@NgModule({
  declarations: [
    AddTrainerComponent,
    ShowTrainerComponent,
    EditTrainerComponent
  ],
  imports: [
    CommonModule,
    TrainersRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
    MultiSelectModule
  ]
})
export class TrainersModule { }
