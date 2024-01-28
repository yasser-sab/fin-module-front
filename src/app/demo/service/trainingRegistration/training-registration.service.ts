import { Injectable } from '@angular/core';
import TrainingRegistration from '../../models/trainingRegistration';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingRegistrationService {

  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<TrainingRegistration[]>{
    return this.http.get<TrainingRegistration[]>(environment.baseUrl+"/api/training-register")
  }

  sendRequest(trainingRegistration:TrainingRegistration)
  :Observable<TrainingRegistration>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this.http.post<TrainingRegistration>(environment.baseUrl+"/api/training-register",trainingRegistration,{headers});
  }

  accept(id:number):Observable<any>{
    return this.http.delete<any>(environment.baseUrl+`/api/training-register/delete/${id}`)
  }

  deny(id:number):Observable<any>{
    return this.http.delete<any>(environment.baseUrl+`/api/training-register/${id}`)
  }
}