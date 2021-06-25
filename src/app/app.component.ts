import { Component } from '@angular/core';
import {ApiService} from './service/apiservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charts2';
  getRes:any;
  postRes:any;
  constructor(private api: ApiService){

  }

  getRs(){
    this.api.getUserDetail().subscribe(
      (res:any) => {
        console.log(res);
        this.getRes=res;
        }
    )
  }
  postRs(){
    this.api.findUser().subscribe(
      (res:any) => {
        console.log(res);
        this.postRes=res;
        }
    )
  }
}
