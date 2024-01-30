import { Injectable } from '@angular/core';
import Trainer from '../../models/trainers';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<Trainer[]>{
    return this.http.get<Trainer[]>(environment.baseUrl+"/api/trainer");
  }
  save(trainer:Trainer):Observable<Trainer>{
    return this.http.post<Trainer>(environment.baseUrl+"/api/trainer",trainer);
  }

  getById(id:number):Observable<Trainer>{
    return this.http.get<Trainer>(environment.baseUrl+`/api/trainer/${id}`);
  }

  update(id:number,trainer:Trainer):Observable<any>{
    return this.http.put<any>(environment.baseUrl+`/api/trainer/${id}`,trainer);
  }
  
}
