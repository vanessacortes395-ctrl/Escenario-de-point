import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){
    const materialVerde = new THREE.MeshBasicMaterial({ color: 0x0b8a16 });
    const esferaGeo = new THREE.SphereGeometry(1, 8, 8);

    // Creamos varias esferas acomodadas en círculo
    const esfera1 = new THREE.Mesh(esferaGeo, materialVerde);
    esfera1.position.set(3, 0, 0);

    const esfera2 = new THREE.Mesh(esferaGeo, materialVerde);
    esfera2.position.set(2, 2, 0);

    const esfera3 = new THREE.Mesh(esferaGeo, materialVerde);
    esfera3.position.set(0, 3, 0);

    const esfera4 = new THREE.Mesh(esferaGeo, materialVerde);
    esfera4.position.set(-2, 2, 0);

    const esfera5 = new THREE.Mesh(esferaGeo, materialVerde);
    esfera5.position.set(-3, 0, 0);

    const esfera6 = new THREE.Mesh(esferaGeo, materialVerde);
    esfera6.position.set(-2, -2, 0);

    const esfera7 = new THREE.Mesh(esferaGeo, materialVerde);
    esfera7.position.set(0, -3, 0);

    const esfera8 = new THREE.Mesh(esferaGeo, materialVerde);
    esfera8.position.set(2, -2, 0);

    // AGRUPACIÓN
    const corona = new THREE.Group();
    corona.add(
        esfera1,
        esfera2,
        esfera3,
        esfera4,
        esfera5,
        esfera6,
        esfera7,
        esfera8
    );

    corona.position.set(x, y, z);
    return corona;
}    