import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  getAll(){
    return [
      {
        id:1,
        name:"java",
        description:"desc1",
        checked:false
      },
      {
        id:2,
        name:"c#",
        description:"desc1",
        checked:false
      },
      {
        id:3,
        name:"angular",
        description:"desc1",
        checked:false
      },
    ]
  }
}
