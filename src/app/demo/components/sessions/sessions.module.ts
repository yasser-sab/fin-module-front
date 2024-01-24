import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsListComponent } from './list/sessions-list.component';
import { SessionsCreateComponent } from './create/sessions-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    SessionsListComponent,
    SessionsCreateComponent
  ],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
    MultiSelectModule
  ]
})
export class SessionsModule { }
