import { Component, OnInit, Input } from '@angular/core';
//import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { AuthGuard } from '../../@core/data/auth-guard.service';
import { NbAuthJWTToken } from '../../auth';
import { Observable } from 'rxjs';
import { UploadfileserviceService } from '../../@core/data/uploadfileservice.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { ProfilComponent } from '../profil/profil.component';
import { GestionuserService } from '../../@core/data/gestionuser.service';

@Component({
  selector: 'ngx-dashboard',  
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent  implements OnInit  {
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  @Input() fileUpload: string;
  showFile = false;
  fileUploads: Observable<string[]>;
  user1: Object;

  constructor(private uploadService: UploadfileserviceService,
    private dialogService: NbDialogService, 
    private windowService: NbWindowService,
    private userr :GestionuserService,
    ) { }
  ngOnInit() {
    this.fileUploads = this.uploadService.getFiles();

  
  }
 
  showFiles(enable: boolean) {
    this.showFile = enable;
 
    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }

    
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
   // this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  }

  openWindowForm() {
    this.windowService.open(ProfilComponent, { title: `Window` });
  }

  

  //constructor(private auth :AuthGuard ) {}
//  private token: NbAuthJWTToken
 // ngOnInit() {
  //  localStorage.getItem(this.token.getPayload()['role']);
  //  console.log("test token dash : " ,this.token.getPayload()['role']) ; 

  //  console.log("test can actibe") ; 
  //  this.auth.canActivate() ; 
//}
}



 // user: {};
//  user1 : any
 //  id : null ;
//  constructor(
 //   private authService: NbAuthService) { }
//  ngOnInit() {
 // this.authService.onTokenChange()
 // .subscribe((token: NbAuthJWTToken) => {

 //   if (token.isValid()) {
 //     this.user = token.getPayload(); 
  //    console.log(" dashbored", this.user) ; 
   
  // console.log(" dashbored user2 ", this.user1) ; 

  //  }

 // });
 //this.user1=  localStorage.getItem("idUser") ; 
// console.log(" dashbored user2 ", this.user1) ; 