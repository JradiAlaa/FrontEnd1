import { Component, OnInit } from '@angular/core';
import { GestionprojetService } from '../../../@core/data/gestionprojet.service';
import { GestionuserService } from '../../../@core/data/gestionuser.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowComponent } from '../../detail-ptrojet/window/window.component';
import { NbDialogService } from '@nebular/theme';

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
  profil : any = []
  profil1  : any = []
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
  name = 'Angular 5';
  constructor(private sanitizer: DomSanitizer,
    private dialgo: NbDialogService,

     private serv: GestionprojetService, private userr :GestionuserService, private route: Router) { }
  id1 = parseInt( localStorage.getItem("idUser"))
 
  ngOnInit() {
    

   //this.serv.getProjetByIdUser(parseInt(localStorage.getItem("idUser")))
   this.serv.getProjets()
      .subscribe(
        data => {
          this.projet = data ;

        },
        err => {
          console.log(err)
        }
      )
      this.serv.getProjets()
      .subscribe(
        data => {
          this.projet = data ;
          console.log("all projet :  ",data)


        },
        err => {
          console.log(err)
        }
      )
      this.userr.getProfilById(parseInt(localStorage.getItem("idUser")))
      .subscribe(
        data => {
          this.profil = data
        },
        err => {
          console.log(err)
        }
      )
      this.userr.getUserByRole('chef')
      .subscribe(
        data => {
          console.log("test roleeeeeeeeeeeee" ,data)
        },
        err => {
          console.log(err)
        }
      )
      this.userr.getProfil()
      .subscribe(
        data => {
          this.profil1 = data
          console.log("a ll profik ",data)

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
    getProjet(id:number){
      this.route.navigate(['pages/detailProjet',id])
    }

    win(id:number)  {
      this.dialgo.open(WindowComponent, {
        context: {
          title: 'Message',
          aff : '1' , 
          idpp : id.toString() , 
        }, 
       
      })
      ;
    } ; 

      //--------------------- 
  
      //--------------------




}
