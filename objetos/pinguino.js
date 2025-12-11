import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){
    
    const PinguinoGroup = new THREE.Group();

    const mNegro = new THREE.MeshLambertMaterial({ color: 0x000000 });
    const mBlanco = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const mNaranja = new THREE.MeshLambertMaterial({ color: 0xffa500 });

    // Cuerpo (Cilindro grande)
    const cuerpo = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 2.5, 8), mNegro);
    cuerpo.position.set(0, 1.25, 0);
    PinguinoGroup.add(cuerpo);

    // Barriga (Cilindro plano y más pequeño)
    const barriga = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.6, 1.8, 8), mBlanco);
    barriga.position.set(0, 1.25, 0.1); 
    PinguinoGroup.add(barriga);

    // Cabeza (Esfera)
    const cabeza = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 8), mNegro);
    cabeza.position.set(0, 2.5, 0);
    PinguinoGroup.add(cabeza);

    // Pico (Cono)
    const pico = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.3, 4), mNaranja);
    pico.rotation.x = 1.57; 
    pico.position.set(0, 2.5, 0.5);
    PinguinoGroup.add(pico);

    // Aleta Izquierda (Caja delgada)
    const aletaL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.2, 0.5), mNegro);
    aletaL.position.set(0.5, 1.5, 0);
    PinguinoGroup.add(aletaL);
    aletaL.rotation.z = 57;

    // Aleta Derecha (Caja delgada)
    const aletaR = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.2, 0.5), mNegro);
    aletaR.position.set(-0.5, 1.5, 0);
    PinguinoGroup.add(aletaR);
    aletaR.rotation.z = -57;

    PinguinoGroup.position.set(x, y, z);
    return PinguinoGroup;
}