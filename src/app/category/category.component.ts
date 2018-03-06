import { Component, OnInit } from '@angular/core';
import {categListService} from '../categListService'
import {dbService} from '../dbService'


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
	categVisible:boolean=true;
	prodVisible:boolean=!this.categVisible;
	categ:any;
	prodInfo:any;
	url="http://localhost:5555/categWiseProduct"
  	constructor(private categList:categListService, private udb:dbService) { }
  
  	ngOnInit() {
  		this.categ=this.categList.categories;
  		this.udb.getData(this.url).subscribe(resCateg=>{
  			this.prodInfo=resCateg;
  			console.log(resCateg)
  		});
  		
  }

}
