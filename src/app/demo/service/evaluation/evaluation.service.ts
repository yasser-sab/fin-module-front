import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor() { }

  getAll(){
    return [
      {
        id:1,
        pedagogicalQuality:2,
        pace:1,
        courseSupport:2,
        practicalExercises:12,
        masteryOfSubject:2
      }
    ]
  }
}
