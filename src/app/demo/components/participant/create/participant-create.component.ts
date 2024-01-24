import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-participant-create',
  templateUrl: './participant-create.component.html',
  styleUrls: ['./participant-create.component.scss']
})
export class ParticipantCreateComponent {
  myForm: FormGroup;
  baseUrl = environment.baseUrl;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      city: ['', Validators.required],
      surname: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
    });



  }

  onSubmit() {
    let apiURL = this.baseUrl + "/api/participant";

    let formData: any = {};
    formData = this.myForm.value;
    this.authService.sendPostRequest(apiURL, formData).subscribe(
      (res: any) => {
        this.router.navigate([""], { relativeTo: this.route });

      }, (error) => {
        console.log(error);
      }
    )
  }

}
