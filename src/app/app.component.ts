import { Component } from '@angular/core';
import {UseridService} from './userid.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedid=null;
  signup:boolean;
  
}
