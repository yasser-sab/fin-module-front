import { Injectable } from '@angular/core';
import Trainer from '../../models/trainers';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor() { }

  getAll(){
    return [
      {
        id:12,
        name:"name1",
        email:"wdam",
        remarks:"wdjk",
        skillsList:[
          {
            id:1,
            name:"java",
            description:"desc"
          },
          {
            id:2,
            name:"ts",
            description:"desc"
          },
          {
            id:3,
            name:"c#",
            description:"desc"
          }
        ]
      },
      {
        id:12,
        name:"name1",
        email:"wdam",
        remarks:"wdjk",
        skillsList:[
          {
            id:1,
            name:"java",
            description:"desc"
          },
          {
            id:2,
            name:"ts",
            description:"desc"
          },
          {
            id:3,
            name:"c#",
            description:"desc"
          }
        ]
      }
    ]
  }
  save(trainer:Trainer){

  }
  
}
