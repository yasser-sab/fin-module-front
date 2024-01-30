import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Evaluation from 'src/app/demo/models/evaluations';
import Participant from 'src/app/demo/models/participants';
import Trainer from 'src/app/demo/models/trainers';
import TrainingSession from 'src/app/demo/models/trainingSession';
import { AuthService } from 'src/app/demo/service/auth.service';
import { EvaluationService } from 'src/app/demo/service/evaluation/evaluation.service';
import { ParticipantService } from 'src/app/demo/service/participant/participant.service';
import { TrainerService } from 'src/app/demo/service/trainer/trainer.service';
import { TrainingSessionService } from 'src/app/demo/service/trainingSession/training-session.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-evaluation-create',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
//   myForm: FormGroup;
//   sessionList: any = [];
//   trainerList:any = [];
//   participantList: any = [];
//   baseUrl = environment.baseUrl;
evaluation: Evaluation=new Evaluation(); 
  trainers:Trainer[]=[];
  participants:Participant[]=[];
  trainingSessions:TrainingSession[]=[];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private evaluationService:EvaluationService,
    private trainerService:TrainerService,
    private participantService:ParticipantService,
    private trainingSessionService:TrainingSessionService,
    private router: Router,) {

        let id:number=Number(this.route.snapshot.paramMap.get('id'));

        this.evaluationService.getById(id).subscribe(res=>{
            this.evaluation=res;
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
  }


  update(){
    this.evaluationService.update(this.evaluation.id,this.evaluation).subscribe(res=>{
        this.router.navigate(['/dashboard/evaluation']);
    })
  }


  onSubmit() {
    // let apiURL = this.baseUrl + "/api/evaluation";

    // let formData: any = {};
    // formData = this.myForm.value;
    // this.authService.sendPostRequest(apiURL, formData).subscribe(
    //   (res: any) => {
    //     this.router.navigate(["/dashboard/evaluation"], { relativeTo: this.route });

    //   }, (error) => {
    //     console.log(error);
    //   }
    // )
  }
}
