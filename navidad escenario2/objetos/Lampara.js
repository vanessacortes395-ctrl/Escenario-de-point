import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

  const LamparaGroup = new THREE.Group();

  // --- POSTE ---
  var g1 = new THREE.CylinderGeometry(1.5, 1.5, 35, 16);
  var m1 = new THREE.MeshLambertMaterial({ color: 0x000000 });
  var mesh1 = new THREE.Mesh(g1, m1);
  mesh1.position.set(0, 17, 0);
  LamparaGroup.add(mesh1);

  // --- BARRA SUPERIOR (RECTA) ---
  var g2 = new THREE.BoxGeometry(20, 1.5, 1.5);
  var m2 = new THREE.MeshLambertMaterial({ color: 0x000000 });
  var mesh2 = new THREE.Mesh(g2, m2);
  mesh2.position.set(0, 35, 0);
  LamparaGroup.add(mesh2);

  // --- LÁMPARA IZQUIERDA ---

  // vidrio
  var g3 = new THREE.CylinderGeometry(3, 2, 8, 6);
  var m3 = new THREE.MeshLambertMaterial({ color: 0xffe680 }); // amarillo suave
  var vidrioL = new THREE.Mesh(g3, m3);
  vidrioL.position.set(-10, 30, 0);

  // tapa
  var g4 = new THREE.ConeGeometry(3, 4, 6);
  var m4 = new THREE.MeshLambertMaterial({ color: 0x000000 });
  var tapaL = new THREE.Mesh(g4, m4);
  tapaL.position.set(-10, 34, 0);

  LamparaGroup.add(vidrioL, tapaL);

  // --- LÁMPARA DERECHA ---
  // vidrio
  var g5 = new THREE.CylinderGeometry(3, 2, 8, 6);
  var m5 = new THREE.MeshLambertMaterial({ color: 0xffe680 });
  var vidrioR = new THREE.Mesh(g5, m5);
  vidrioR.position.set(10, 30, 0);

  // tapa
  var g6 = new THREE.ConeGeometry(3, 4, 6);
  var m6 = new THREE.MeshLambertMaterial({ color: 0x000000 });
  var tapaR = new THREE.Mesh(g6, m6);
  tapaR.position.set(10, 34, 0);

  LamparaGroup.add(vidrioR, tapaR);

  // --- POSICIÓN GENERAL ---
  LamparaGroup.position.set(x, y, z);

  return LamparaGroup;
}