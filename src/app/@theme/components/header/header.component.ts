import { Component, Input, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService, NbLogoutComponent } from '../../../auth';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { GestionuserService } from '../../../@core/data/gestionuser.service';

import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { Identifiers } from '@angular/compiler';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';
  id :number ;
  role : String ; 
  user: {id,role};
  email : null ; 
 // user1 : [] ; 

  userMenu = [
    { title: 'Profile',
    link: '/pages/profil'
  },
  
    { title: 'Log out',
       link: '/auth/logout'

   }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
           //   private userService: UserService,
                private userSER : GestionuserService , 
              private analyticsService: AnalyticsService,
              private authService: NbAuthService) {
  }

  ngOnInit() {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable 
        //  localStorage.setItem("idUser",this.user.id.toString());
        //  localStorage.setItem("role",this.user.role);
          console.log("role header" ,token.getPayload()['role']) ;
        }

      });
    //  var id = parseInt(this.user) ; 
   // this.userSER.getUserById(21)
    //  .subscribe((users: any) => this.user1 = users );
    
 // }
 // this.userService.getUsers()
  //.subscribe((users: any) => this.user = users.nick);
}
onItemSelection( title ) {
  if ( title === 'Log out' ) {
    localStorage.clear() ;

    console.log('Log out Clicked ')
  } else if ( title === 'Profile' ) {
    // Do something on Profile
    console.log('Profile Clicked ')
  }
}

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
