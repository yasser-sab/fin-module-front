import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-costs-list',
  templateUrl: './costs-list.component.html',
  styleUrls: ['./costs-list.component.scss']
})
export class CostsListComponent {

  costsData: any[] = []; 

  constructor( public router: Router,private http:HttpClient) { }

  ngOnInit() {
    // Fetch training session data directly in the component
    this.http.get<any[]>('http://localhost:8787/api/costs').subscribe((data) => {
      this.costsData = data;
    });
  }
}
