import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionsListComponent } from './list/sessions-list.component';
import { SessionsCreateComponent } from './create/sessions-create.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SessionsListComponent },
    { path: 'create', component: SessionsCreateComponent },
])],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
