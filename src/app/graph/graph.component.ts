import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three'

@Component({
  selector: 'graph-root',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class graphComponent {
   @ViewChild('rendererContainer',{static:true}) 'rendererContainer' : ElementRef;
   @ViewChild('circleContainer',{static:true}) 'circleContainer' : ElementRef;


  renderer = new THREE.WebGLRenderer();
  scene:any= null;
  camera:any= null;
  mesh:any= null;
  circle:any;

 

  constructor() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    const geometry = new THREE.BoxGeometry(200, 250, 250);
    const material = new THREE.MeshBasicMaterial({color: 0x3fd219, wireframe: true});
    this.mesh = new THREE.Mesh(geometry, material);

    const geometryC = new THREE.CircleGeometry( 150, 100 );
    const materiaC = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    this.circle = new THREE.Mesh( geometryC, materiaC );
    this.scene.add(this.circle);
    this.scene.add(this.mesh);
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth/1.1, window.innerHeight/1.2);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.circleContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.circle.rotation.x += 0.03;
    this.circle.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }
}
