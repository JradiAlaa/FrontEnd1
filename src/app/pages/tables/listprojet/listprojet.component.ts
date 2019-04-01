import { Component, OnInit } from '@angular/core';
import { GestionprojetService } from '../../../@core/data/gestionprojet.service';
import { GestionuserService } from '../../../@core/data/gestionuser.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'listprojet',
  templateUrl: './listprojet.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})
export class ListprojetComponent implements OnInit {
  projet: any = []
  projetClient: any = []
  projet1: object = {
    "id": null,
    "description": "",
    "titre": "",
    "datedeb": "",
    "datefin": "",
    "edb": "",
    "etat": "0", 
    "idUser":localStorage.getItem("idUser") , 
  } 
  constructor(private serv: GestionprojetService, private userr :GestionuserService, private route: Router) { }
  id1 = parseInt( localStorage.getItem("idUser"))
 
  ngOnInit() {

   //this.serv.getProjetByIdUser(parseInt(localStorage.getItem("idUser")))
   this.serv.getProjets()
      .subscribe(
        data => {
          this.projet = data
        },
        err => {
          console.log(err)
        }
      )
      this.serv.getProjetByIdUser(parseInt(localStorage.getItem("idUser")))
      .subscribe(
        data => {
          this.projetClient = data
        },
        err => {
          console.log(err)
        }
      )
      
    }

      //--------------------- 
  
      //--------------------




}
