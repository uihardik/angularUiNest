import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   @ViewChild('rendererContainer',{static:true}) 'rendererContainer': ElementRef;
  
  renderer = new THREE.WebGLRenderer();
  scene:any= null;
  camera:any= null;
  mesh:any= null;

 

  constructor() {
  }


}
