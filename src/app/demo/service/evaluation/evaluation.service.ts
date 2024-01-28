import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Evaluation from '../../models/evaluations';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<Evaluation[]>{
    
    return this.http.get<Evaluation[]>(environment.baseUrl+"/api/evaluation");
  }
}
