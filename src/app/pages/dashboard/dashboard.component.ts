import { Component, OnInit } from '@angular/core';
//import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { AuthGuard } from '../../@core/data/auth-guard.service';
import { NbAuthJWTToken } from '../../auth';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent  implements OnInit  {
  //constructor(private auth :AuthGuard ) {}
//  private token: NbAuthJWTToken
  ngOnInit() {
  //  localStorage.getItem(this.token.getPayload()['role']);
  //  console.log("test token dash : " ,this.token.getPayload()['role']) ; 

  //  console.log("test can actibe") ; 
  //  this.auth.canActivate() ; 
}
}



 // user: {};
//  user1 : any
 //  id : null ;
//  constructor(
 //   private authService: NbAuthService) { }
//  ngOnInit() {
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