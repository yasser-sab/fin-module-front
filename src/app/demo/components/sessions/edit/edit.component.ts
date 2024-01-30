import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Company from 'src/app/demo/models/company';
import Trainer from 'src/app/demo/models/trainers';
import TrainingSession from 'src/app/demo/models/trainingSession';
import { AuthService } from 'src/app/demo/service/auth.service';
import { CompanyService } from 'src/app/demo/service/company/company.service';
import { TrainerService } from 'src/app/demo/service/trainer/trainer.service';
import { TrainingSessionService } from 'src/app/demo/service/trainingSession/training-session.service';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-sessions-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class SessionsEditComponent implements OnInit {

//   sessionsFrom: FormGroup;
//   trainerList: any = [];
//   companyList: any = [];
//   baseUrl = environment.baseUrl;
trainerList: Trainer[] = [];
  companyList: Company[] = [];

trainingSession:TrainingSession=new TrainingSession();
  constructor(

    // private fb: FormBuilder,
    // private authService: AuthService,
    private route: ActivatedRoute,
    private trainingSessionService:TrainingSessionService,
    private trainerService:TrainerService,
    private companyService:CompanyService,
    private router: Router,
    // private trainerService:TrainerService
    ) {

        // this.trainingSession.startDate = this.datePipe.transform(new Date(this.trainingSession.startDate[0],this.trainingSession.startDate[1],this.trainingSession.startDate[2]), 'yyyy-MM-dd');
    // this.sessionsFrom = this.fb.group({
    //   title: ['', Validators.required],
    //   hours: ['', Validators.required],
    //   cost: ['', Validators.required],
    //   objectives: ['', Validators.required],
    //   program: ['', Validators.required],
    //   companyId: ['', Validators.required],
    //   trainerId: ['', Validators.required],
    //   endDate: ['', Validators.required],
    //   startDate: ['', Validators.required],
    // });
    // this.getAllTrainerList();
    // this.getAllCompanyList();
  }



ngOnInit(): void {
    let id:number=Number(this.route.snapshot.paramMap.get('id'));

    this.trainingSessionService.getById(id).subscribe(res=>{
        this.trainingSession=res;
    })

    this.trainerService.getAll().subscribe(res=>{

        this.trainerList=res;
      });
  
      this.companyService.getAll().subscribe(res=>{
        this.companyList=res;
      }) 
}


  update(){
    console.log(this.trainingSession);
    this.trainingSessionService.update(this.trainingSession.id,this.trainingSession).subscribe(res=>{
        alert(res);
        this.router.navigate(['dashboard/sessions']);
    })
  }






}
