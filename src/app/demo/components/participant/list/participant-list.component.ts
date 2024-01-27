import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Participant from 'src/app/demo/models/participants';
import { ParticipantService } from 'src/app/demo/service/participant/participant.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent {
  participants: Participant[] = []; 

  constructor( public router: Router,private http:HttpClient,
    private participantService:ParticipantService
    ) { }

  ngOnInit() {
    // this.participants = this.participantService.getAll();
    // Fetch training session data directly in the component
    // this.http.get<any[]>('http://localhost:8787/api/participant').subscribe((data) => {
    //   this.participantData = data;
    // });
  }
}
