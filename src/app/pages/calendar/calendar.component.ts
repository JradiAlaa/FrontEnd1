import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GestionuserService } from '../../@core/data/gestionuser.service';
import { GestionprojetService } from '../../@core/data/gestionprojet.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  id: number;
  private sub: any;
  detpr : any = {} 
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
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
  constructor(private fb: FormBuilder,
              private serv: GestionprojetService,
               private userr :GestionuserService,
                private route: Router,
                private route1: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route1.params.subscribe(params => {
      this.id = +params['id']; 
      this.serv.getProjetById(this.id).subscribe( 
        data=>{
  
            this.detpr = data ;
            console.log("testtt projet un  ",this.detpr)
  
        }, 
        err => {
            console.log(err)
        }
        )

   });
   

    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

  newProjet() : void {    
    this.serv.addProjet(this.projet1).subscribe(
      res => {
        console.log(res);
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
}
