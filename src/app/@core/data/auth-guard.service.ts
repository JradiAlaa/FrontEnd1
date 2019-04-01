import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '../../auth';
import { tap } from 'rxjs/operators';

@Injectable()
 export class AuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router) {
  }

  canActivate() {
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['auth/login']);
          } else 
            console.log("on test etat 2 ") ; 
           { if (localStorage.getItem("etat")=="2") {
             this.router.navigate(['auth/reset-password']);
            }
            else if (localStorage.getItem("etat")=="3") {
              this.router.navigate(['auth/request-password']);
             }

          }


          //------
         
        }),
      );
  }
}