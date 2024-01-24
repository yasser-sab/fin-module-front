import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Role } from "../demo/api/user";

@Injectable({
  providedIn: "root",
})
export class LocalstorageService {
  clearTimeout: any;

  constructor(private router: Router) {}

  // set token in local storage
  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  //get token in local storage
  getToken() {
    return localStorage.getItem("token");
  }

  //set user id
  setUserId(userId: any) {
    localStorage.setItem("userId", userId);
  }

  //get user id
  getUserId() {
    return localStorage.getItem("userId");
  }

  //set user in local storage
  setUsername(username: any) {
    localStorage.setItem("username", username);
  }

  // set roles in local storage
  setRoles(roles?: Role[]) {
    const rolesString = JSON.stringify(roles);
    localStorage.setItem("roles", rolesString);
  }

  //get user from local storage
  getUsername() {
    return localStorage.getItem("username");
  }

  //get roles from local storage
  getRoles() {
    return localStorage.getItem("roles");
  }


  //check user role contains
//   getUserRoles() {
//     let roles = "";
//     let loginUser = this.getUser();
//     if (loginUser) {
//       let authorities = loginUser.roles;
//       authorities.forEach((element) => {
//         roles = roles + element.authority + ",";
//       });
//     }
//     return roles;
//   }

  // check roleName is exits
//   checkRoleIsExists(roleName : string){
//     let roles = this.getUserRoles();
//     if(roles.includes(roleName)){
//       return true;
//     }
//     return false;
//   }

  //remove user from local storage
  removeUser() {
    localStorage.removeItem("username");
  }

  //remove token from local storage
  removeToken() {
    localStorage.removeItem("token");
  }
  //check if user is logged in
  isLoggedIn() {
    return !!this.getUsername();
  }

  getIsAdmin() {
    let roles = this.getRoles();
    if (roles) {
      let role = JSON.parse(roles);
      if (role.includes("ROLE_ADMIN")) {
        return true;
      }
    }
    return false;
  
  }

  //logout user
  logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    if (this.clearTimeout) {
      clearTimeout(this.clearTimeout);
    }
    return true;
  }
}