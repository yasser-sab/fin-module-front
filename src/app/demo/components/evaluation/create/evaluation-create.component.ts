import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Company from 'src/app/demo/models/companies';
import Evaluation from 'src/app/demo/models/evaluations';
import Participant from 'src/app/demo/models/participants';
import Trainer from 'src/app/demo/models/trainers';
import TrainingSession from 'src/app/demo/models/trainingSession';
import { AuthService } from 'src/app/demo/service/auth.service';
import { CompanyService } from 'src/app/demo/service/company/company.service';
import { EvaluationService } from 'src/app/demo/service/evaluation/evaluation.service';
import { ParticipantService } from 'src/app/demo/service/participant/participant.service';
import { TrainerService } from 'src/app/demo/service/trainer/trainer.service';
import { TrainingSessionService } from 'src/app/demo/service/trainingSession/training-session.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-evaluation-create',
  templateUrl: './evaluation-create.component.html',
  styleUrls: ['./evaluation-create.component.scss']
})
export class EvaluationCreateComponent {
  // myForm: FormGroup;
  // sessionList: any = [];
  // trainerList:any = [];
  // participantList: any = [];
  // baseUrl = environment.baseUrl;

  trainers!:Trainer[];
  trainingSessions!:TrainingSession[];
  participants!:Participant[];
  evaluation:Evaluation=new Evaluation();

  constructor(
    // private fb: FormBuilder,
    // private authService: AuthService,
    private route: ActivatedRoute,
    private trainerService:TrainerService,
    private participantService:ParticipantService,
    private trainingSessionService:TrainingSessionService,
    private evaluationService:EvaluationService,
    private router: Router
    ) {
    // this.myForm = this.fb.group({

    //   participantId: ['', Validators.required],
    //   trainingSessionId: ['', Validators.required],
    //   registrationDate: ['', Validators.required],
    //   pedagogicalQuality: ['', Validators.required],
    //   pace: ['', Validators.required],
    //   courseSupport: ['', Validators.required],
    //   practicalExercises: ['', Validators.required],
    //   masteryOfSubject: ['', Validators.required],
    //   trainerId: ['', Validators.required],
    // });
    // this.getAllsessionList();
    // this.getAllparticipantList();
    // this.getTrainerList();

    this.trainerService.getAll().subscribe(res=>{
      this.trainers=res;
    })

    this.participantService.getAll().subscribe(res=>{
      this.participants=res;
    })
    this.trainingSessionService.getAll().subscribe(res=>{
      this.trainingSessions=res;
    })
  }


  save(){
    this.evaluationService.save(this.evaluation).subscribe(res=>{
      alert(res);
      this.router.navigate(['/dashboard/evaluation']);
    })
  }

  onSubmit() {

  }
}
