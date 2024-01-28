import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Company from 'src/app/demo/models/company';
import TrainingRegistration from 'src/app/demo/models/trainingRegistration';
import { CompanyService } from 'src/app/demo/service/company/company.service';
import { TrainingRegistrationService } from 'src/app/demo/service/trainingRegistration/training-registration.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent {

  companies: Company[] = [];

  constructor( 
    public router: Router,
    private http:HttpClient,
    private companyService:CompanyService
    ) { }

  ngOnInit() {


    this.companyService.getAll().subscribe(res=>{
      this.companies=res;
    });
    // this.companies = this.companyService.getAll();
    // this.http.get<any[]>('http://localhost:8787/api/company').subscribe((data) => {
    //   this.companyData = data;
    // });
  }
}
