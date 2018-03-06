import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UseridService} from '../userid.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
 constructor(private uid:UseridService) { }
  @Output() outputEv=new EventEmitter();
  userid=null;
  ngOnInit() {  }

  login(loginDet)
  {
    var i=0
   
    this.userid=this.uid.userCheck(loginDet);
    if(this.userid!=null)
    {
            console.log("login success "+this.userid);
            this.outputEv.emit(this.userid)
    }
    else{
        console.log("Wrong username/password")  
    }    
  }
}
