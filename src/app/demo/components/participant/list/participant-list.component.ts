import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Participant from 'src/app/demo/models/participants';
import { ParticipantService } from 'src/app/demo/service/participant/participant.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent implements OnInit {
  participants: Participant[] = []; 

  constructor( public router: Router,private http:HttpClient,
    private participantService:ParticipantService
    ) { }

  ngOnInit() {

    this.participantService.getAll().subscribe(res=>{
      this.participants=res;
    })
    
  }
}
