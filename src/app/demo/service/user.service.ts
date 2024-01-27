import { Injectable } from '@angular/core';
import User from '../models/users';
import Privilege from '../models/privileges';
import Autority from '../models/autority';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Participant from '../models/participants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Trainer from '../models/trainers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!:User;
  
  authorities!:Object;


  constructor(
    private router: Router,
    private http:HttpClient
  ) { 
    this.loadUser();

    this.loadPrivilege();
  }

  login(user:User):Observable<User>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>(environment.baseUrl+"/api/user/login",user,{
      headers
    });
  }

  isItAdmin(){
    this.loadUser();
    
    if(this.user==undefined)
      return false;

    return this.user!.roles.find(ele=>{
      return ele.id=1;
    })!=null;


    
  }

  loadPrivilege(){

    this.authorities={
      "ROLE_ADMIN":[
        {
          "name":"Dashboard",
          "path":"/dashboard",
        },
        {
          "name":"Gestion Formation",
          "path":"/dashboard/sessions",
        },
        {
          "name":"Gestion Formateur",
          "path":"dashboard/trainer",
        },
        {
          "name":"Gestion Assistant",
          "path":"",
        },
        {
          "name":"Demande Participant",
          "path":"/dashboard/training-registration",
        },
        {
          "name":"Gestion Evaluations",
          "path":"/dashboard/evaluation",
        },
        {
          "name":"Gestion Participants",
          "path":"/dashboard/participant",
        }
      ],
      "ROLE_ASSISTANT":[
        {
          "name":"Dashboard",
          "path":"/dashboard",
        },
        {
          "name":"Planifier une Formation",
          "path":"/dashboard/sessions",
        },
        {
          "name":"Gestion Entreprise",
          "path":"/dashboard/companies",
        },
      ],
      "ROLE_PARTICIPANT":[
        {
          "name":"Mes Formation",
          "path":"",
        },
      ],
      "ROLE_TRAINER":[
        {
          "name":"Mes Formation",
          "path":"",
        },
      ],
      "ROLE_TRAINER_EXT":[
        {
          "name":"Mes Formation",
          "path":"",
        },
        // {
        //   "name":"Creer une Formation",
        //   "path":"",
        // },
      ]
    }

  }


  saveParticipant(participant:Participant):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(environment.baseUrl+"/api/participant/save",participant,{headers});
  }

  saveTrainer(trainer:Trainer):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(environment.baseUrl+"/api/trainer",trainer,{headers});
  }

  loadUser(){
    this.user=JSON.parse(localStorage.getItem('user'));
  }

  signout(){
    localStorage.removeItem('user');
    this.router.navigate(["/login"]);
  }
}
