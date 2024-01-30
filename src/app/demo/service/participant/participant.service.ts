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

  getByUserId(id: number):Observable<Participant>{
      return this.http.get<Participant>(`${environment.baseUrl}/api/participant/ByUserId/${id}`);
  }


}
