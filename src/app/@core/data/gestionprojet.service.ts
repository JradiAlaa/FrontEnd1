import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionprojetService {

  constructor(private  http:HttpClient) { }
  getProjets(){
    return this.http.get("http://localhost:8080/api/projets") ; 
 
   }
   addProjet(proj:any){
    return this.http.post("http://localhost:8080/api/projets",proj) ;

  }
  getProjetByIdUser(id:number){
    return this.http.get("http://localhost:8080/api/projets/id/"+id) ;

  }

  updateProjet(proj:any){
    return this.http.put("http://localhost:8080/api/projets",proj) ;
  }
   suppProjets(id:number) {
    return this.http.delete("http://localhost:8080/api/projets/"+id) ;
  }
  }