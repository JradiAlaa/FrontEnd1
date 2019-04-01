import { Component, OnInit } from '@angular/core';
import { GestionuserService } from '../../../@core/data/gestionuser.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'compte',
  templateUrl: './compte.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})
export class CompteComponent implements OnInit {
  user: any = []
  constructor(private use: GestionuserService, private route: Router) { }

  ngOnInit() {
    this.use.getUserByEtat()
      .subscribe(
        data => {
          this.user = data
        },
        err => {
          console.log(err)
        }
      )
  }
  addUser1(id:number){
    var data = {
      "id":id ,
      "etat" : "0" , 
    };
    this.use.updateUsers(data).subscribe(
      res => {
        this.ngOnInit()       
      },
      err => {
        console.log(err)

      }
    )
  }
  deleteUser(id:number){
    this.use.suppUsers(id).subscribe(
      res => {
        this.ngOnInit()       
      },
      err => {
        console.log(err)

      }
    )
  }
}
