import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpClient, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadfileserviceService {
 
  constructor(private http: HttpClient) { }
 
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);
 
    const req = new HttpRequest('POST', 'http://localhost:8080/api/file/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
  addEdb(file: File,  id : Number , ref : String): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);
   
    const req = new HttpRequest('POST', 'http://localhost:8080/api/projet/ajout/'+ref+'/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
  getEdbByIdPr(idProjet : Number): Observable<any> {
    return this.http.get('http://localhost:8080/api/projet/det/'+idProjet);
  }
  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/all');
  }
  updateEdb(edb :any){
    return this.http.put('http://localhost:8080/api/projet/edb',edb) ;
  }
    // ----------------- Chiffrage ser

  addChiff(file: File,  id : Number , ref : String): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);
   
    const req = new HttpRequest('POST', 'http://localhost:8080/api/projet/ajoutChiff/'+ref+'/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
  getChiffByIdPr(idProjet : Number): Observable<any> {
    return this.http.get('http://localhost:8080/api/projet/detChiff/'+idProjet);
  }
  
  updateChiff(chiff :any){
    return this.http.put('http://localhost:8080/api/projet/chiffrage',chiff) ;
  }
  
}
