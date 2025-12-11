import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

     const RegalosGroup = new THREE.Group();

    const mRojo = new THREE.MeshLambertMaterial({ color: 0xcc0000 });
    const mVerde = new THREE.MeshLambertMaterial({ color: 0x00aa00 });
    const mDorado = new THREE.MeshLambertMaterial({ color: 0xffd700 });

    // Regalo 1 (Grande - Rojo)
    const caja1 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), mRojo);
    caja1.position.set(-1.5, 0.75, 0);
    RegalosGroup.add(caja1);
    // Cinta vertical
    const cinta1v = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.55, 1.55), mDorado);
    cinta1v.position.set(-1.5, 0.75, 0);
    RegalosGroup.add(cinta1v);
    // Cinta horizontal
    const cinta1h = new THREE.Mesh(new THREE.BoxGeometry(1.55, 1.55, 0.15), mDorado);
    cinta1h.position.set(-1.5, 0.75, 0);
    RegalosGroup.add(cinta1h);


    // Regalo 2 (Mediano - Verde)
    const caja2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), mVerde);
    caja2.position.set(0.5, 0.5, 0.5);
    RegalosGroup.add(caja2);
    // Cinta vertical
    const cinta2v = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.05, 1.05), mRojo);
    cinta2v.position.set(0.5, 0.5, 0.5);
    RegalosGroup.add(cinta2v);
    // Lazo (Caja pequeña)
    const lazo2 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.2, 0.4), mRojo);
    lazo2.position.set(0.5, 1.05, 0.5);
    RegalosGroup.add(lazo2);


    // Regalo 3 (Pequeño - Rojo)
    const caja3 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.8), mRojo);
    caja3.position.set(1.5, 0.3, -1);
    RegalosGroup.add(caja3);
    // Cinta horizontal
    const cinta3h = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.65, 0.1), mDorado);
    cinta3h.position.set(1.5, 0.3, -1);
    RegalosGroup.add(cinta3h);

    RegalosGroup.position.set(x, y, z);
    return RegalosGroup;
}
