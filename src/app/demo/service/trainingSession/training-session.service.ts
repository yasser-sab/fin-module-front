import { Injectable } from '@angular/core';
import Trainer from '../../models/trainers';
import { Observable } from 'rxjs';
import TrainingSession from '../../models/trainingSession';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getAll():Observable<TrainingSession>{
    return this.httpClient.get<TrainingSession>(environment.baseUrl+"/api/training-session");

  }
}
