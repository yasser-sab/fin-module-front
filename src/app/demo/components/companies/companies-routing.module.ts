import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesListComponent } from './list/companies-list.component';
import { CompaniesCreateComponent } from './create/companies-create.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CompaniesListComponent },
    { path: 'create', component: CompaniesCreateComponent },
])],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
