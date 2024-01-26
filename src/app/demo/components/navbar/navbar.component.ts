import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/_shared/localstorage.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoggedin: boolean = false;

  constructor(public layoutService: LayoutService, public router: Router, 
    private localstorageService:LocalstorageService,private http:HttpClient,
    public userService:UserService){}

    signout(){
      this.userService.signout();
    }
}
