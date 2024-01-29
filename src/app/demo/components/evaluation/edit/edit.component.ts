// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService } from 'src/app/demo/service/auth.service';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'app-evaluation-create',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.scss']
// })
// export class EvaluationCreateComponent {
//   myForm: FormGroup;
//   sessionList: any = [];
//   trainerList:any = [];
//   participantList: any = [];
//   baseUrl = environment.baseUrl;

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private route: ActivatedRoute,
//     private router: Router,) {
//     this.myForm = this.fb.group({

//       participantId: ['', Validators.required],
//       trainingSessionId: ['', Validators.required],
//       registrationDate: ['', Validators.required],
//       pedagogicalQuality: ['', Validators.required],
//       pace: ['', Validators.required],
//       courseSupport: ['', Validators.required],
//       practicalExercises: ['', Validators.required],
//       masteryOfSubject: ['', Validators.required],
//       trainerId: ['', Validators.required],
//     });
//     this.getAllsessionList();
//     this.getAllparticipantList();
//     this.getTrainerList();
//   }

//   getAllsessionList() {
//     let apiURL = this.baseUrl + "/api/training-session";

//     let queryParam: any = {};
//     this.authService.sendGetRequest(apiURL, queryParam).subscribe(
//       (res: any) => {
//         this.sessionList = res;
//       }, (error) => {
//         console.log(error);
//       }
//     )
//   }


//   getTrainerList(){
//     let apiURL = this.baseUrl + "/api/trainer";

//     let queryParam: any = {};
//     this.authService.sendGetRequest(apiURL, queryParam).subscribe(
//       (res: any) => {
//         this.trainerList = res;
//       }, (error) => {
//         console.log(error);
//       }
//     )
//   }

//   getAllparticipantList() {
//     let apiURL = this.baseUrl + "/api/participant";

//     let queryParam: any = {};
//     this.authService.sendGetRequest(apiURL, queryParam).subscribe(
//       (res: any) => {
//         this.participantList = res;
//       }, (error) => {
//         console.log(error);
//       }
//     )
//   }


//   onSubmit() {
//     let apiURL = this.baseUrl + "/api/evaluation";

//     let formData: any = {};
//     formData = this.myForm.value;
//     this.authService.sendPostRequest(apiURL, formData).subscribe(
//       (res: any) => {
//         this.router.navigate(["/dashboard/evaluation"], { relativeTo: this.route });

//       }, (error) => {
//         console.log(error);
//       }
//     )
//   }
// }
