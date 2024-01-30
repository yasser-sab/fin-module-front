import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Participant from 'src/app/demo/models/participants';
import { AuthService } from 'src/app/demo/service/auth.service';
import { ParticipantService } from 'src/app/demo/service/participant/participant.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-participant-create',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class ParticipantEditComponent implements OnInit {

  participant:Participant=new Participant();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private participantService:ParticipantService,
    private route: ActivatedRoute,
    private router: Router,) {


  }
  ngOnInit(): void {
    let id:number=Number(this.route.snapshot.paramMap.get('id'));

    this.participantService.getById(id).subscribe(ele=>{
      this.participant=ele;
    })
  }

  update(){
    this.participantService.update(this.participant.id,this.participant).subscribe(res=>{
      alert(res);
      this.router.navigate(['/dashboard/participant']);
    });
  }

  onSubmit() {
   
  }

}
