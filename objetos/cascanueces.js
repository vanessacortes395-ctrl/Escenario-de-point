 import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){
    
 // --- MATERIALES ---
    const azulRey = new THREE.MeshStandardMaterial({ color: 0x002366 });
    const amarillo = new THREE.MeshStandardMaterial({ color: 0xffd700 });
    const piel = new THREE.MeshStandardMaterial({ color: 0xffd7b5 });
    const negro = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const blanco = new THREE.MeshStandardMaterial({ color: 0xffffff });

    // --- CABEZA ---
    const cabezaGeo = new THREE.SphereGeometry(1.8, 16, 16);
    const cabeza = new THREE.Mesh(cabezaGeo, piel);
    cabeza.position.set(0, 9, 0);

    // --- BARBA CUADRADA ---
    const barbaGeo = new THREE.BoxGeometry(1.8, 0.5, 0.2);
    const barba = new THREE.Mesh(barbaGeo, blanco);
    barba.position.set(0, 8, 1.9);

    // --- NARIZ ---
    const narizGeo = new THREE.SphereGeometry(0.3, 12, 12);
    const nariz = new THREE.Mesh(narizGeo, piel);
    nariz.position.set(0, 9, 2);

    // --- OJOS ---
    const ojoGeo = new THREE.SphereGeometry(0.25, 12, 12);
    const ojoIzq = new THREE.Mesh(ojoGeo, negro);
    const ojoDer = new THREE.Mesh(ojoGeo, negro);
    ojoIzq.position.set(-0.5, 9.4, 1.5);
    ojoDer.position.set(0.5, 9.4, 1.5);

    // --- BOCA / MECANISMO ---
    const bocaGeo = new THREE.BoxGeometry(1.7, 0.1, 0.2);
    const boca = new THREE.Mesh(bocaGeo, negro);
    boca.position.set(0, 8, 2);

        // --- BIGOTE CURVADO ---
    const bigoteGeo = new THREE.SphereGeometry(0.6, 12, 12);
    const bigoteIzq = new THREE.Mesh(bigoteGeo, blanco);
    const bigoteDer = new THREE.Mesh(bigoteGeo, blanco);

    bigoteIzq.scale.set(1.3, 0.6, 1);
    bigoteDer.scale.set(1.3, 0.6, 1);

    bigoteIzq.position.set(-0.5, 8.5, 2);
    bigoteDer.position.set(0.5,8.5, 2);

    // Curva suave como sonrisa
    bigoteIzq.rotation.z = 0.35;
    bigoteDer.rotation.z = -0.35;
    

    // --- CASCO ---
    const cascoGeo = new THREE.CylinderGeometry(1.8, 1.8, 2.2, 12);
    const casco = new THREE.Mesh(cascoGeo, azulRey);
    casco.position.set(0, 11, 0);

    // --- PLUMA DECORATIVA ---
    const plumaGeo = new THREE.BoxGeometry(0.3, 2.5, 0.3);
    const pluma = new THREE.Mesh(plumaGeo, amarillo);
    pluma.position.set(0, 2, 1.5);
    casco.add(pluma);

    // --- TIRA AMARILLA DEL CASCO ---
    const cintaGeo = new THREE.BoxGeometry(2.4, 0.3, 2.4);
    const cinta = new THREE.Mesh(cintaGeo, amarillo);
    cinta.position.set(0, 10.2, 2);

    // --- CUERPO ---
    const torsoGeo = new THREE.CylinderGeometry(2.2, 2.2, 5, 12);
    const torso = new THREE.Mesh(torsoGeo, azulRey);
    torso.position.set(0, 5.2, 0);

    // --- BOTONES AMARILLOS ---
    const botonGeo = new THREE.SphereGeometry(0.25, 12, 12);
    const boton1 = new THREE.Mesh(botonGeo, amarillo);
    const boton2 = new THREE.Mesh(botonGeo, amarillo);
    const boton3 = new THREE.Mesh(botonGeo, amarillo);

    boton1.position.set(0, 6.8, 2);
    boton2.position.set(0, 5.2, 2);
    boton3.position.set(0, 3.6, 2);

    // --- HOMBRERAS ---
    const hombroGeo = new THREE.SphereGeometry(1, 12, 12);
    const hombroIzq = new THREE.Mesh(hombroGeo, amarillo);
    const hombroDer = new THREE.Mesh(hombroGeo, amarillo);
    hombroIzq.position.set(-2.5, 7, 0);
    hombroDer.position.set(2.5, 7, 0);

    // --- BRAZOS ---
    const brazoGeo = new THREE.CylinderGeometry(0.5, 0.5, 3.5, 12);
    const brazoIzq = new THREE.Mesh(brazoGeo, azulRey);
    const brazoDer = new THREE.Mesh(brazoGeo, azulRey);
    brazoIzq.position.set(-2.5, 5.5, 0);
    brazoDer.position.set(2.5, 5.5, 0);

    // --- GUANTES ---
    const manoGeo = new THREE.SphereGeometry(0.7, 12, 12);
    const manoIzq = new THREE.Mesh(manoGeo, blanco);
    const manoDer = new THREE.Mesh(manoGeo, blanco);
    manoIzq.position.set(0, -1.8, 0);
    manoDer.position.set(0, -1.8, 0);
    brazoIzq.add(manoIzq);
    brazoDer.add(manoDer);

    // --- PIERNA ---
    const piernaGeo = new THREE.CylinderGeometry(0.8, 0.8, 3.5, 12);
    const piernaIzq = new THREE.Mesh(piernaGeo, azulRey);
    const piernaDer = new THREE.Mesh(piernaGeo, azulRey);
    piernaIzq.position.set(-1, 2.5, 0);
    piernaDer.position.set(1, 2.5, 0);

    // --- BOTAS ---
    const botaGeo = new THREE.BoxGeometry(1.8, 1, 2.5);
    const botaIzq = new THREE.Mesh(botaGeo, negro);
    const botaDer = new THREE.Mesh(botaGeo, negro);
    botaIzq.position.set(-1, 1, 0.6);
    botaDer.position.set(1, 1, 0.6);

    // --- GRUPO FINAL ---
    const cascanueces = new THREE.Group();
    cascanueces.add(
        cabeza, barba, nariz, ojoIzq, ojoDer, boca,
        casco, cinta, torso,
        boton1, boton2, boton3,
        hombroIzq, hombroDer,
        brazoIzq, brazoDer,
        piernaIzq, piernaDer,
        botaIzq, botaDer,
        bigoteIzq,bigoteDer
    );

    cascanueces.position.set(x, y, z);

    return cascanueces;
}