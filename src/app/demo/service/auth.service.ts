import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, retry } from 'rxjs';
import { LocalstorageService } from 'src/app/_shared/localstorage.service';
import { environment } from 'src/environments/environment';
import { LoginRequest, User } from '../api/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatusSubject: BehaviorSubject<boolean>;
  loginStatusSubject$: Observable<boolean>;
  currentUser$: Observable<any>;
  currentUserSubject: BehaviorSubject<any>;
  unsubscribe: Subscription[] = [];
  clearTimeout: any;

  baseUrl = environment.baseUrl+'/api/auth';

  constructor(
    private http: HttpClient,
    private router : Router,
    private localstorageService: LocalstorageService
    ) { }


    public login(formData:LoginRequest): Observable<Object>{
      console.log("On Authservice"+formData)
      return this.http.post(`${this.baseUrl}`+'/signin', formData);
    }

    public getUserById(id: number): Observable<User>{
      return this.http.get<User>(`${environment.baseUrl+'/api/user'}/${id}`);
    }

    public sendGetRequest(apiURL, queryParams){
  
      console.log("@sendGetRequest");
      return this.http.get(apiURL, {params: queryParams});
  
    }
  
    public sendPostRequest(apiURL, formData)
    {
      console.log("@sendPostRequest");
      return this.http.post(apiURL, formData);
    }
  
    public sendPutRequest(apiURL, formData){
  
      console.log("@sendPutRequest");
      return this.http.put(apiURL, formData);
  
    }
  
    public sendDeleteRequest(apiURL, formData){
  
      console.log("@sendDeleteRequest");
      return this.http.delete(apiURL, formData);
  
    }
    
}
