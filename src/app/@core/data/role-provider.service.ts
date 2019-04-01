import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { NbAuthService, NbAuthJWTToken } from '../../auth';
import { NbRoleProvider } from '@nebular/security';

@Injectable()
export class RoleProvider implements NbRoleProvider {

  constructor(private authService: NbAuthService) {
  }

  getRole(): Observable<string> {

    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken) => {
          console.log('ici role provider role ', token.getPayload()['role'])  ;
         localStorage.setItem("role",token.getPayload()['role']);
         localStorage.setItem("etat",token.getPayload()['etat']);
         localStorage.setItem("idUser",token.getPayload()['id']);
         
          return  token.getPayload()['role']  ;
        }),
      );
  }


}