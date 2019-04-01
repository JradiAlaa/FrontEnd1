import { Component } from '@angular/core';

import { MENU_ITEMS, firstauth } from './pages-menu';
import { RoleProvider } from '../@core/data/role-provider.service';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="getMenu()"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  //menu = MENU_ITEMS;
 getMenu() {
  // console.log("++++++++++++++", localStorage.getItem("role"))
  if ( localStorage.getItem("etat")=="0") return firstauth
  else return MENU_ITEMS
}



}
