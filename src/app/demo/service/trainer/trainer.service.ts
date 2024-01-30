import { Injectable } from '@angular/core';
import Trainer from '../../models/trainers';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Participant from "../../models/participants";

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
  save(trainer:Trainer){

  }
    getByUserId(id: number):Observable<Trainer>{
        return this.http.get<Trainer>(`${environment.baseUrl}/api/trainer/ByUserId/${id}`);
    }
}
