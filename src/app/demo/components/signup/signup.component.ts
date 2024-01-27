import { ChangeDetectorRef, Component } from '@angular/core';
import Participant from '../../models/participants';
import Trainer from '../../models/trainers';
import User from '../../models/users';
import { TimeScale } from 'chart.js';
import { SkillService } from '../../service/skill/skill.service';
import Skill from '../../models/skills';
import { UserService } from '../../service/user.service';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isItTrainer:string="false";

  participant:Participant=new Participant();
  trainer:Trainer=new Trainer();
  skills!:Skill[];
  user:User=new User();

  constructor(private skillService:SkillService,
    private userService:UserService,
    private router:Router
    ){
    this.skills = this.skillService.getAll();
  }

  getCheckedSkills(){
    return this.skills.filter(ele=>{
      return ele.checked==true;
    })
  }

  signup(){
    if(this.isItTrainer=="false"){
      this.participant.user=this.user;

      this.userService.saveParticipant(this.participant).subscribe(res=>{
        alert(res!.message);
        this.router.navigate(["/login"]);
      })
    }
    else{
      this.trainer.user=this.user;
      this.trainer.skillsList=this.getCheckedSkills();

      this.userService.saveTrainer(this.trainer).subscribe(res=>{
        alert(res!.message);
        this.router.navigate(["/login"]);
      })
    }
  }

}
