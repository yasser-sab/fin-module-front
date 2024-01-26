import { Injectable } from '@angular/core';
import Trainer from '../../models/trainers';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  constructor() { }

  getAll(){
    return [
      {
        id:1,
        title:"title1",
        hours:20,
        cost:22,
        objectives:"wdjk",
        program:"programe1",
        trainer:{
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
        company:{
          id:1,
          name:"name1",
          address:"wqajk",
          phoneNumber:"ajk",
          url:"dajk",
          email:"wauj",
          trainingSessions:[]
        },
        startDate:[
          2022,
          1,
          1
        ],
        endDate:[
          2022,
          1,
          1
        ]
      }
    ]
  }
}
