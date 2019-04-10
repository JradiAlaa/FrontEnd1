import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GestionprojetService } from '../../@core/data/gestionprojet.service';
import { GestionuserService } from '../../@core/data/gestionuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ajout-projet',
  templateUrl: './ajout-projet.component.html',
  styleUrls: ['./ajout-projet.component.scss']
})
export class AjoutProjetComponent implements OnInit {

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
    "etat": "1", 
    "idUser":localStorage.getItem("idUser") , 
  } 
  constructor(private fb: FormBuilder,
              private serv: GestionprojetService,
               private userr :GestionuserService,
                private route: Router) {
  }

  ngOnInit() {
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
