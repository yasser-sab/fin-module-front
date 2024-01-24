import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.scss']
})
export class AddTrainerComponent {

  trainerForm: FormGroup;
  selectedSkillName: any = [];
  baseUrl = environment.baseUrl;

  skills = [
    { id: 1, name: 'Java' },
    { id: 2, name: 'C++' },
    { id: 3, name: 'Php' },
    { id: 4, name: 'Angular' }
    // ... add more skills as needed
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,) {
    this.trainerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      remarks: [''],
      skills: [""]
      // Add more skills as needed
    });



  }

  selectedSkill(event, skill) {
    if (event.currentTarget.checked) {
      this.selectedSkillName.push(skill);
    }
    else {
      this.selectedSkillName = this.selectedSkillName.filter(item => item !== skill);
    }
  }

  onSubmit() {
    let apiURL = this.baseUrl + "/api/trainer";

    const obj = Object.assign(this.trainerForm.value);

    let formData: any = {};
    formData = obj
    formData.skills = this.selectedSkillName;

    this.authService.sendPostRequest(apiURL, formData).subscribe(
      (res: any) => {
        this.router.navigate(["/dashboard/trainer"], { relativeTo: this.route });

      }, (error) => {
        console.log(error);
      }
    )
  }

}
