import { Component } from '@angular/core';

import { NgModel } from '@angular/forms';
import User from '../../models/users';
import Role from '../../models/roles';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username:string="";

  password:string="";

  constructor(
    private userService:UserService,
    private router:Router
    ){}


  login(){

    const user:User=new User();
    user.username=this.username;
    user.password=this.password;
    this.userService.login(user).subscribe(res=>{
      console.log(res);
      
      if(res){
        localStorage.removeItem('user');
        localStorage.setItem('user',JSON.stringify(res));
        this.router.navigate(["dashboard"]);

        // this.userService.loadUser();

        
      }else{
        alert("user or passwor incorrect");
      }

      
    });

    // localStorage.removeItem('user');
    // const user:User=new User();
    // user.username="hassan";
    // user.email="emai1";
    // user.password="12345";
    // const role:Role=new Role();
    // role.name="ADMIN";
    // user.roles=[
    //   role
    // ];
    // localStorage.setItem('user',JSON.stringify(user));


    // this.router.navigate(["/dashboard"]);
  }

}
