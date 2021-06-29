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
   @ViewChild('ringContainer',{static:true}) 'ringContainer' : ElementRef;
   @ViewChild('wireFrame',{static:true}) 'wireFrame' : ElementRef;
   



  renderer = new THREE.WebGLRenderer();
  scene:any= null;
  camera:any= null;
  mesh:any= null;

  circle:any;
  scene2:any;
  camera2:any= null;

  scene3:any
  camera3:any;
  ring:any;

  scene4:any
  camera4:any;
  line:any;

 

  constructor() {
   this.boxMatrix();
   this.circleMatrix();
   this.ringMatrix();
   this.wireMatrix();
  }

  boxMatrix(){
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    const geometry = new THREE.BoxGeometry(200, 250, 250);
    const material = new THREE.MeshBasicMaterial({color: 0x3fd219, wireframe: true});
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }

  circleMatrix(){
    this.scene2 = new THREE.Scene();
    this.camera2 = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera2.position.z = 900;
    this.camera2.position.x = 900;

    const geometryC = new THREE.CircleGeometry( 100, 100, 100,100 );
    const materiaC = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
    this.circle = new THREE.Mesh( geometryC, materiaC );

    this.scene2.add(this.circle);
  }

  ringMatrix(){
    
    this.scene3 = new THREE.Scene();
    this.camera3 = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera3.position.z = 800;
    this.camera3.position.x = 800;
    this.camera3.position.y = 0;

    const geometryR = new THREE.RingGeometry( 120, 190, 200 );
    const materialR = new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide,wireframe: true } );
    this.ring = new THREE.Mesh( geometryR, materialR );
    this.scene3.add( this.ring );
  }

  wireMatrix(){
      this.scene4 = new THREE.Scene();
      this.camera4 = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      this.camera4.position.z = 400;
      this.camera4.position.x = 400;
  
      const geometryW = new THREE.SphereGeometry( 100, 100, 100 );
      const materialW = new THREE.MeshBasicMaterial( { color: 0x1a0dab} );
      this.line = new THREE.Mesh( geometryW, materialW );

      const wireframeW = new THREE.WireframeGeometry( geometryW );

      this.line = new THREE.LineSegments( wireframeW );
       this.line.material.depthTest = false;
      this.line.material.opacity = 0.25;
      this.line.material.transparent = true;

      this.scene4.add(this.line);
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth/1.1, window.innerHeight/1.2);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.circleContainer.nativeElement.appendChild(this.renderer.domElement);
    this.ringContainer.nativeElement.appendChild(this.renderer.domElement);
    this.wireFrame.nativeElement.appendChild(this.renderer.domElement);

    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.circle.rotation.x += 0.03;
    //this.circle.rotation.y += 0.04;

    this.ring.rotation.x += 0.01;
    this.ring.rotation.y += 0.02;

    this.renderer.render(this.scene, this.camera);
    this.renderer.autoClear = false;

    //just render scene2 on top of scene1
    this.renderer.render(this.scene2, this.camera2);
    this.renderer.autoClear = false;

    //just render scene2 on top of scene1
    this.renderer.render(this.scene3, this.camera3);
    this.renderer.autoClear = false;

    //just render scene2 on top of scene1
    this.renderer.render(this.scene4, this.camera4);
  }

}
