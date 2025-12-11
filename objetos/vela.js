import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

  // --- CUERPO DE LA VELA ---
  var g1 = new THREE.CylinderGeometry(1, 1, 6, 32);
  var m1 = new THREE.MeshLambertMaterial({ color: 0xfff3d4 }); // cera color crema
  var mesh1 = new THREE.Mesh(g1, m1);
  mesh1.position.set(0, 3, 0);

  // --- MECHA ---
  var g2 = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 12);
  var m2 = new THREE.MeshLambertMaterial({ color: 0x333333 }); // color gris oscuro
  var mesh2 = new THREE.Mesh(g2, m2);
  mesh2.position.set(0, 6.25, 0);

  // --- FLAMA ---
  var g3 = new THREE.ConeGeometry(0.3, 0.8, 16);
  var m3 = new THREE.MeshBasicMaterial({ color: 0xffa500 }); // color naranja (sin luz)
  var mesh3 = new THREE.Mesh(g3, m3);
  mesh3.position.set(0, 6.8, 0);

  // --- RESPLANDOR SIMBÓLICO (ESFERA NARANJA TRANSPARENTE) ---
  var g4 = new THREE.SphereGeometry(0.7, 16, 16);
  var m4 = new THREE.MeshBasicMaterial({ color: 0xffa500, transparent: true, opacity: 0.3 });
  var mesh4 = new THREE.Mesh(g4, m4);
  mesh4.position.set(0, 6.9, 0);

  var Vela = new THREE.Group();
  Vela.add(mesh1, mesh2, mesh3, mesh4);
  Vela.position.set(x, y, z);
  

  return Vela;
}