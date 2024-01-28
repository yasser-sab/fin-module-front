import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Skill from '../../models/skills';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getAll():Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(environment.baseUrl+"/api/skill");
  }
}
