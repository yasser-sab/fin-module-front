import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantListComponent } from './list/participant-list.component';
import { ParticipantCreateComponent } from './create/participant-create.component';
import { ParticipantEditComponent } from './edit/edit.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ParticipantListComponent },
    { path: 'create', component: ParticipantCreateComponent },
    { path: 'edit/:id', component: ParticipantEditComponent }
])],
  exports: [RouterModule]
})
export class ParticipantRoutingModule { }
