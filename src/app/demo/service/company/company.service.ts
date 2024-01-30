import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Company from '../../models/company';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getAll():Observable<Company[]>{

    return this.httpClient.get<Company[]>(environment.baseUrl+"/api/company");
  }

  getById(id:number):Observable<Company>{
    return this.httpClient.get<Company>(environment.baseUrl+`/api/company/${id}`);
  }

  update(id:number,company:Company):Observable<Company>{
    return this.httpClient.put<Company>(environment.baseUrl+`/api/company/${id}`,company);
  }

  save(company:Company):Observable<any>{
    return this.httpClient.post<any>(environment.baseUrl+'/api/company',company);
  }
}
