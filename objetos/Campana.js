import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

    // CUER CAMPANA
  var g1 = new THREE.ConeGeometry(2, 3, 32, 1, true); 
  var m1 = new THREE.MeshLambertMaterial({
    color: 0xFFD700, 
    side: THREE.DoubleSide
  });
  var cuerpo = new THREE.Mesh(g1, m1);
  cuerpo.position.set(0, 1.5, 0);

  //ARO
  var g2 = new THREE.TorusGeometry(2, 0.2, 16, 100);
  var m2 = new THREE.MeshLambertMaterial({
    color: 0xC9A500, 
  });
  var borde = new THREE.Mesh(g2, m2);
  borde.position.set(0, 0, 0);
  borde.rotation.x = 1.57; 
  borde.castShadow = true;

  // BOLITA DE ABAJO
  var g3 = new THREE.SphereGeometry(0.4, 16, 16);
  var m3 = new THREE.MeshLambertMaterial({
    color: 0xFF0000, 
   
  });
  var badajo = new THREE.Mesh(g3, m3);
  badajo.position.set(0, 0.3, 0);

  // GANCHO
  var g4 = new THREE.TorusGeometry(0.5, 0.1, 8, 30);
  var m4 = new THREE.MeshLambertMaterial({
    color: 0xC9A500,
  });
  var gancho = new THREE.Mesh(g4, m4);
  gancho.position.set(0, 3, 0);
  gancho.rotation.x = 1.57; 

  //AGRUPAR TODO 
  const CampanaGroup = new THREE.Group();
  CampanaGroup.add(cuerpo, borde, badajo, gancho);

  //  POSICIÓN GENERAL 
  CampanaGroup.position.set(x, y, z);

  return CampanaGroup;
}
