
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { LocalstorageService } from "../_shared/localstorage.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private localStorageService:LocalstorageService,private router:Router){

    }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {

        //handle your auth error or rethrow
        if (err.status === 403) {
          console.log("you are not authoriszed...");
        }else if(err.status === 500){
            console.log(err.message);
            if(err.message.includes('jwt token has expired')){
                //this.localStorageService.logout();
                this.router.navigate(['landing']);
            }
           // this.router.navigate(['error/error500']);
        }else if(err.status === 404){
           // this.router.navigate(['error/error404']);
           console.log("From 404");
        }else if(err.status === 0){
          //toaster show 30 seconds on top of the page

        }
        return throwError(err);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("From AuthInterceptor");

        //add the jwt token (LocalStorage) request
        let authReq=req;
        const token=this.localStorageService.getToken();


        if(token !=null){
            authReq=authReq.clone({
                setHeaders:{Authorization:`Bearer ${token}`},
            });

        }


        return next.handle(authReq).pipe(catchError(x=> this.handleAuthError(x)));
    }

}

export const authInterceptorProviders=[
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
];