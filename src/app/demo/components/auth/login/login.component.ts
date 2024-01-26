import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Role, User,LoginRequest } from 'src/app/demo/api/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/demo/service/auth.service';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/_shared/localstorage.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {
    valCheck: string[] = ['remember'];
    loginForm: FormGroup;
    public formData: LoginRequest;
    errMessage: string;
    constructor(
        public layoutService: LayoutService,
        private fb:FormBuilder,
        private localstorageService:LocalstorageService,
        private router: Router,
        private authService: AuthService) {
    }

    ngOnInit() {
      // console.log("check is loggedIn::: "+this.localstorageService.isLoggedIn)
      //   if(this.localstorageService.isLoggedIn()){
      //       this.router.navigate(['/']);
      //     }
      //   this._initForm();
      //   this.loginForm.valueChanges.subscribe(data => {
      //       this.formData = data;
      //   })
    }

    get f() { return this.loginForm.controls; }

    // Initialize form function
  _initForm(){
    this.loginForm=this.fb.group({
      username:['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }
  
    onSubmit() {
      const formValues: LoginRequest = {
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value,
      };
    
      if(this.loginForm.invalid){
        console.log("Invalid")
        return;
      }

      this.authService.login(formValues).subscribe({
        next : (v) => {
          console.log(v);
            this.setToken(v['accessToken'],v['username'],v['roles'],v['id']);

           //this.setObserver();
            this.router.navigate(['/dashboard'])
        },
        error : (e)=>{
            this.errMessage=e.error.message;
        },
        complete: () => {this.router.navigate(['/dashboard'])}
      });
    }

    setObserver (){
        this.authService.loginStatusSubject.next(true);
        this.authService.currentUserSubject.next(this.localstorageService.getUsername());
      }
    
    
      //set token,username and list of roles
      setToken(token:string,username:string, roles?:Role[],id?:string){
        this.localstorageService.setToken(token);
        this.localstorageService.setUsername(username);
        this.localstorageService.setRoles(roles);
        this.localstorageService.setUserId(id);
      }
  }
