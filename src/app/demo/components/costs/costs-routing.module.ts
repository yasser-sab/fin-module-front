import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostsListComponent } from './list/costs-list.component';
import { CostsCreateComponent } from './create/costs-create.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CostsListComponent },
    { path: 'create', component: CostsCreateComponent },
])],
  exports: [RouterModule]
})
export class CostsRoutingModule { }
