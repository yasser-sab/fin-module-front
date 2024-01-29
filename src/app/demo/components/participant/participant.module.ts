import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantCreateComponent } from './create/participant-create.component';
import { ParticipantListComponent } from './list/participant-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
// import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    ParticipantCreateComponent,
    ParticipantListComponent
    // EditComponent
  ],
  imports: [
    CommonModule,
    ParticipantRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
    MultiSelectModule
  ]
})
export class ParticipantModule { }
