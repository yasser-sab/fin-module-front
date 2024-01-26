import { Injectable } from '@angular/core';
import TrainingRegistration from '../../models/trainingRegistration';

@Injectable({
  providedIn: 'root'
})
export class TrainingRegistrationService {

  constructor() { }

  getAll(){
    return [
      {
        id:1,
        registrationDate:[
          2022,2,2
        ],
        participant:{
          id:1,
          name:"name1",
          surname:"user1",
          dateOfBirth:[
            2022,2,2
          ],
          city:"casa",
          email:"email1",
          phoneNumber:"012390213"
        },
        trainingSession: {
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
      }
    ]
  }
}
