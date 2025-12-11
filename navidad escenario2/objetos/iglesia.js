import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

    
    const iglesia = new THREE.Group();

    // MATERIALES
    const cafe = new THREE.MeshBasicMaterial({ color: 0xD4C294 }); // paredes café
    const blanco = new THREE.MeshBasicMaterial({ color: 0xffffff }); // nieve / detalles
    const dorado = new THREE.MeshBasicMaterial({ color: 0x2F1919 }); // detalles dorados
    const oscuro = new THREE.MeshBasicMaterial({ color: 0x4b2e14 }); // puerta café oscura
    const amarillo = new THREE.MeshBasicMaterial({ color: 0xFFFAB8 });
    
// VENTANA CIRCULAR FRONTAL

const ventanaGeo = new THREE.CircleGeometry(1.5, 32); 
const ventana = new THREE.Mesh(ventanaGeo, amarillo);  
ventana.position.set(0, 10, 10.2); 
iglesia.add(ventana);
   
    // CUERPO PRINCIPAL (rectangular)
   
    const baseGeo = new THREE.BoxGeometry(18, 10, 12);
    const base = new THREE.Mesh(baseGeo, cafe);
    base.position.set(0, 5, 0);
    iglesia.add(base);

    
    // TECHO PRINCIPAL (triangular)
    
    const techoGeo = new THREE.ConeGeometry(12, 5, 4);
    const techo = new THREE.Mesh(techoGeo, dorado);
    techo.position.set(0, 12.5, 0);
    techo.rotation.y = 0.8;
    iglesia.add(techo);

   
    // TORRE FRONTAL
  
    const torreGeo = new THREE.BoxGeometry(6, 18, 6);
    const torre = new THREE.Mesh(torreGeo, cafe);
    torre.position.set(0, 9, 7);
    iglesia.add(torre);

    // TECHO DE LA TORRE
    const torreTechoGeo = new THREE.ConeGeometry(5, 6, 4);
    const torreTecho = new THREE.Mesh(torreTechoGeo, dorado);
    torreTecho.position.set(0, 19, 7);
    torreTecho.rotation.y = 0.8;
    iglesia.add(torreTecho);

   
    // CRUZ DORADA EN LA TORRE
   
    const cruzCuerpoGeo = new THREE.BoxGeometry(0.5, 3, 0.5);
    const cruzBarraGeo = new THREE.BoxGeometry(2, 0.5, 0.5);

    const cruzCuerpo = new THREE.Mesh(cruzCuerpoGeo, dorado);
    cruzCuerpo.position.set(0, 22, 7);

    const cruzBarra = new THREE.Mesh(cruzBarraGeo, dorado);
    cruzBarra.position.set(0, 22.5, 7);

    iglesia.add(cruzCuerpo, cruzBarra);

   
    // PUERTA GRANDE
    
    const puertaGeo = new THREE.BoxGeometry(3, 6, 0.7);
    const puerta = new THREE.Mesh(puertaGeo, oscuro);
    puerta.position.set(0, 3, 10.1);
    iglesia.add(puerta);

   
    // VENTANAS LATERALES
  
    const ventGeo = new THREE.BoxGeometry(2, 3, 0.5);
    const vent1 = new THREE.Mesh(ventGeo, blanco);
    vent1.position.set(-7, 6, 6);

    const vent2 = new THREE.Mesh(ventGeo, blanco);
    vent2.position.set(7, 6, 6);

    const vent3 = new THREE.Mesh(ventGeo, blanco);
    vent3.position.set(-7, 6, -6);

    const vent4 = new THREE.Mesh(ventGeo, blanco);
    vent4.position.set(7, 6, -6);

    iglesia.add(vent1, vent2, vent3, vent4);

   
    // NIEVE EN EL TECHO
  
    const nieveGeo = new THREE.BoxGeometry(14, 0.5, 8);
    const nieve = new THREE.Mesh(nieveGeo, blanco);
    nieve.position.set(0, 10.8, 0);
    iglesia.add(nieve);

    // NIEVE EN TORRE
    const nieveTorreGeo = new THREE.BoxGeometry(7, 0.4, 7);
    const nieveTorre = new THREE.Mesh(nieveTorreGeo, blanco);
    nieveTorre.position.set(0, 16, 7);
    iglesia.add(nieveTorre);

    // POSICIÓN FINAL
    iglesia.position.set(x, y, z);
    return iglesia;
}