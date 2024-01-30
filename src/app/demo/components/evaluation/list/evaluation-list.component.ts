import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Evaluation from 'src/app/demo/models/evaluations';
import Participant from 'src/app/demo/models/participants';
import Trainer from 'src/app/demo/models/trainers';
import TrainingSession from 'src/app/demo/models/trainingSession';
import { EvaluationService } from 'src/app/demo/service/evaluation/evaluation.service';
import { ParticipantService } from 'src/app/demo/service/participant/participant.service';
import { TrainerService } from 'src/app/demo/service/trainer/trainer.service';
import { TrainingSessionService } from 'src/app/demo/service/trainingSession/training-session.service';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.scss']
})
export class EvaluationListComponent {
  evaluations: Evaluation[] = []; 
  trainers:Trainer[]=[];
  participants:Participant[]=[];
  trainingSessions:TrainingSession[]=[];

  constructor( 
    public router: Router,
    private evaluationService:EvaluationService,
    private trainerService:TrainerService,
    private participantService:ParticipantService,
    private trainingSessionService:TrainingSessionService
    ) { 
      this.evaluationService.getAll().subscribe(res=>{
        this.evaluations=res;
      })
  
  
      this.trainerService.getAll().subscribe(res=>{
        this.trainers=res;
        
      });
  
      this.participantService.getAll().subscribe(res=>{
        this.participants=res;
      })
  
      this.trainingSessionService.getAll().subscribe(res=>{
        this.trainingSessions=res;
      })
    }

  ngOnInit() {
    

  


  }

  getTrainerById(id:number):Trainer{
    if(this.trainers.length<=0)
      return new Trainer();

    return this.trainers.find(ele=>ele.id==id);
  }

  getParticipantById(id:number):Participant{
    if(this.participants.length<=0)
      return new Participant();
    
    return this.participants.find(ele=>ele.id==id);
  }

  getTrainingSessionById(id:number):TrainingSession{
    if(this.trainingSessions.length<=0)
      return new TrainingSession();
    
    return this.trainingSessions.find(ele=>ele.id==id);
  }

  
}
