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
    this.trainingRegistrationService.getAll().subscribe(res=>{
      this.trainingRegistrations=res;
    })
  }

  deny(id:number){
    this.trainingRegistrationService.deny(id).subscribe(res=>{
      this.deleteById(Number(res));
      alert(res);
    })
  }

  accept(id:number){
    this.trainingRegistrationService.accept(id).subscribe(res=>{
      this.deleteById(Number(res));
      alert(res);
    })
  }

  deleteById(id:number){
    this.trainingRegistrations=this.trainingRegistrations.filter(ele=>{
      return ele.id!=id;
    })
  }
}
