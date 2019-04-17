import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { MessagerieServiceService } from '../../messagerie/messagerie-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { GestionprojetService } from '../../../@core/data/gestionprojet.service';
import { GestionuserService } from '../../../@core/data/gestionuser.service';

@Component({
  selector: 'window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})


export class WindowComponent implements OnInit {
  
  constructor(protected ref: NbDialogRef<WindowComponent>,
    protected chatService: MessagerieServiceService,
    private serv: GestionprojetService,
    private userr :GestionuserService,
    ) {}
  private sub: any;
  @Input() title: string;
  @Input() testid : string;
  @Input() etat : string;
  @Input() idSend : number;
  @Input() idRec : string;
  @Input() idpp : string;
  user1: any = {}
  projet1: any = {}

  projet12: object = {
    "idp": "" ,
    "chefProjet": "",

  }
  @Input() aff: string;
  ngOnInit() {
    console.log("id projet windws",this.idpp) 

    this.serv.getProjets()
    .subscribe(
      data => {
        this.projet1 = data ;
        console.log("test window projet",data) 

      },
      err => {
        console.log(err)
      }
    )
    this.userr.getUserByRole('chef')
    .subscribe(
      data => {
        this.user1 = data ;
        console.log("test window user role ",data) 

      },
      err => {
        console.log(err)
      }
    )
  }
  onChange(event: any) {

   // this.serv.updateProjet(this.projet12)

  }
  updateChef(){
    this.projet12['idp'] = this.idpp
    console.log("test fast updete ",this.projet12['id']) 

    this.serv.updateProjet(this.projet12).subscribe(
      res => {
        
        console.log("aggiche update  ",res) 
        this.dismiss()
      },
      err => {
        console.log(err)
      }
    )

  }

  msgSendd: object = {
    "id": null,
    "texte": "",
    "etat": "0",
    "reciver": "" ,
    "userId": ""
  }




    sendMsgg() {
      console.log("ssssssssssssss",this.idSend);
      console.log("rrrrrrrrrrrrr",this.idRec);
      this.msgSendd['reciver']= this.idRec ; 
      this.msgSendd['userId']= Number(this.idSend); 

      this.chatService.addMsg(this.msgSendd).subscribe(
        res => {
          console.log("wwwwwwwwwwwwwwww",res);
        },
  
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        }
      )
      this.ref.close();

     
    }
  dismiss() {
    this.ref.close();
  }
}
