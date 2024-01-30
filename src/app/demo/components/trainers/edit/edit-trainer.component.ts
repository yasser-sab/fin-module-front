import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Skill from 'src/app/demo/models/skills';
import Trainer from 'src/app/demo/models/trainers';
import { AuthService } from 'src/app/demo/service/auth.service';
import { SkillService } from 'src/app/demo/service/skill/skill.service';
import { TrainerService } from 'src/app/demo/service/trainer/trainer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-trainer',
  templateUrl: './edit-trainer.component.html',
  styleUrls: ['./edit-trainer.component.scss']
})
export class EditTrainerComponent {

  // trainerForm: FormGroup;
  // myData:any = [];
  // selectedSkillName: any = [];
  // baseUrl = environment.baseUrl;

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
    // private authService: AuthService,
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



  }

  getCheckedSkills(){
    return this.skills.filter(ele=>{
      return ele.checked==true;
    })
  }

  skillsHas(id:number):boolean{

    let arr:Skill[]=[];
    arr=this.trainer.skills.filter(res=>{
      return res=>res.id===id;
    });

    console.log(arr.length);
    return arr.length>0;
  }

  ngOnInit(): void {
    let id:number=Number(this.route.snapshot.paramMap.get('id'));
    this.trainerService.getById(id).subscribe(res=>{
      this.trainer=res;
    })
    this.skillService.getAll().subscribe(res=>{
      this.skills=res;
    })
    // this.getFormData();
  }

  update(){
    this.trainer.skills=[];
    this.trainerService.update(this.trainer.id,this.trainer).subscribe(res=>{
      alert(res);
      this.router.navigate(['/dashboard/trainer']);
    })
  }

  // getFormData(){

  //   let id = this.route.snapshot.params['id'];
  //   let apiURL = this.baseUrl + "/api/trainer/" + id;

  //   let queryParams: any = {};

  //   this.authService.sendGetRequest(apiURL, queryParams).subscribe(
  //     (response: any) => {
  //       this.myData = response;
  //       this.trainerForm.patchValue(this.myData);
  //     },
  //     (error) => {
  //     }
  //   );

  // }


  // selectedSkill(event, skill) {
  //   if (event.currentTarget.checked) {
  //     this.selectedSkillName.push(skill);
  //   }
  //   else {
  //     this.selectedSkillName = this.selectedSkillName.filter(item => item !== skill);
  //   }
  // }

  onSubmit() {
    // let id = this.route.snapshot.params['id'];
    // let apiURL = this.baseUrl + "/api/trainer/" +id;

    // const obj = Object.assign(this.trainerForm.value);

    // let formData: any = {};
    // formData = obj
    // formData.skills = this.selectedSkillName;

    // this.authService.sendPutRequest(apiURL, formData).subscribe(
    //   (res: any) => {
    //     this.router.navigate(["/dashboard/trainer"], { relativeTo: this.route });

    //   }, (error) => {
    //     console.log(error);
    //   }
    // )
  }
}
