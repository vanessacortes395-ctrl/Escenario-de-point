import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){
      // MATERIALES
    const rojo = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    const verde = new THREE.MeshLambertMaterial({ color: 0x0a8f0a });
    const azul = new THREE.MeshLambertMaterial({ color: 0x2a4cff });
    const negro = new THREE.MeshLambertMaterial({ color: 0x000000 });
    const gris = new THREE.MeshLambertMaterial({ color: 0x666666 });
    const humoMat = new THREE.MeshLambertMaterial({ color: 0xd8d8d8 });

    // ========== LOCOMOTORA ==============

    // Cabina
    const cabina = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), rojo);
    cabina.position.set(-1, 5, 0);

    // Cuerpo de enfrente
    const cuerpo = new THREE.Mesh(new THREE.BoxGeometry(18, 6, 8), verde);
    cuerpo.position.set(14, 3, 0);

    // Chimenea
    const chimenea = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 8, 16), negro);
    chimenea.position.set(-3, 12, -2);

    // Faro
    const faro = new THREE.Mesh(
        new THREE.SphereGeometry(2, 16, 16),
        new THREE.MeshLambertMaterial({ color: 0xffff00 })
    );
    faro.position.set(-5, 6, 0);

    // Ruedas locomotora
    const ruedaGeo = new THREE.CylinderGeometry(3, 3, 2, 16);

    const r1 = new THREE.Mesh(ruedaGeo, gris);
    const r2 = new THREE.Mesh(ruedaGeo, gris);
    const r3 = new THREE.Mesh(ruedaGeo, gris);
    const r4 = new THREE.Mesh(ruedaGeo, gris);

    r1.position.set(-4, 1, 5);
    r1.rotation.x = 55;

    r2.position.set(-4, 1, -5);
    r2.rotation.x = 55;

    r3.position.set(10, 1, 5);
    r3.rotation.x = 55;

    r4.position.set(10, 1, -5);
    r4.rotation.x = 55;

    // Humo
    const humo1 = new THREE.Mesh(new THREE.SphereGeometry(2.5, 16, 16), humoMat);
    const humo2 = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 16), humoMat);
    const humo3 = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 16), humoMat);

    humo1.position.set(-2, 18, -2);
    humo2.position.set(-1, 22, -2);
    humo3.position.set(0, 26, -2);

    // ========== VAGÓN 1 ==============

    const vagon1Cuerpo = new THREE.Mesh(new THREE.BoxGeometry(20, 8, 10), azul);
    vagon1Cuerpo.position.set(35, 4, 0);

    const vagon1R1 = new THREE.Mesh(ruedaGeo, negro);
    const vagon1R2 = new THREE.Mesh(ruedaGeo, negro);
    vagon1R1.rotation.x = vagon1R2.rotation.x = 55;

    vagon1R1.position.set(32, 1, 5);
     
    vagon1R2.position.set(32, 1, -5);
     

    // ========== VAGÓN 2 ==============

    const vagon2Cuerpo = new THREE.Mesh(new THREE.BoxGeometry(20, 8, 10), rojo);
    vagon2Cuerpo.position.set(57, 4, 0);

    const vagon2R1 = new THREE.Mesh(ruedaGeo, negro);
    const vagon2R2 = new THREE.Mesh(ruedaGeo, negro);
    vagon2R1.rotation.x = vagon2R2.rotation.x =55;

    vagon2R1.position.set(57, 1, 5);
    vagon2R2.position.set(57, 1, -5);

    // Conectores
    const con1 = new THREE.Mesh(new THREE.BoxGeometry(40, 1, 1), gris);
    con1.position.set(18, 3, 0);

    const con2 = new THREE.Mesh(new THREE.BoxGeometry(40, 1, 1), gris);
    con2.position.set(40, 3, 0);


    // ========== GROUP FINAL ==============

    const tren = new THREE.Group();

    tren.add(
        // Locomotora
        cabina, cuerpo, chimenea, faro,
        r1, r2, r3, r4,
        humo1, humo2, humo3,

        // VAGÓN 1
        vagon1Cuerpo, vagon1R1, vagon1R2,

        // VAGÓN 2
        vagon2Cuerpo, vagon2R1, vagon2R2,

        // Conectores
        con1, con2
    );

    tren.position.set(x, y, z);

    return tren;
}