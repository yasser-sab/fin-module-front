import { ChangeDetectorRef, Component } from '@angular/core';
import Participant from '../../models/participants';
import Trainer from '../../models/trainers';
import User from '../../models/users';
import { TimeScale } from 'chart.js';
import { SkillService } from '../../service/skill/skill.service';
import Skill from '../../models/skills';

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

  constructor(private skillService:SkillService){
    this.skills = this.skillService.getAll();
  }

}
