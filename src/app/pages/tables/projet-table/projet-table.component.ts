import { Component, OnInit } from '@angular/core';
import { GestionprojetService } from '../../../@core/data/gestionprojet.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { GestionuserService } from '../../../@core/data/gestionuser.service';

@Component({
  selector: 'projet-table',
  templateUrl: './projet-table.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})
export class ProjetTableComponent implements OnInit {
  projet: any = []
  user1 : any= []
  constructor(private serv: GestionprojetService, private userr :GestionuserService, private route: Router) { }
  id1 = parseInt( localStorage.getItem("idUser"))
  
  ngOnInit() {
    this.serv.getProjets()
      .subscribe(
        data => {
          this.projet = data
        },
        err => {
          console.log(err)
        }
      )
      this.userr.getUserById(this.id1)
      .subscribe(
        data => {
          this.user1 = data
        },
        err => {
          console.log(err)
        }
      )  }

  settings = {
    add: {
       confirmCreate: true , 
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>' ,
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      confirmSave: true,
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        
      },
      nomprojet: {
        title: 'nomprojet',
        type: 'string',
      },
      description: {
        title: 'description',
        type: 'string',
      },
      duree: {
        title: 'duree',
        type: 'string',
      },
    
    },
  };
  oncreateConfirm(event) {
    console.log('ddddd');
    if (window.confirm('voulez vous ajouter ce projet')) {
      event.confirm.resolve();

    var data = { "id" : null,
                "nomprojet" : event.newData.nomprojet,
                "description" : event.newData.description,
                "duree" : event.newData.duree, 
                "idUser" :  localStorage.getItem("idUser"),
                };
                console.log(data.description);

                this.serv.addProjet(data)
                .subscribe(
                  res => {
                    console.log(res);
                    event.confirm.resolve(event.newData);
                },
                  
                (err: HttpErrorResponse) => {
                  if (err.error instanceof Error) {
                    console.log("Client-side error occured.");
                  } else {
                    console.log("Server-side error occured.");
                  }
                }
                  )
                } else {
                  event.confirm.reject();
                }

  }
  onupdateConfirm(event) {
    console.log('ddddd');
    var data = { "id" :event.newData.id ,
                "nomprojet" : event.newData.nomprojet,
                "description" : event.newData.description,
                "duree" : event.newData.duree,
                "idUser" :  localStorage.getItem("idUser"),

                };
                console.log(data.description);

                this.serv.updateProjet(data)
                .subscribe(
                  res => {
                    console.log(res);
                    event.confirm.resolve(event.newData);
                },
                  
                (err: HttpErrorResponse) => {
                  if (err.error instanceof Error) {
                    console.log("Client-side error occured.");
                  } else {
                    console.log("Server-side error occured.");
                  }
                }
                )
  }


  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      console.log(event.data);
      this.serv.suppProjets(event.data.id)
    } else {
      event.confirm.reject();
    }
  }




}


