import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-training-registration-create',
  templateUrl: './training-registration-create.component.html',
  styleUrls: ['./training-registration-create.component.scss']
})
export class TrainingRegistrationCreateComponent {
  myForm: FormGroup;
  sessionList: any = [];
  participantList: any = [];
  baseUrl = environment.baseUrl;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,) {
    this.myForm = this.fb.group({
     
      participantId: ['', Validators.required],
      trainingSessionId: ['', Validators.required],
      registrationDate: ['', Validators.required],
    });
    this.getAllsessionList();
    this.getAllparticipantList();
  }

  getAllsessionList() {
    let apiURL = this.baseUrl + "/api/training-session";

    let queryParam: any = {};
    this.authService.sendGetRequest(apiURL, queryParam).subscribe(
      (res: any) => {
        this.sessionList = res;
      }, (error) => {
        console.log(error);
      }
    )
  }


  getAllparticipantList() {
    let apiURL = this.baseUrl + "/api/participant";

    let queryParam: any = {};
    this.authService.sendGetRequest(apiURL, queryParam).subscribe(
      (res: any) => {
        this.participantList = res;
      }, (error) => {
        console.log(error);
      }
    )
  }


  onSubmit() {
    let apiURL = this.baseUrl + "/api/training-register";

    let formData: any = {};
    formData = this.myForm.value;
    this.authService.sendPostRequest(apiURL, formData).subscribe(
      (res: any) => {
        this.router.navigate(["/dashboard/training-registration"], { relativeTo: this.route });

      }, (error) => {
        console.log(error);
      }
    )
  }
}
