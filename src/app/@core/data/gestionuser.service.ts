import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionuserService  {

  constructor(private  http:HttpClient) { }
  getUsers(){
    return this.http.get("http://localhost:8080/api/users") ; 
 
   }
   getUserByEtat(){
    return this.http.get("http://localhost:8080/api/users/de/"+3) ; 
 
   }
   getUserById(id:number){
    return this.http.get("http://localhost:8080/api/users/"+id) ; 
 
   }
   getUserByEmail(email:string){
    return this.http.get("http://localhost:8080/api/users/"+email) ; 
 
   }
  
   addUsers(user:any){
    return this.http.post("http://localhost:8080/api/users",user) ;

  }
  updateUsers(user:any){
    return this.http.put("http://localhost:8080/api/users",user) ;
  }
   suppUsers(id:number) {
    return this.http.delete("http://localhost:8080/api/users/"+id) ;
  }


  //------------------ Profil ----------------------------
  getProfilByIdUser(id:number){
    return this.http.get("http://localhost:8080/api/profil/id/"+id);
  }
  getProfil(){
    return this.http.get("http://localhost:8080/api/profil") ; 
 
   }
   getProfilById(id:number){
    return this.http.get("http://localhost:8080/api/profil/"+id) ; 
 
   }
   addProfil(profil:any){
    return this.http.post("http://localhost:8080/api/profil",profil) ;

  }
  updateProfil(profil:any){
    return this.http.put("http://localhost:8080/api/profil",profil) ;
  }
   suppProfil(id:number) {
    return this.http.delete("http://localhost:8080/api/profil/"+id) ;
  }
  
}
