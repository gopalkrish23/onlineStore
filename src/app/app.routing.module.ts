import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'
import {LoginComponent} from './login/login.component'
import {SignupComponent} from './signup/signup.component'
import {CategoryComponent} from './category/category.component'
import {ItemsComponent} from './items/items.component'
const rt:Routes=[
	/*{path:"login",component:LoginComponent},*/
	{path:"signup",component:SignupComponent},
	{path:"item",component:ItemsComponent},
	{path:"category",component:CategoryComponent,children:[
		{path:":xx",component:ItemsComponent}
	]}
]

@NgModule({
	imports :[RouterModule.forRoot(rt)],
	exports :[RouterModule]
})

export class AppRoutingModule{}