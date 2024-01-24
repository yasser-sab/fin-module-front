import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.scss']
})
export class EvaluationListComponent {
  myData: any[] = []; 

  constructor( public router: Router,private http:HttpClient) { }

  ngOnInit() {
    // Fetch training session data directly in the component
    this.http.get<any[]>('http://localhost:8787/api/evaluation').subscribe((data) => {
      this.myData = data;
    });
  }
}
