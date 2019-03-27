import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionuserService } from '../../@core/data/gestionuser.service';

@Component({
  selector: 'profil',
  styleUrls: ['./profil.component.scss'],
  templateUrl: './profil.component.html',

})
export class ProfilComponent implements OnInit {
  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  //profils : Profil[] = [] ; 
  p :any = []
 // pr: {id : String,emailSec : String,nom : String};
 pr : any = {}
  profil: object = {
    "id": null,
    "emailSec": "",
    "nom": "",
    "prenom": "",
    "adress": "",
    "codepostale": "",
    "ville": "",
    "pays": "",
    "tel": "",
    "userId":localStorage.getItem("idUser") , 
  } 

  constructor(private prof: GestionuserService,private user : GestionuserService, private route: Router) { }

  ngOnInit() {
   // id1 : localStorage.getItem("idUser") ; 
   // getProfilById(parseInt('id'))
    this.prof.getProfilByIdUser(parseInt(localStorage.getItem("idUser"))).subscribe( 
      data=>{

          this.pr = data ;
          console.log("testtt profil ",this.pr)

      }, 
      err => {
          console.log(err)
      }
      )
   
  }
  newProfil() : void {
    var dataUser = {
      "id": localStorage.getItem("idUser") , 
      "etat": "1"
    } ;
    this.prof.addProfil(this.profil).subscribe(data=> {
      console.log("email ", this.profil['emailSec'])
      this.user.updateUsers(dataUser).subscribe(
        res => {
          console.log(res);
        },

        (err) => {
          console.log(err);

        }
      ) ; 
      console.log("etatt1 ", dataUser['etat'])
      this.route.navigate(["pages/profil"])
    },
      err => {
        console.log(err)

      }
    )
  }

}