import { Component, OnInit } from '@angular/core';
import TrainingSession from '../../models/trainingSession';
import { TrainingSessionService } from '../../service/trainingSession/training-session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trainingSessions!:TrainingSession[];

  constructor(
    private trainingSessionService:TrainingSessionService
  ){
  }
  ngOnInit(): void {

      this.trainingSessionService.getAll().subscribe(res=>{
        this.trainingSessions=res;
      })
    
  }

  

}
