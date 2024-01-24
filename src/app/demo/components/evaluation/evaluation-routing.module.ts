import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationCreateComponent } from './create/evaluation-create.component';
import { EvaluationListComponent } from './list/evaluation-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: EvaluationListComponent },
    { path: 'create', component: EvaluationCreateComponent }
])],
  exports: [RouterModule]
})
export class EvaluationRoutingModule { }
