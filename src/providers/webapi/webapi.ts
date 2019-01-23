import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { UserProvider } from "../user/user";

/*
  Generated class for the WebapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebapiProvider {
  apiurl="http://localhost/webapi/";
  constructor(public http: HttpClient,public user:UserProvider) {
    console.log("WebAPI Loaded");
  }
  getData(request){
    var frmData=new FormData();
    var apidata;
    Object.keys(request).forEach(key=>frmData.append(key,request[key]));
    var data=this.http.post(this.apiurl,frmData);
    data.subscribe(r=>{
      apidata=JSON.parse(JSON.stringify(r));
      if("auth" in apidata){
        if(apidata.auth){
          this.user.logout();
        }
      }
    });    
    return data;
  }
  
}
