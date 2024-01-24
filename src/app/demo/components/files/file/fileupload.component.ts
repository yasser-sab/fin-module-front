import { Component } from '@angular/core';
import { FileService } from './file.service';
import { AuthService } from 'src/app/demo/service/auth.service';



@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {

  uploadedFiles: any[] = [];
  id:any;
  fileContent: string;

  constructor(private fileService: FileService) {}

  onUpload(event: any) {
      for (const file of event.files) {
          this.uploadedFiles.push(file);
          console.log(file);
      }

     
  }

  onSubmit() {
    if (this.uploadedFiles.length > 0) {
      const fileToUpload = this.uploadedFiles[0];
      console.log("onSubmit");
      this.fileService.uploadFile(fileToUpload).subscribe(
        (res) => {
          this.id=res;
          console.log(res);
          alert("File uploaded successfully.");
          // Optionally, you can reset the uploadedFiles array after successful upload
          this.uploadedFiles = [];
          //reload page
          window.location.reload();
        
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log("No file selected for upload.");
    }


    this.fileService.getFile(this.id).subscribe(
      (file: File) => {
        // Handle the file data here
        console.log('File data:', file);
        // You can assign the file to a variable, update the UI, etc.
      },
      (error) => {
        // Handle errors here
        console.error('Error fetching file:', error);
      }
    );



  }
  


}
