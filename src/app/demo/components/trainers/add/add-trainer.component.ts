import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Skill from 'src/app/demo/models/skills';
import Trainer from 'src/app/demo/models/trainers';
import User from 'src/app/demo/models/users';
import { AuthService } from 'src/app/demo/service/auth.service';
import { SkillService } from 'src/app/demo/service/skill/skill.service';
import { TrainerService } from 'src/app/demo/service/trainer/trainer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.scss']
})
export class AddTrainerComponent {

  // trainerForm: FormGroup;
  // selectedSkillName: any = [];

  trainer:Trainer=new Trainer();
  skills:Skill[]=[];


  // skills = [
  //   { id: 1, name: 'Java' },
  //   { id: 2, name: 'C++' },
  //   { id: 3, name: 'Php' },
  //   { id: 4, name: 'Angular' }
  //   // ... add more skills as needed
  // ];

  constructor(
    // private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private skillService:SkillService,
    private trainerService:TrainerService,
    private router: Router
    ) {
    // this.trainerForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   remarks: [''],
    //   skills: [""]
    //   // Add more skills as needed
    // });

    this.skillService.getAll().subscribe(res=>{
      this.skills=res;
    })


  }

  // selectedSkill(event, skill) {
  //   if (event.currentTarget.checked) {
  //     this.selectedSkillName.push(skill);
  //   }
  //   else {
  //     this.selectedSkillName = this.selectedSkillName.filter(item => item !== skill);
  //   }
  // }

  getCheckedSkills(){
    return this.skills.filter(ele=>{
      return ele.checked==true;
    })
  }

  save(){
    const user:User=new User();
    
    user.email=this.trainer.email;
    user.username=this.trainer.name;
    user.password="1234";

    this.trainer.user=user;

    this.trainer.skillsList=this.getCheckedSkills();
    this
    
    this.trainerService.save(this.trainer).subscribe(res=>{
      alert(res);
    })
  }

  onSubmit() {
    // let apiURL = this.baseUrl + "/api/trainer";

    // const obj = Object.assign(this.trainerForm.value);

    // let formData: any = {};
    // formData = obj
    // formData.skills = this.selectedSkillName;

    // this.authService.sendPostRequest(apiURL, formData).subscribe(
    //   (res: any) => {
    //     this.router.navigate(["/dashboard/trainer"], { relativeTo: this.route });

    //   }, (error) => {
    //     console.log(error);
    //   }
    // )
  }

}
