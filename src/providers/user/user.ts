import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
user:any={
  userid:"opt",
  name:"Om Prakash Tiwari",
  passwd:"1q2w3e$R",
  role:1,
  stat:false
};
  constructor(public store:Storage) {
    
  }
  logout(){
    this.store.clear();
    this.checkAuth();
  }
  checkAuth(){
    this.store.ready().then(e=>{
      e.getItem("user").then(usr=>{
        if(usr!==null){
          this.user=usr;
        }
      });
    });
  }

}
