import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){
      // Cuerpo de la piñata
    const materialCentro = new THREE.MeshBasicMaterial({ color: 0xffe600 }); // amarillo
    const cuerpoGeo = new THREE.SphereGeometry(3.5, 12, 12);
    const cuerpo = new THREE.Mesh(cuerpoGeo, materialCentro);
    cuerpo.position.set(0, 9.5, 0);

    // Materiales para los picos (colores variados)
    const rojo = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const verde = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const azul = new THREE.MeshBasicMaterial({ color: 0x0066ff });
    const rosa = new THREE.MeshBasicMaterial({ color: 0xff4dc4 });
    const naranja = new THREE.MeshBasicMaterial({ color: 0xff8c00 });
    const morado = new THREE.MeshBasicMaterial({ color: 0x8000ff });

    // Geometría de los picos
    const picoGeo = new THREE.ConeGeometry(2, 5, 8);

    // Crear 7 picos con diferentes posiciones
    const pico1 = new THREE.Mesh(picoGeo, rojo);
    pico1.position.set(0, 14, 0);

    const pico2 = new THREE.Mesh(picoGeo, verde);
    pico2.position.set(0, 11, 5);
  pico2.rotation.x = -5;

    const pico3 = new THREE.Mesh(picoGeo, azul);
    pico3.position.set(0, 11, -5);
  pico3.rotation.x = 5;

    const pico4 = new THREE.Mesh(picoGeo, rosa);
    pico4.position.set(-5, 9, 0);
    pico4.rotation.z = 8;

    const pico5 = new THREE.Mesh(picoGeo, naranja);
    pico5.position.set(5, 9, 0);
pico5.rotation.z = -8;

    const pico6 = new THREE.Mesh(picoGeo, morado);
    pico6.position.set(0, 5, 2.8);
pico6.rotation.x = -10;

    const pico7 = new THREE.Mesh(picoGeo, rojo);
    pico7.position.set(0, 5, -2.8);
pico7.rotation.x = 10;

    // AGRUPACIÓN
    const pinata = new THREE.Group();
    pinata.add(
        cuerpo,
        pico1,
        pico2,
        pico3,
        pico4,
        pico5,
        pico6,
        pico7
    );

    pinata.position.set(x, y, z);
   
    return pinata;
}   