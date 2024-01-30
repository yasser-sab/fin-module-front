import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesListComponent } from './list/companies-list.component';
import { CompaniesCreateComponent } from './create/companies-create.component';
import { CompaniesEditComponent } from './edit/edit.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CompaniesListComponent },
    { path: 'create', component: CompaniesCreateComponent },
    { path: 'edit/:id', component: CompaniesEditComponent },
])],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
