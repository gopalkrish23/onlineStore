import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routing.module'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {CategoryComponent} from './category/category.component'
import {ShowProductsComponent} from './show-products/show-products.component'
import {ItemsComponent} from './items/items.component'

import {dbService} from './dbService'
import {UseridService} from './userid.service'
import {categListService} from './categListService'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CategoryComponent,
    ShowProductsComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    categListService,
    dbService,
    UseridService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
