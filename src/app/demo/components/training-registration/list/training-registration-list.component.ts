import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-registration-list',
  templateUrl: './training-registration-list.component.html',
  styleUrls: ['./training-registration-list.component.scss']
})
export class TrainingRegistrationListComponent {
  trainingRegisterData: any[] = []; 

  constructor( public router: Router,private http:HttpClient) { }

  ngOnInit() {
    // Fetch training session data directly in the component
    this.http.get<any[]>('http://localhost:8787/api/training-register').subscribe((data) => {
      this.trainingRegisterData = data;
    });
  }
}
