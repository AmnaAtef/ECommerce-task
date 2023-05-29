import { Injectable } from "@angular/core";
import { 
    HttpInterceptor, 
    HttpRequest, 
    HttpHandler, 
    HttpEvent, 
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  
    constructor(
       private authService: AuthService,
    ) {}

    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {

      return next.handle(req)
      .pipe(
        catchError(error => {
          if (error.status === 401) {
            // auto logout if 401 response returned from api
            this.authService.logout();
        }
        if(error.error){
          const Error = error.error.message || error.statusText;
          return throwError(Error);
        }
        return throwError(Error);
        })
      );
    }
}