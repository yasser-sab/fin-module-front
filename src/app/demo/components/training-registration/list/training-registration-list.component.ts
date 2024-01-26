import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import TrainingRegistration from 'src/app/demo/models/trainingRegistration';
import { TrainingRegistrationService } from 'src/app/demo/service/trainingRegistration/training-registration.service';

@Component({
  selector: 'app-training-registration-list',
  templateUrl: './training-registration-list.component.html',
  styleUrls: ['./training-registration-list.component.scss']
})
export class TrainingRegistrationListComponent {
  trainingRegistrations: TrainingRegistration[] = []; 

  constructor( 
    public router: Router,private http:HttpClient,
    private trainingRegistrationService:TrainingRegistrationService
    ) { }

  ngOnInit() {
    this.trainingRegistrations = this.trainingRegistrationService.getAll();
    // Fetch training session data directly in the component
    // this.http.get<any[]>('http://localhost:8787/api/training-register').subscribe((data) => {
    //   this.trainingRegisterData = data;
    // });
  }

  refuse(){
    // console.log("dahkj");
  }

  validate(){
    // console.log("agjhb");
  }
}
