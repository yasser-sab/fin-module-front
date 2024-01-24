import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient,
    private router : Router
    ) {

     }

     public uploadFile(file: any) {
      const formData = new FormData();
      formData.append('file', file);
      console.log("On Authservice"+file)
      return this.http.post(`${environment.baseUrl+'/api/file/saveFile'}`, formData);
     }

    //get  file by id passing id on param
    public getFile(id:any){
      return this.http.get(`${environment.baseUrl+'/api/file/getFile'}/${id}`);
    }
     
}
