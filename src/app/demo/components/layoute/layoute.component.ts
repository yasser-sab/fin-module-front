import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-layoute',
  templateUrl: './layoute.component.html',
  styleUrls: ['./layoute.component.scss']
})
export class LayouteComponent {
  itIsLoginPage:boolean=false;
  itIsSignPage:boolean=false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private userService:UserService) {}

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        
        this.itIsSignPage = this.router.url.includes('signup');
        this.itIsLoginPage = this.router.url.includes('login');
      }
    });
    // this.userService.user.roles
  }


}
