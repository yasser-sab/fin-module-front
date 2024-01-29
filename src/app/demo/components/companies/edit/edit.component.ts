// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService } from 'src/app/demo/service/auth.service';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'app-companies-create',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.scss']
// })
// export class CompaniesCreateComponent {

//   myForm: FormGroup;
//   baseUrl = environment.baseUrl;

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private route: ActivatedRoute,
//     private router: Router,) {
//     this.myForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', Validators.required],
//       phoneNumber: ['', Validators.required],
//       address: ['', Validators.required],
//       url: ['', Validators.required],
//     });



//   }

//   onSubmit() {
//     let apiURL = this.baseUrl + "/api/company";

//     let formData: any = {};
//     formData = this.myForm.value;
//     this.authService.sendPostRequest(apiURL, formData).subscribe(
//       (res: any) => {
//         this.router.navigate(["/dashboard/companies"], { relativeTo: this.route });

//       }, (error) => {
//         console.log(error);
//       }
//     )
//   }

// }
