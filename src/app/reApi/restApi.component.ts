import { Component, ElementRef, ViewChild } from '@angular/core';
import {ApiService} from '../service/apiservice.service'

@Component({
  selector: 'restApi-root',
  templateUrl: './restApi.component.html',
  styleUrls: ['./restApi.component.css']
})
export class restApiComponent {
   @ViewChild('rendererContainer',{static:true}) 'rendererContainer': ElementRef;
  title = 'charts2';
  getRes:any;
  postRes:any;
 

  constructor(private api: ApiService) {

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
