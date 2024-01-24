import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { FileuploadComponent } from './fileupload.component';
import { FileDemoRoutingModule } from '../../uikit/file/filedemo-routing.module';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
  declarations: [
    FileuploadComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule,
    CommonModule,
		FormsModule,
		FileDemoRoutingModule,
		FileUploadModule
  ]
})
export class FileModule { }
