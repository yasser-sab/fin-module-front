import { Component } from '@angular/core';
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

@Component({
  selector: 'app-sessions-create',
  templateUrl: './sessions-create.component.html',
  styleUrls: ['./sessions-create.component.scss']
})
export class SessionsCreateComponent {

  // sessionsFrom: FormGroup;
  trainerList: Trainer[] = [];
  companyList: Company[] = [];
  trainingSession:TrainingSession=new TrainingSession();

  constructor(
    // private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private trainerService:TrainerService,
    private companyService:CompanyService,
    private trainingSessionService:TrainingSessionService
    ) {
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

    this.trainerService.getAll().subscribe(res=>{

      this.trainerList=res;
    });

    this.companyService.getAll().subscribe(res=>{
      this.companyList=res;
    }) 
    
  }

  save(){
    this.trainingSessionService.save(this.trainingSession).subscribe(res=>{

      alert(`${res} added succesfuly !`);

      this.router.navigate(['/dashboard/sessions']);
    })
  }



  onSubmit() {


  }

}
