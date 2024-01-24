import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileDemoComponent } from '../../uikit/file/filedemo.component';
import { FileuploadComponent } from './fileupload.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'file', component: FileuploadComponent }
])],
  exports: [RouterModule]
})
export class FileRoutingModule { }

exports: [RouterModule]