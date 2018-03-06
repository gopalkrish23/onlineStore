import { Injectable } from '@angular/core';
import {dbService} from './dbService'

@Injectable()
export class UseridService {

	url="http://localhost:5555/loginInfo/"
	users;
	loggedid=null
	i=0;
	constructor(private db:dbService) {
		db.getData(this.url).subscribe(
			users=>{
				this.users=users
			})
	}

	public userCheck(credential):any{

		while(this.i<this.users.length){
			if((this.users[this.i].username==credential.uname)&&
					(this.users[this.i].password==credential.pwd)){
					this.loggedid=this.users[this.i].id;
					return this.users[this.i].id
			}
			else{
				this.i+=1
			}
		}
		return null;	//incase wrong user
	}

}
