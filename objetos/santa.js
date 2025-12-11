import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){
    
// --- MATERIALES ---
    const rojo = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const blanco = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const piel = new THREE.MeshStandardMaterial({ color: 0xffd7b5 });
    const negro = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const narizRoja = new THREE.MeshStandardMaterial({ color: 0xff4444 });

    // --- BARBA ---
    const barbaGeo = new THREE.SphereGeometry(1.5, 16, 16);
    const barba = new THREE.Mesh(barbaGeo, blanco);
    barba.position.set(0, 5.5, 1);

    // --- CABEZA ---
    const cabezaGeo = new THREE.SphereGeometry(1.8, 16, 16);
    const cabeza = new THREE.Mesh(cabezaGeo, piel);
    cabeza.position.set(0, 7, 0);

    // --- NARIZ ---
    const narizGeo = new THREE.SphereGeometry(0.4, 12, 12);
    const nariz = new THREE.Mesh(narizGeo, narizRoja);
    nariz.position.set(0, 7, 1.5);

    // --- OJOS ADORABLES ---
    const ojoGeo = new THREE.SphereGeometry(0.25, 12, 12);
    const ojoIzq = new THREE.Mesh(ojoGeo, negro);
    const ojoDer = new THREE.Mesh(ojoGeo, negro);
    ojoIzq.position.set(-0.45, 7.5, 1.5);
    ojoDer.position.set(0.45, 7.5, 1.5);

    // --- CEJAS ---
    const cejaGeo = new THREE.BoxGeometry(0.7, 0.15, 0.15);
    const cejaIzq = new THREE.Mesh(cejaGeo, blanco);
    const cejaDer = new THREE.Mesh(cejaGeo, blanco);
    cejaIzq.position.set(-0.45, 8, 1.5);
    cejaDer.position.set(0.45, 8, 1.5);
    cejaIzq.rotation.z = 0.2;
    cejaDer.rotation.z = -0.2;

    // --- LENTES ---
    const aroGeo = new THREE.RingGeometry(0.35, 0.5, 12);
    const aroIzq = new THREE.Mesh(aroGeo, negro);
    const aroDer = new THREE.Mesh(aroGeo, negro);
    aroIzq.position.set(-0.6, 7.5, 1.8);
    aroDer.position.set(0.6, 7.5, 1.8);
    aroIzq.rotation.z = 1.57;
    aroDer.rotation.z = 1.57;

    const puenteGeo = new THREE.BoxGeometry(0.6, 0.1, 0.1);
    const puente = new THREE.Mesh(puenteGeo, negro);
    puente.position.set(0, 7.5, 1.8);

    // --- BIGOTE CURVADO ---
    const bigoteGeo = new THREE.SphereGeometry(0.6, 12, 12);
    const bigoteIzq = new THREE.Mesh(bigoteGeo, blanco);
    const bigoteDer = new THREE.Mesh(bigoteGeo, blanco);

    bigoteIzq.scale.set(1.3, 0.6, 1);
    bigoteDer.scale.set(1.3, 0.6, 1);

    bigoteIzq.position.set(-0.5, 7, 1.2);
    bigoteDer.position.set(0.5,7, 1.2);

    // Curva suave como sonrisa
    bigoteIzq.rotation.z = 0.35;
    bigoteDer.rotation.z = -0.35;
    // --- GORRO --- //
    const gorroGeo = new THREE.ConeGeometry(1.5, 2.5, 8);
    const gorro = new THREE.Mesh(gorroGeo, rojo); 
    gorro.position.set(0, 9.5, 0); 

    const pompónGeo = new THREE.SphereGeometry(0.4, 12, 12); 
    const pompón = new THREE.Mesh(pompónGeo, blanco); 
    pompón.position.set(0, 10.5, 0); 
    gorro.add(pompón);

    // --- CUERPO ---
    const cuerpoGeo = new THREE.CylinderGeometry(2, 2, 4, 12);
    const cuerpo = new THREE.Mesh(cuerpoGeo, rojo);
    cuerpo.position.set(0, 4, 0);

    // --- CINTURÓN ---
    const cinturonGeo = new THREE.BoxGeometry(4, 0.4, 4);
    const cinturon = new THREE.Mesh(cinturonGeo, negro);
    cinturon.position.set(0, 3, 0);

    // --- HEBILLA ---
    const hebillaGeo = new THREE.BoxGeometry(0.9, 0.9, 0.2);
    const hebilla = new THREE.Mesh(hebillaGeo, blanco);
    hebilla.position.set(0, 3, 2);

    // --- BRAZOS ---
    const brazoGeo = new THREE.CylinderGeometry(0.4, 0.4, 3, 8);
    const brazoIzq = new THREE.Mesh(brazoGeo, rojo);
    const brazoDer = new THREE.Mesh(brazoGeo, rojo);
    brazoIzq.position.set(2.3, 4.5, 0);
    brazoDer.position.set(-2.3, 4.5, 0);
    brazoIzq.rotation.z = 0.78;
    brazoDer.rotation.z = -0.78;

    // --- MANOS ---
    const manoGeo = new THREE.SphereGeometry(0.6, 12, 12);
    const manoIzq = new THREE.Mesh(manoGeo, piel);
    const manoDer = new THREE.Mesh(manoGeo, piel);
    manoIzq.position.set(0, -1.7, 0);
    manoDer.position.set(0, -1.7, 0);
    brazoIzq.add(manoIzq);
    brazoDer.add(manoDer);

    // --- PIERNAS ---
    const piernaGeo = new THREE.CylinderGeometry(0.7, 0.7, 2.5, 8);
    const piernaIzq = new THREE.Mesh(piernaGeo, rojo);
    const piernaDer = new THREE.Mesh(piernaGeo, rojo);
    piernaIzq.position.set(-1, 1.5, 0);
    piernaDer.position.set(1, 1.5, 0);

    // --- BOTAS ---
    const botaGeo = new THREE.BoxGeometry(1.4, 1, 2);
    const botaIzq = new THREE.Mesh(botaGeo, negro);
    const botaDer = new THREE.Mesh(botaGeo, negro);
    botaIzq.position.set(-1, 0.5, 0.3);
    botaDer.position.set(1, 0.5, 0.3);

    // --- GRUPO FINAL ---
    const santa = new THREE.Group();
    santa.add(cabeza, barba,cuerpo, cinturon, hebilla,brazoIzq, brazoDer,
    pompón,gorro,piernaIzq, piernaDer,botaIzq, botaDer,nariz,ojoIzq, ojoDer,cejaIzq, cejaDer,aroIzq, aroDer, puente,bigoteIzq, bigoteDer
    );

    santa.position.set(x, y, z);

    return santa;
}