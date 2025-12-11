import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){
const pista = new THREE.Group();

    // --- Hielo (superficie) ---
    const gHielo = new THREE.BoxGeometry(300, 5, 200);
    const mHielo = new THREE.MeshLambertMaterial({ color: 0xD3FFFD}); // azul muy claro
    const hielo = new THREE.Mesh(gHielo, mHielo);
    hielo.position.set(0, 2.5, 0);
    pista.add(hielo);

    // --- Borde nieve frente ---
    const gBorde = new THREE.BoxGeometry(300, 10, 10);
    const mBorde = new THREE.MeshLambertMaterial({ color: 0xffffff });

    const bordeFrente = new THREE.Mesh(gBorde, mBorde);
    bordeFrente.position.set(0, 5, -105);
    pista.add(bordeFrente);

    // --- Borde nieve atrás ---
    const bordeAtras = new THREE.Mesh(gBorde, mBorde);
    bordeAtras.position.set(0, 5, 105);
    pista.add(bordeAtras);

    // --- Borde nieve izquierda ---
    const gBordeLados = new THREE.BoxGeometry(10, 10, 200);

    const bordeIzq = new THREE.Mesh(gBordeLados, mBorde);
    bordeIzq.position.set(-155, 5, 0);
    pista.add(bordeIzq);

    // --- Borde nieve derecha ---
    const bordeDer = new THREE.Mesh(gBordeLados, mBorde);
    bordeDer.position.set(155, 5, 0);
    pista.add(bordeDer);

    // Posición final
    pista.position.set(x, y, z);

    return pista;
}