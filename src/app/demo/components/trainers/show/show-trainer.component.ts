import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/_shared/localstorage.service';
import { AuthService } from 'src/app/demo/service/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-trainer',
  templateUrl: './show-trainer.component.html',
  styleUrls: ['./show-trainer.component.scss']
})
export class ShowTrainerComponent implements OnInit {

  trainerData: any[] = [];
  baseUrl = environment.baseUrl;

  constructor(public router: Router, private http: HttpClient, private authService: AuthService,) { }


  ngOnInit() {
    this.getListData();
  }

  getListData() {
    // Fetch training session data directly in the component
    this.http.get<any[]>('http://localhost:8787/api/trainer').subscribe((data) => {
      this.trainerData = data;
    });
  }


  deleteData(id){
    let apiURL = this.baseUrl + "/api/trainer/" +id;

    let formData: any = {};

    this.authService.sendDeleteRequest(apiURL, formData).subscribe(
      (res: any) => {
        this.getListData();

      }, (error) => {
        console.log(error);
      }
    )
  }

}
