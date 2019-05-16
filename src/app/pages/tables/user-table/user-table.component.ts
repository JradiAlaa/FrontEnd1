import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { GestionuserService } from '../../../@core/data/gestionuser.service';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})
export class UserTableComponent implements OnInit {
  user: any = []
  constructor(private use: GestionuserService, private route: Router) { }

  ngOnInit() {
    this.use.getUsers()
      .subscribe(
        data => {
          this.user = data
          console.log(data)

        },
        err => {
          console.log(err)
        }
      )
  }
  settings = {
    add: {
      confirmCreate: true,
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
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
        show: true,
      },
   
      email: {
        title: 'email',
        type: 'string',
      },
     
      role: {
        title: 'role',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              {value: 'chef', title:'chef'},
              {value: 'dev', title:'dev'},
              {value: 'admin', title:'admin'},
              {value: 'client', title:'client'},
            ],
          },
        }
    
      },
      password: {
        title: 'password',
        type: 'string',
        show: false,
      },
  

    },
  };
  oncreateConfirm(event) {
    console.log('ddddd');
    if (window.confirm('voulez vous ajouter ')) {
      event.confirm.resolve();

      var data = {
        "id": null,
        "email": event.newData.email,
        "password": event.newData.password,
        "role": event.newData.role,
        "etat": "2"
      };

      this.use.addUsers(data)
        .subscribe(
          res => {
            console.log(res);
            event.confirm.resolve(event.newData);
            this.ngOnInit();

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
    var data = {
      "id": event.newData.id,
      "email": event.newData.email,
      "password": event.newData.password,
      "role": event.newData.role
    };

    this.use.updateUsers(data)
      .subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
          this.ngOnInit();

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
      this.use.suppUsers(event.data.id)
    } else {
      event.confirm.reject();
    }
  }


}

