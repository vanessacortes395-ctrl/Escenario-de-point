import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

// Materiales
    const materialCafe = new THREE.MeshBasicMaterial({ color: 0x9b5a2a }); // pared
    const materialRojo = new THREE.MeshBasicMaterial({ color: 0xb30000 }); // techo
    const materialBlanco = new THREE.MeshBasicMaterial({ color: 0xffffff }); // ventanas / nieve
    const materialChocolate = new THREE.MeshBasicMaterial({ color: 0x4b2e14 }); // puerta
    const materialCaramelo = new THREE.MeshBasicMaterial({ color: 0xff3c3c }); // esferas dulces
    const materialAmarillo = new THREE.MeshBasicMaterial({ color: 0xFFD11A }); // esferas dulces
    // BASE (la casa)
    const baseGeo = new THREE.BoxGeometry(8, 5, 6);
    const base = new THREE.Mesh(baseGeo, materialCafe);
    base.position.set(0, 2.5, 0);

    // TECHO (dos caras inclinadas)
    const techoGeo = new THREE.ConeGeometry(6, 4, 4);
    const techo = new THREE.Mesh(techoGeo, materialRojo);
    techo.position.set(0, 7, 0);
    techo.rotation.y = 0.8; // para que no se vea cuadrado plano

    // PUERTA
    const puertaGeo = new THREE.BoxGeometry(2, 3, 0.5);
    const puerta = new THREE.Mesh(puertaGeo, materialChocolate);
    puerta.position.set(0, 1.5, 3.2);

    // VENTANAS (dos)
    const ventanaGeo = new THREE.BoxGeometry(1.5, 1.5, 0.3);

    const ventana1 = new THREE.Mesh(ventanaGeo, materialBlanco);
    ventana1.position.set(-2.5, 2.5, 3.1);

    const ventana2 = new THREE.Mesh(ventanaGeo, materialBlanco);
    ventana2.position.set(2.5, 2.5, 3.1);

    // CHIMENEA
    const chimeneaGeo = new THREE.BoxGeometry(1, 3, 1);
    const chimenea = new THREE.Mesh(chimeneaGeo, materialCafe);
    chimenea.position.set(-2, 7, -1);

    // CARAMELOS (esferas decorativas)
    const esferaGeo = new THREE.SphereGeometry(0.2, 8, 8);

    const dulce1 = new THREE.Mesh(esferaGeo, materialCaramelo);
    dulce1.position.set(1, 3.2, 3.5);

    const dulce2 = new THREE.Mesh(esferaGeo, materialCaramelo);
    dulce2.position.set(-1, 3.2, 3.5);

    const dulce3 = new THREE.Mesh(esferaGeo, materialCaramelo);
    dulce3.position.set(0, 3.2, 3.5);

        const dulce4 = new THREE.Mesh(esferaGeo, materialAmarillo);
    dulce4.position.set(0.5, 3.2, 3.5);
        const dulce5 = new THREE.Mesh(esferaGeo, materialAmarillo);
    dulce5.position.set(-0.5, 3.2, 3.5);
        const dulce6 = new THREE.Mesh(esferaGeo, materialAmarillo);
    dulce6.position.set(1.2, 2.5, 3.5);
        const dulce7 = new THREE.Mesh(esferaGeo, materialAmarillo);
    dulce7.position.set(-1.2,2.5, 3.5);
        const dulce8 = new THREE.Mesh(esferaGeo, materialCaramelo);
    dulce8.position.set(-1.2, 1.8, 3.5);
            const dulce9 = new THREE.Mesh(esferaGeo, materialCaramelo);
    dulce9.position.set(1.2, 1.8, 3.5);
                const dulce10 = new THREE.Mesh(esferaGeo, materialAmarillo);
    dulce10.position.set(1.2, 1.2, 3.5);
                const dulce11 = new THREE.Mesh(esferaGeo, materialAmarillo);
    dulce11.position.set(-1.2, 1.2, 3.5);
                const dulce12 = new THREE.Mesh(esferaGeo, materialCaramelo);
    dulce12.position.set(1.2, 0.5, 3.5);
                    const dulce13 = new THREE.Mesh(esferaGeo, materialCaramelo);
    dulce13.position.set(-1.2, 0.5, 3.5);


     // NIEVE SOBRE EL TECHO
    const nieveGeo = new THREE.BoxGeometry(7, 0.5, 4);
    const nieve = new THREE.Mesh(nieveGeo, materialBlanco);
    nieve.position.set(0, 6.5, 0);

    // NIEVE MÁS DELGADA EN LOS BORDES
    const bordeNieveGeo = new THREE.BoxGeometry(8, 0.3, 0.6);

    const nieveBorde1 = new THREE.Mesh(bordeNieveGeo, materialBlanco);
    nieveBorde1.position.set(0, 5.3, 4.2);
nieveBorde1.rotation.x = 0.8;
    const nieveBorde2 = new THREE.Mesh(bordeNieveGeo, materialBlanco);
    nieveBorde2.position.set(0, 5.3, -4.2);
nieveBorde2.rotation.x = -0.8;

    // AGRUPACIÓN FINAL
    const casa = new THREE.Group();
    casa.add(base,techo,puerta,ventana1,ventana2,chimenea,dulce1,dulce2,dulce3,dulce4,dulce5,dulce6,dulce7,dulce8
    ,dulce9,dulce10,dulce11,dulce12, dulce13,nieve,
        nieveBorde1,
        nieveBorde2 );

    casa.position.set(x, y, z);
    return casa;
}