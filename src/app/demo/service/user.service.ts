import { Injectable } from '@angular/core';
import User from '../models/users';
import Privilege from '../models/privileges';
import Autority from '../models/autority';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!:User;
  
  authorities!:Object;


  constructor(
    private router: Router
  ) { 
    this.loadUser();
    this.loadPrivilege();
  }

  isItAdmin(){
    this.loadUser();
    
    if(this.user==undefined)
      return false;

    return this.user!.roles.find(ele=>{
      return ele.name.toUpperCase()=="ADMIN";
    })!=null;


    
  }

  loadPrivilege(){

    this.authorities={
      "ADMIN":[
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
      "ASSISTANT":[
        {
          "name":"Planifier une Formation",
          "path":"/dashboard/sessions",
        },
        {
          "name":"Gestion Entreprise",
          "path":"/dashboard/companies",
        },
      ],
      "INDIVIDU":[
        {
          "name":"Mes Formation",
          "path":"",
        },
      ],
      "FORMATEUR":[
        {
          "name":"Mes Formation",
          "path":"",
        },
      ],
      "FORMATEUREXTERN":[
        {
          "name":"Mes Formation",
          "path":"",
        },
        {
          "name":"Creer une Formation",
          "path":"",
        },
      ]
    }

  }

  loadUser(){
    this.user=JSON.parse(localStorage.getItem('user'));
  }

  signout(){
    localStorage.removeItem('user');
    this.router.navigate(["/login"]);
  }
}
