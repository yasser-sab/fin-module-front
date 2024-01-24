import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.scss']
})
export class SessionsListComponent {

  sessionsData: any[] = []; 
  baseUrl = environment.baseUrl;

  constructor( public router: Router,private http:HttpClient,private authService: AuthService) { }

  ngOnInit() {
    // Fetch training session data directly in the component
    this.http.get<any[]>('http://localhost:8787/api/training-session').subscribe((data) => {
      this.sessionsData = data;
    });
  }

  deleteData(id){
    let apiURL = this.baseUrl + "/api/training-session/" +id;

    let formData: any = {};

    this.authService.sendDeleteRequest(apiURL, formData).subscribe(
      (res: any) => {
        this.router.navigate(["/dashboard/sessions"]);

      }, (error) => {
        console.log(error);
      }
    )
  }
}
