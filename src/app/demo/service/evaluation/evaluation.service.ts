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

  save(evaluation:Evaluation):Observable<any>{
    return this.http.post<any>(environment.baseUrl+'/api/evaluation',evaluation);
  }

  getById(id:number):Observable<Evaluation>{
    return this.http.get<Evaluation>(environment.baseUrl+`/api/evaluation/${id}`);
  }

  update(id:number,evaluation:Evaluation):Observable<any>{
    return this.http.put<any>(environment.baseUrl+`/api/evaluation/${id}`,evaluation);
  }

}
