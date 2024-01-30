import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Participant from '../../models/participants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<Participant[]>{
    return this.http.get<Participant[]>(environment.baseUrl+"/api/participant");
  }

  save(participant:Participant):Observable<any>{

    


    return this.http.post<any>(environment.baseUrl+"/api/participant/save",participant);
  }

  update(id:number,participant:Participant):Observable<any>{
    return this.http.put<any>(environment.baseUrl+`/api/participant/${id}`,participant);
  }

  getById(id:number):Observable<Participant>{
    return this.http.get<Participant>(environment.baseUrl+`/api/participant/${id}`);
  }
}
