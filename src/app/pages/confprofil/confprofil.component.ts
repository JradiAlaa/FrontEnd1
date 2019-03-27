import { Component, OnInit } from '@angular/core';
import { GestionuserService } from '../../@core/data/gestionuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'confprofil',
  templateUrl: './confprofil.component.html',
  styleUrls: ['./confprofil.component.scss']
})
export class ConfprofilComponent implements OnInit {
  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  //profils : Profil[] = [] ; 
  
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
      localStorage.removeItem("etat") ; 
      localStorage.setItem("etat","1");
      this.route.navigate(["pages/profil"])
    },
      err => {
        console.log(err)

      }
    )
  }

}