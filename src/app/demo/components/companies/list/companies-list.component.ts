import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent {

  companyData: any[] = []; 

  constructor( public router: Router,private http:HttpClient) { }

  ngOnInit() {
    // Fetch training session data directly in the component
    this.http.get<any[]>('http://localhost:8787/api/company').subscribe((data) => {
      this.companyData = data;
    });
  }
}
