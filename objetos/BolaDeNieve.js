import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

      // BASE BOLA
  var gBase = new THREE.CylinderGeometry(3, 3, 1, 32);
  var mBase = new THREE.MeshLambertMaterial({ color: 0x8B5A2B }); 
  var base = new THREE.Mesh(gBase, mBase);
  base.position.set(0, 0.5, 0);

  //  CÚPULA 
  var gCúpula = new THREE.SphereGeometry(3, 32, 32);
  var mCúpula = new THREE.MeshLambertMaterial({
    color: 0x99ccff,      
    transparent: true,
    opacity: 0.4,           
  });
  var cupula = new THREE.Mesh(gCúpula, mCúpula);
  cupula.position.set(0, 3.5, 0);

  // MUÑECO D NIEVE
  // cuerpo
  var gCuerpo = new THREE.SphereGeometry(1, 16, 16);
  var mCuerpo = new THREE.MeshLambertMaterial({ color: 0xffffff });
  var cuerpo = new THREE.Mesh(gCuerpo, mCuerpo);
  cuerpo.position.set(0, 1.2, 0);

  // cabeza
  var gCabeza = new THREE.SphereGeometry(0.6, 16, 16);
  var cabeza = new THREE.Mesh(gCabeza, mCuerpo);
  cabeza.position.set(0, 2.2, 0);

  // sombrero
  var gSombrero = new THREE.CylinderGeometry(0.4, 0.4, 0.6, 12);
  var mSombrero = new THREE.MeshLambertMaterial({ color: 0x000000 });
  var sombrero = new THREE.Mesh(gSombrero, mSombrero);
  sombrero.position.set(0, 2.8, 0);

  // ala del sombrero
  var gAla = new THREE.CylinderGeometry(0.6, 0.6, 0.1, 12);
  var ala = new THREE.Mesh(gAla, mSombrero);
  ala.position.set(0, 2.6, 0);

  // nariz 
  var gNariz = new THREE.ConeGeometry(0.1, 0.4, 8);
  var mNariz = new THREE.MeshLambertMaterial({ color: 0xff6600 }); 
  var nariz = new THREE.Mesh(gNariz, mNariz);
  nariz.position.set(0, 2.2, 0.7);
    nariz.rotation.x = -5;

  //  AGRUPAR ELEMENTOS INTERNOS 
  const muneco = new THREE.Group();
  muneco.add(cuerpo, cabeza, sombrero, ala, nariz);

  //  AGRUPAR TODO 
  const BolaGroup = new THREE.Group();
  BolaGroup.add(base, cupula, muneco);

  //  POSICIÓN GENERAL 
  BolaGroup.position.set(x, y, z);

  return BolaGroup;
}
