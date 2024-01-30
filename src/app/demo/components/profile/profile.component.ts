import { Component } from '@angular/core';
import { UserService } from "../../service/user.service";
import { ParticipantService } from "../../service/participant/participant.service";
import { TrainerService } from "../../service/trainer/trainer.service";
// import
import User from 'src/app/demo/models/users';
import Participant from "../../models/participants";
import Trainer from "../../models/trainers";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    user:User;
    role:String = "";
    phoneNumber:String = "";
    city:String = "";
    remarks:String = "";

    constructor(private userService: UserService, private  trainerService:TrainerService, private participantService: ParticipantService) {
        this.user = this.userService.user;
        this.role = this.user.roles.at(0).name;
    }

    ngOnInit() {
        if (this.role == 'ROLE_PARTICIPANT')
        {
            this.participantService.getByUserId(this.user.id).subscribe((participant: Participant) => {
                this.phoneNumber = participant.phoneNumber;
                this.city = participant.city;
            });
        }
        else if (this.role == 'ROLE_TRAINER')
        {
            this.trainerService.getByUserId(this.user.id).subscribe((trainer: Trainer) => {
                this.remarks = trainer.remarks;

            });
        }
    }


}

