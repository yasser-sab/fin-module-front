import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Participant from 'src/app/demo/models/participants';
import { AuthService } from 'src/app/demo/service/auth.service';
import { ParticipantService } from 'src/app/demo/service/participant/participant.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-participant-create',
  templateUrl: './participant-create.component.html',
  styleUrls: ['./participant-create.component.scss']
})
export class ParticipantCreateComponent {

  participant:Participant=new Participant();

  constructor(
    // private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private participantService:ParticipantService,
    private router: Router,) {
    // this.myForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   phoneNumber: ['', Validators.required],
    //   city: ['', Validators.required],
    //   surname: ['', Validators.required],
    //   dateOfBirth: ['', Validators.required],
    // });


  }

  save(){
    this.participant.user.email=this.participant.email;
    this.participant.user.password="1234";
    this.participant.user.username=this.participant.name;


    this.participantService.save(this.participant).subscribe(res=>{
      if(res){
        this.router.navigate(['/dashboard/participant']);
        alert(res.message+" added success !");
      }
      
    })

  }

  onSubmit() {
    // let apiURL = this.baseUrl + "/api/participant";

    // let formData: any = {};
    // formData = this.myForm.value;
    // this.authService.sendPostRequest(apiURL, formData).subscribe(
    //   (res: any) => {
    //     this.router.navigate([""], { relativeTo: this.route });

    //   }, (error) => {
    //     console.log(error);
    //   }
    // )
  }

}
