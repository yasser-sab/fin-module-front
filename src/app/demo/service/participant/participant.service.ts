import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor() { }

  getAll(){
    return [
      {
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
    ]
  }
}
