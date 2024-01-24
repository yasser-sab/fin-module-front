import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingRegistrationListComponent } from './list/training-registration-list.component';
import { TrainingRegistrationCreateComponent } from './create/training-registration-create.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: TrainingRegistrationListComponent },
    { path: 'create', component: TrainingRegistrationCreateComponent }
])],
  exports: [RouterModule]
})
export class TrainingRegistrationRoutingModule { }
