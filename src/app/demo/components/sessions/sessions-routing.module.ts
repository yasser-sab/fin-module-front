import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionsListComponent } from './list/sessions-list.component';
import { SessionsCreateComponent } from './create/sessions-create.component';
import { SessionsEditComponent } from './edit/edit.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SessionsListComponent },
    { path: 'create', component: SessionsCreateComponent },
    { path: 'edit/:id', component: SessionsEditComponent },
])],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
