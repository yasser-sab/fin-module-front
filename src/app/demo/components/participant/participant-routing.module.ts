import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantListComponent } from './list/participant-list.component';
import { ParticipantCreateComponent } from './create/participant-create.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ParticipantListComponent },
    { path: 'create', component: ParticipantCreateComponent },
])],
  exports: [RouterModule]
})
export class ParticipantRoutingModule { }
