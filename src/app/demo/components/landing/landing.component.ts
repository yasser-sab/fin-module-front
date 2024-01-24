import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/_shared/localstorage.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit{

    isLoggedin: boolean = false;
    trainingSessions: any[] = []; 

    constructor(public layoutService: LayoutService, public router: Router, 
      private localstorageService:LocalstorageService,private http:HttpClient) { }


    ngOnInit() {
        if (this.localstorageService.isLoggedIn()) {
          this.isLoggedin = true;
        }
    
        // Fetch training session data directly in the component
        this.http.get<any[]>('http://localhost:8787/api/training-session').subscribe((data) => {
          this.trainingSessions = data;
        });
      }
    }
