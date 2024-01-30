import { Injectable } from '@angular/core';
import Trainer from '../../models/trainers';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import TrainingSession from '../../models/trainingSession';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getAll():Observable<TrainingSession[]>{
    return this.httpClient.get<TrainingSession[]>(environment.baseUrl+"/api/training-session");

  }

  getById(id:number){
    return this.httpClient.get<TrainingSession>(environment.baseUrl+`/api/training-session/${id}`);
  }

  save(trainingSession:TrainingSession):Observable<TrainingSession>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this.httpClient.post<TrainingSession>(environment.baseUrl+"/api/training-session",trainingSession,{
      headers
    })
  }

  update(id:number,trainingSession:TrainingSession):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this.httpClient.put<any>(environment.baseUrl+`/api/training-session/${id}`,trainingSession);
  }
}
