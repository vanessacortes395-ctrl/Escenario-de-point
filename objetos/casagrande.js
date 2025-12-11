import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

        // --- Materiales ---
    const matPared = new THREE.MeshLambertMaterial({ color: 0xffffff }); // blanco
    const matTecho = new THREE.MeshLambertMaterial({ color: 0xcc0000 }); // rojo
    const matVentana = new THREE.MeshLambertMaterial({ color: 0xffcc66 }); // luz cálida amarilla
    const matPuerta = new THREE.MeshLambertMaterial({ color: 0x663300 }); // café madera

    // --- Base principal ---
    const baseGeo = new THREE.BoxGeometry(10, 6, 8);
    const base = new THREE.Mesh(baseGeo, matPared);
    base.position.set(0, 3, 0);

    // --- Techo principal ---
    const techoGeo = new THREE.ConeGeometry(8, 4, 4);
    const techo = new THREE.Mesh(techoGeo, matTecho);
    techo.rotation.y = Math.PI / 4;
    techo.position.set(0, 8, 0);

    // --- Piso extra (tipo segundo nivel pequeño) ---
    const segundoGeo = new THREE.BoxGeometry(6, 4, 5);
    const segundo = new THREE.Mesh(segundoGeo, matPared);
    segundo.position.set(0, 9, 0);

    // --- Techo segundo nivel ---
    const techo2Geo = new THREE.ConeGeometry(5, 3, 4);
    const techo2 = new THREE.Mesh(techo2Geo, matTecho);
    techo2.rotation.y = Math.PI / 4;
    techo2.position.set(0, 12, 0);

    // --- Puerta ---
    const puertaGeo = new THREE.BoxGeometry(2, 3, 0.3);
    const puerta = new THREE.Mesh(puertaGeo, matPuerta);
    puerta.position.set(0, 1.5, 4.1);

    // --- Ventanas ---
    const ventana1 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 0.2), matVentana);
    ventana1.position.set(-3, 4, 4.1);

    const ventana2 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 0.2), matVentana);
    ventana2.position.set(3, 4, 4.1);

    const ventana3 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 0.2), matVentana);
    ventana3.position.set(0, 10, 2.6);

    // --- Chimenea ---
    const chimeneaGeo = new THREE.BoxGeometry(1, 2, 1);
    const chimenea = new THREE.Mesh(chimeneaGeo, matPared);
    chimenea.position.set(2, 13, -1);

    // --- Agrupar todo ---
    const casaNavidad = new THREE.Group();
    casaNavidad.add(base, techo, segundo, techo2, puerta, ventana1, ventana2, ventana3, chimenea);

    casaNavidad.position.set(x, y, z);

    return casaNavidad;
}
