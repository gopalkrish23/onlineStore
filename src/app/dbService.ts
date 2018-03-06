import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class dbService{
	constructor(private ht:Http){}

	

	getData(url):Observable<any>{
		return this.ht.get(`${url}`).map((res)=>{
			return res.json()
		})
	}
	
}