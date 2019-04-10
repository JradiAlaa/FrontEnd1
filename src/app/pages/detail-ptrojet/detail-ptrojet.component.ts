import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GestionprojetService } from '../../@core/data/gestionprojet.service';
import { GestionuserService } from '../../@core/data/gestionuser.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadfileserviceService } from '../../@core/data/uploadfileservice.service';

@Component({
  selector: 'detail-ptrojet',
  templateUrl: './detail-ptrojet.component.html',
  styleUrls: ['./detail-ptrojet.component.scss']
})
export class DetailPtrojetComponent implements OnInit {
  progress: { percentage: number } = { percentage: 0 };

   nomfichier : any = {} ;
   lien1 : object = {}; 
   lienChiffrage : object = {};
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
   this.uploadService.getEdbByIdPr(this.id).subscribe(
    data => {
     // this.nomfichier = data['nomfichier'] ;
    //  this.lien1 = "http://localhost/projectManagment/projet/"+ref+"/edb/"+data['nomfichier']
    
        this.lien1 = data
        console.log("t get edb by id projet",  this.lien1)

    } ) 
    this.uploadService.getChiffByIdPr(this.id).subscribe(data => {this.lienChiffrage = data } ) 

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

selectFile(event) {
  this.selectedFiles = event.target.files;
}
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
      var upCH = {  "id": id ,  "etat": "2" } ;
   
     var upProjet = {  "idp": idp , "etat": "2" } ;
     this.uploadService.updateChiff(upCH).subscribe( 
        res => { console.log(res); this.ngOnInit() },
         (err) => {console.log(err); } ) ;
         this.serv.updateProjet(upProjet).subscribe(
         res => {console.log(res);this.ngOnInit() },
         (err) => {
           console.log(err);}
       ) ;
     }
     refuserCh(id :  number ) {
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
   accepter(id :  number , idp : number) {
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
    var upEdb = {
     "id": id , 
     "etat": "0"
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
