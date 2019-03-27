import { Component } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
 // user: {};
  user1 : any
 //  id : null ;
//  constructor(
 //   private authService: NbAuthService) { }
  ngOnInit() {
 // this.authService.onTokenChange()
 // .subscribe((token: NbAuthJWTToken) => {

 //   if (token.isValid()) {
 //     this.user = token.getPayload(); 
  //    console.log(" dashbored", this.user) ; 
   
  // console.log(" dashbored user2 ", this.user1) ; 

  //  }

 // });
 //this.user1=  localStorage.getItem("idUser") ; 
// console.log(" dashbored user2 ", this.user1) ; 

}
}
