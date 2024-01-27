import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingSessionService } from '../../service/trainingSession/training-session.service';
import TrainingSession from '../../models/trainingSession';
import TrainingRegistration from '../../models/trainingRegistration';
import { TrainingRegistrationService } from '../../service/trainingRegistration/training-registration.service';
import { UserService } from '../../service/user.service';
import Participant from '../../models/participants';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  trainingSession:TrainingSession=new TrainingSession();


  constructor(private route: ActivatedRoute,
    private trainingSessionService:TrainingSessionService,
    private trainingRegistrationService:TrainingRegistrationService,
    private userService:UserService
    ){
      
    
  }

  ngOnInit(): void {
    // Retrieve the id parameter from the route
    let id:number=Number(this.route.snapshot.paramMap.get('id'));
    this.trainingSessionService.getById(id).subscribe(res=>{
      this.trainingSession=res;
    })
    
  }

  enroll(){

    const trainingRegistration:TrainingRegistration=new TrainingRegistration();

    // trainingRegistration.registrationDate=new Date();
    const participant:Participant=new Participant();
    participant.user=this.userService.user;
    trainingRegistration.participant=participant;
    trainingRegistration.trainingSession=this.trainingSession;
    this.trainingRegistrationService.sendRequest(trainingRegistration).subscribe(res=>{
      console.log(res);
    })
  }
}
