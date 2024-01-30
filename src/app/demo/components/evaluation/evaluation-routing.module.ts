import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationCreateComponent } from './create/evaluation-create.component';
import { EvaluationListComponent } from './list/evaluation-list.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: EvaluationListComponent },
    { path: 'create', component: EvaluationCreateComponent },
    { path: 'edit/:id', component: EditComponent }
])],
  exports: [RouterModule]
})
export class EvaluationRoutingModule { }
