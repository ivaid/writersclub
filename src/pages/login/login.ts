import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WebapiProvider } from '../../providers/webapi/webapi';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login={loginid:"",passwd:"",error:""};
  constructor(public navCtrl: NavController, public navParams: NavParams,public webapi:WebapiProvider,public store:Storage) {
  }

  ionViewDidLoad() {

  }
  Login(){
    var data=this.webapi.getData({loginid:this.login.loginid,passwd:this.login.passwd,module:"auth",action:"login"});
    data.subscribe(r=>{
      var resp=JSON.parse(JSON.stringify(r));
      if(resp.auth==true){
        this.store.set("userinfo",JSON.stringify(resp.userinfo)).then(()=>{
          this.navCtrl.setRoot(TabsPage);
        });
      }else{
        this.login.error="Your username or password is not matching with our records";
      }
    });
  }
}
