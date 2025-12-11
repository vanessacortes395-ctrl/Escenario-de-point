import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

    const BancaGroup = new THREE.Group();

    const mMadera = new THREE.MeshLambertMaterial({ color: 0x8b5a32 });
    const mMetal = new THREE.MeshLambertMaterial({ color: 0x333333 });

    // Asiento
    const asiento = new THREE.Mesh(new THREE.BoxGeometry(4, 0.3, 1.2), mMadera);
    asiento.position.set(0, 1, 0);
    BancaGroup.add(asiento);

    // Respaldo
    const respaldo = new THREE.Mesh(new THREE.BoxGeometry(4, 1.2, 0.3), mMadera);
    respaldo.position.set(0, 1.9, -0.45);
    BancaGroup.add(respaldo);

    // Patas
    const pata1 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1, 0.25), mMetal);
    pata1.position.set(1.8, 0.5, 0.4);
    BancaGroup.add(pata1);

    const pata2 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1, 0.25), mMetal);
    pata2.position.set(-1.8, 0.5, 0.4);
    BancaGroup.add(pata2);

    const pata3 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1, 0.25), mMetal);
    pata3.position.set(1.8, 0.5, -0.4);
    BancaGroup.add(pata3);

    const pata4 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1, 0.25), mMetal);
    pata4.position.set(-1.8, 0.5, -0.4);
    BancaGroup.add(pata4);

    BancaGroup.position.set(x, y, z);
    return BancaGroup;
}
