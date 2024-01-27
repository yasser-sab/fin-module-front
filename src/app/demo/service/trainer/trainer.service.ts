import { Injectable } from '@angular/core';
import Trainer from '../../models/trainers';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor() { }

  getAll(){
    return [];
  }
  save(trainer:Trainer){

  }
  
}
