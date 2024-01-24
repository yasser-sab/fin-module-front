import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainerComponent } from './add/add-trainer.component';
import { ShowTrainerComponent } from './show/show-trainer.component';
import { EditTrainerComponent } from './edit/edit-trainer.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ShowTrainerComponent },
    { path: 'add', component: AddTrainerComponent },
    { path: 'edit/:id', component: EditTrainerComponent }
])],
  exports: [RouterModule]
})
export class TrainersRoutingModule { }
