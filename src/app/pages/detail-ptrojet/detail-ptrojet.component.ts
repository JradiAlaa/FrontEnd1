import { Component, OnInit, ViewChild, TemplateRef, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GestionprojetService } from '../../@core/data/gestionprojet.service';
import { GestionuserService } from '../../@core/data/gestionuser.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadfileserviceService } from '../../@core/data/uploadfileservice.service';
import { Subscription, interval } from 'rxjs';
import { WindowComponent } from './window/window.component';
import { NbWindowService, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'detail-ptrojet',
  templateUrl: './detail-ptrojet.component.html',
  
  styleUrls: ['./detail-ptrojet.component.scss']
})
 
export class DetailPtrojetComponent implements OnInit  {
  progress: { percentage: number } = { percentage: 0 };
  lienPayement : object = {}; 
   nomfichier : any = {} ;
   lien1 : object = {}; 
   lienChiffrage : object = {};
   lienLivrable : object = {};
   lienEssai : object = {};
   lienFact : object = {};
  //@Output() parentMessage = "message from parent" ;
  //@Output() childMessage="parentMessage"
  selectedFiles: FileList;
  currentFileUpload: File;
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
                private uploadService: UploadfileserviceService,
                private route1: ActivatedRoute  ,
                private dialgo: NbDialogService
                ) {
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
   this.uploadService.getEdbByIdPr(this.id).subscribe(
    data => {
     // this.nomfichier = data['nomfichier'] ;
    //  this.lien1 = "http://localhost/projectManagment/projet/"+ref+"/edb/"+data['nomfichier']
    
        this.lien1 = data
        console.log("t get edb by id projet",  this.lien1)

    } ) 
    this.uploadService.getChiffByIdPr(this.id).subscribe(data => {this.lienChiffrage = data } ) 
    this.uploadService.geLivrableByIdPr(this.id).subscribe(data => {this.lienLivrable = data 
      console.log("t get livrable by id projet",  this.lienLivrable)
    } )  
    this.uploadService.geEssaiByIdPr(this.id).subscribe(data => {this.lienEssai = data } ) 
    this.uploadService.geFactureByIdPr(this.id).subscribe(data => {this.lienFact = data } ) 
    this.uploadService.getPayementByIdPr(this.id).subscribe(data => {this.lienPayement = data } ) 


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
//------------------------------------
testbtDiag()
{
  this.dialgo.open(WindowComponent, {
    context: {
      title: 'Message',
      testid : this.detpr['reference'],
      etat : this.detpr['etat'],
      idSend : Number(localStorage.getItem("idUser")) , 
      idRec : this.detpr['userId'] , 
    },
  });
}

selectFile(event) {
  this.selectedFiles = event.target.files;
}
win()  {
  this.dialgo.open(WindowComponent, {
    context: {
      title: 'Message',
      testid : this.detpr['reference'],
      etat : this.detpr['etat'] , 
      idSend : Number(localStorage.getItem("idUser")) , 
      idRec : this.detpr['userId'] , 
      aff : '2'
    }, 
   
  })
  ;
} ; 
// ----------- Upload EDB -----------------
upload() {
 let idProjet = this.detpr['id']
 let ref = this.detpr['reference']
  this.currentFileUpload = this.selectedFiles.item(0);
  this.uploadService.addEdb(this.currentFileUpload,idProjet,ref).subscribe(event => {
  
    this.currentFileUpload = undefined;

    this.ngOnInit()

  });
  this.selectedFiles = undefined;
  }

 
  accepter(id :  number , idp : number) {
    this.win()
    var upEdb = {
     "id": id , 
     "etat": "2"
   } ;
 
   var upProjet = {
     "idp": idp , 
     "etat": "1"
   } ;
      this.uploadService.updateEdb(upEdb).subscribe(
       res => {
         console.log(res);
         this.ngOnInit()
 
       },
 
       (err) => {
         console.log(err);
 
       }
     ) ;
      console.log(" updete edb",upEdb  );
      console.log(" updete pr",upProjet  );
 
       this.serv.updateProjet(upProjet).subscribe(
       res => {
        
         console.log(res);
         this.ngOnInit()
 
       },
 
       (err) => {
         console.log(err);
 
       }
     ) ;
   }
   refuser(id :  number ) {
    this.win()

     var upEdb = {
      "id": id , 
      "etat": "0"
    } ;
       this.uploadService.updateEdb(upEdb).subscribe(
        res => {
          console.log(res);
         this.testbtDiag() ; 
         //    this.dialgo.open(WindowComponent, {
        //      context: {
        //        title: 'This is a title passed to the dialog component',
        //      },  });
          this.ngOnInit()
        },
  
        (err) => {
          console.log(err);
  
        }
      ) ;
     
    }
//****************************** FIN EDB ***************************** */ 
  //--------------- Upload Chiffrage ------------------
  uploadChiffrage() {

    let idProjet = this.detpr['id']
    let ref = this.detpr['reference']
     this.currentFileUpload = this.selectedFiles.item(0);
     this.uploadService.addChiff(this.currentFileUpload,idProjet,ref).subscribe(event => {
     
       this.currentFileUpload = undefined;
   
       this.ngOnInit()
   
     });
     this.selectedFiles = undefined;
     }

     accepterCh(id :  number , idp : number) {
      this.win()

      var upCH = {  "id": id ,  "etat": "2" } ;
   
     var upProjet = {  "idp": idp , "etat": "2" } ;
     this.uploadService.updateChiff(upCH).subscribe( 
        res => { console.log(res);
          //    this.windowService.open(WindowComponent, { title: `Window` });
              
          this.ngOnInit() },
         (err) => {console.log(err); } ) ;
         this.serv.updateProjet(upProjet).subscribe(
         res => {console.log(res);this.ngOnInit() },
         (err) => {
           console.log(err);}
       ) ;
     }
     refuserCh(id :  number ) {
      this.win()

       var upCh = {
        "id": id , 
        "etat": "0"
      } ;
         this.uploadService.updateChiff(upCh).subscribe(
          res => { console.log(res); this.ngOnInit()  },
          (err) => {console.log(err);  }
        ) ;
      }
   
     //----------------- FIN CHIFFRAGE ---------------
       //--------------- Upload Livrable ------------------
  uploadLivrable() {
    let idProjet = this.detpr['id']
    let ref = this.detpr['reference']
     this.currentFileUpload = this.selectedFiles.item(0);
     this.uploadService.addLivrable(this.currentFileUpload,idProjet,ref).subscribe(event => {
     
       this.currentFileUpload = undefined;

       this.ngOnInit()
   
     });
     this.selectedFiles = undefined;
     }

     accepterLivrable(id :  number , idp : number) {
      var upLivrable = {  "id": id ,  "etat": "2" } ;
   
     var upProjet = {  "idp": idp , "etat": "3" } ;
     this.uploadService.updateLivrable(upLivrable).subscribe( 
        res => { console.log(res); this.ngOnInit() },
         (err) => {console.log(err); } ) ;
         this.serv.updateProjet(upProjet).subscribe(
         res => {console.log(res);this.ngOnInit() },
         (err) => {
           console.log(err);}
       ) ;
     }
     refuserLivrable(id :  number ) {
       var upLivrable = {
        "id": id , 
        "etat": "0"
      } ;
         this.uploadService.updateLivrable(upLivrable).subscribe(
          res => { console.log(res); this.ngOnInit()  },
          (err) => {console.log(err);  }
        ) ;
      }
   
     //----------------- FIN Livrable  ---------------
      //--------------- Upload Version d'essai ------------------
  uploadEssai() {
    let idProjet = this.detpr['id']
    let ref = this.detpr['reference']
     this.currentFileUpload = this.selectedFiles.item(0);
     this.uploadService.addEssai(this.currentFileUpload,idProjet,ref).subscribe(event => {
     
       this.currentFileUpload = undefined;
      
       this.ngOnInit()
   
     });
     this.selectedFiles = undefined;
     }

     accepterEssai(id :  number , idp : number) {
      var upEssai = {  "id": id ,  "etat": "2" } ;
   
     var upProjet = {  "idp": idp , "etat": "4" } ;
     this.uploadService.updateEssai(upEssai).subscribe( 
        res => { console.log(res); this.ngOnInit() },
         (err) => {console.log(err); } ) ;
         this.serv.updateProjet(upProjet).subscribe(
         res => {console.log(res);this.ngOnInit() },
         (err) => {
           console.log(err);}
       ) ;
     }
     refuserEssai(id :  number ) {
       var upEssai = {
        "id": id , 
        "etat": "0"
      } ;
         this.uploadService.updateEssai(upEssai).subscribe(
          res => { console.log(res); this.ngOnInit()  },
          (err) => {console.log(err);  }
        ) ;
      }
   
     //----------------- FIN Version d'essai  ---------------
      //--------------- Upload Facturation ------------------
  uploadFact() {
    let idProjet = this.detpr['id']
    let ref = this.detpr['reference']
     this.currentFileUpload = this.selectedFiles.item(0);
     this.uploadService.addFacture(this.currentFileUpload,idProjet,ref).subscribe(event => {
     
       this.currentFileUpload = undefined;
      
       this.ngOnInit()
   
     });
     this.selectedFiles = undefined;
     }

     accepterFact(id :  number , idp : number) {
      var upEssai = {  "id": id ,  "etat": "2" } ;
   
     var upProjet = {  "idp": idp , "etat": "5" } ;
     this.uploadService.updateFacture(upEssai).subscribe( 
        res => { console.log(res); this.ngOnInit() },
         (err) => {console.log(err); } ) ;
         this.serv.updateProjet(upProjet).subscribe(
         res => {console.log(res);this.ngOnInit() },
         (err) => {
           console.log(err);}
       ) ;
     }
     refuserFact(id :  number ) {
       var upEssai = {
        "id": id , 
        "etat": "0"
      } ;
         this.uploadService.updateFacture(upEssai).subscribe(
          res => { console.log(res); this.ngOnInit()  },
          (err) => {console.log(err);  }
        ) ;
      }
   
     //----------------- FIN Version d'essai  ---------------
     // ----------- Upload Payement -----------------
  uploadPayement() {
    let idProjet = this.detpr['id']
    let ref = this.detpr['reference']
     this.currentFileUpload = this.selectedFiles.item(0);
     this.uploadService.addPayement(this.currentFileUpload,idProjet,ref).subscribe(event => {
     
       this.currentFileUpload = undefined;
      
       this.ngOnInit()
   
     });
     this.selectedFiles = undefined;
     }
     accepterPayement(id :  number , idp : number) {
     var upEdb = {
      "id": id , 
      "etat": "2"
    } ;
  
    var upProjet = {
      "idp": idp , 
      "etat": "6"
    } ;
       this.uploadService.updatePayement(upEdb).subscribe(
        res => {
          console.log(res);
          this.ngOnInit()
  
        },
  
        (err) => {
          console.log(err);
  
        }
      ) ;
        this.serv.updateProjet(upProjet).subscribe(
        res => {
          console.log(res);
          this.ngOnInit()
  
        },
  
        (err) => {
          console.log(err);
  
        }
      ) ;
    }
    refuserPayement(id :  number ) {
      var upEdb = {
       "id": id , 
       "etat": "0"
     } ;
        this.uploadService.updatePayement(upEdb).subscribe(
         res => {
           console.log(res);
           this.ngOnInit()
         },
   
         (err) => {
           console.log(err);
   
         }
       ) ;
      
     }
 //****************************** FIN EDB ***************************** */ 
  download(nom : string) {
    let idProjet = this.detpr['id']
    let ref = this.detpr['reference']
    console.log("ref",ref,"nom", nom)
    this.route.navigate(['http://localhost/projectManagment/projet/'+ref+'/edb/'+nom])
    // this.uploadService.getEdbByIdPr(idProjet).subscribe(
    //   data => {
    //    // this.nomfichier = data['nomfichier'] ;
    //   //  this.lien1 = "http://localhost/projectManagment/projet/"+ref+"/edb/"+data['nomfichier']
    //   console.log("t get edb by id projet",  this.lien1)

    //       this.lien1 = data
    //   },
    //   err => {
    //     console.log(err)
    //   }
    // )
  }
 
  //-----------------------------------
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
