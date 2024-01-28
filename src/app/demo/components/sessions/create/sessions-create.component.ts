import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.service';
import { TrainerService } from 'src/app/demo/service/trainer/trainer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sessions-create',
  templateUrl: './sessions-create.component.html',
  styleUrls: ['./sessions-create.component.scss']
})
export class SessionsCreateComponent {

  sessionsFrom: FormGroup;
  trainerList: any = [];
  companyList: any = [];
  baseUrl = environment.baseUrl;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private trainerService:TrainerService
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
    this.getAllTrainerList();
    this.getAllCompanyList();
  }

  getAllTrainerList() {
    // let apiURL = this.baseUrl + "/api/trainer";

    // let queryParam: any = {};
    // this.authService.sendGetRequest(apiURL, queryParam).subscribe(
    //   (res: any) => {
    //     this.trainerList = res;
    //   }, (error) => {
    //     console.log(error);
    //   }
    // )


  }


  getAllCompanyList() {
    let apiURL = this.baseUrl + "/api/company";

    let queryParam: any = {};
    this.authService.sendGetRequest(apiURL, queryParam).subscribe(
      (res: any) => {
        this.companyList = res;
      }, (error) => {
        console.log(error);
      }
    )
  }


  onSubmit() {
    let apiURL = this.baseUrl + "/api/training-session";

    let formData: any = {};
    formData = this.sessionsFrom.value;
    this.authService.sendPostRequest(apiURL, formData).subscribe(
      (res: any) => {
        this.router.navigate(["/dashboard/sessions"], { relativeTo: this.route });

      }, (error) => {
        console.log(error);
      }
    )
  }

}
