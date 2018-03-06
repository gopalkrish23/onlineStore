import { Component, OnInit, ViewChild } from '@angular/core';

import {Http} from '@angular/http'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private ht:Http) { }
  url='http://localhost:5555/loginInfo/'
  registry:Object
  @ViewChild('reg') form: any;	//to access form 
  ngOnInit() {
  }
  signup(signupDet)
  {
  	if(signupDet.pwd==signupDet.cpwd){
  		this.registry={
  			"username":signupDet.username,
  			"password":signupDet.pwd
  		}
  		this.ht.post(this.url,this.registry).subscribe(res=>{
  			console.log("posted");
  			this.form.reset();
  		})
  		
  	}
  	else{
  		console.log("Passwords mismatch")
  	}
  }
}
