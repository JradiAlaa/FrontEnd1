import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessagerieServiceService } from './messagerie-service.service';
import { GestionuserService } from '../../@core/data/gestionuser.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.scss'],
  providers: [ MessagerieServiceService ],

})
export class MessagerieComponent implements OnInit , AfterViewInit{
  
  
  msg12: any=[];
  msgRep : any = [] ;
  messages: any[];
  user : any = [] ; 
  a = (Date.now()).toString();
  msgSend: object = {
    "id": null,
    "texte": "",
    "etat": "0",
    "reciver": "" ,
    "userId": localStorage.getItem("idUser"),
  }
  interval: any;

  constructor(protected chatService: MessagerieServiceService,
    private use : GestionuserService,
    private route: Router) {
    
  }
getData1(){
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

  this.chatService.geMsgsIdUserIdReciver(Number(localStorage.getItem("idUser")),this.msgSend['reciver']).subscribe
  (
    data => {
      this.msg12 = data 
      console.log("test message ", data)

    }
  )
}

  ngOnInit()  {

    this.getData1();

    this.interval= setInterval( ()=>{
      this.getData1();
    },5000 );
  

  };
  onChange(event: any) {

    this.chatService.geMsgsIdUserIdReciver(Number(localStorage.getItem("idUser")),this.msgSend['reciver']).subscribe
    (
      data => {
        this.msg12 = data 
        console.log("event  value", this.msgSend['reciver'])
        console.log("test message  sdfsfd", data)

      }
    )

  }
  sendMsgg(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'nb-compose',
      };
    });
    this.msgSend['texte']=  event.message ;
    this.chatService.addMsg(this.msgSend).subscribe(
      res => {
        console.log(res);
        this.route.navigate(["pages/messagerie"])
      },

      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    )
  
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    const botReply = this.chatService.reply(event.message);
    if (botReply) {
      setTimeout(() => { this.messages.push(botReply); }, 500);
    }
  }
  showMsg() : void {

    this.chatService.geMsgsIdUserIdReciver(Number(localStorage.getItem("idUser")),1).subscribe
    (
      data => {
        this.msg12 = data 

      }
    )
  }
  sendMsg() : void {

    this.chatService.addMsg(this.msgSend).subscribe(
      res => {
        console.log(res);
        //this.route.navigate(["pages/tables/list-projet-table"])
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
  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'nb-compose',
      };
    });
  
  
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    const botReply = this.chatService.reply(event.message);
    if (botReply) {
      setTimeout(() => { this.messages.push(botReply); }, 500);
    }
  }
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
}
