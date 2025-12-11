import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){
   
    const TunelGroup = new THREE.Group();
    // --- CUERPO PRINCIPAL ---
    const gBase = new THREE.BoxGeometry(40, 25, 40);
    const mBase = new THREE.MeshLambertMaterial({ color: 0xC49A6C });
    const base = new THREE.Mesh(gBase, mBase);
    base.position.set(50, 15, 0);
    TunelGroup.add(base);

    // --- ARCO ENTRADA ---
    const gArco = new THREE.CylinderGeometry(10, 10, 8, 30, 1);
    const mArco = new THREE.MeshLambertMaterial({ color: 0x8B5A32 });
    const arco = new THREE.Mesh(gArco, mArco);
    arco.rotation.z =  1.55;
    arco.position.set(35, 27, 0);
    TunelGroup.add(arco);

    // --- VENTANAS ---
    const gVent = new THREE.BoxGeometry(20, 10, 2);
    const mVent = new THREE.MeshLambertMaterial({ color: 0xffffff });

    const ventana1 = new THREE.Mesh(gVent, mVent);
    ventana1.position.set(29, 20,0);
    TunelGroup.add(ventana1);
    ventana1.rotation.y=-55;

    const ventana2 = new THREE.Mesh(gVent, mVent);
    ventana2.position.set(50, 15, 20);
    TunelGroup.add(ventana2);

    // ------------------------------
    //          VÍAS
    // ------------------------------

    // Riel izquierdo
    const gRiel = new THREE.BoxGeometry(110, 1, 2);
    const mRiel = new THREE.MeshLambertMaterial({ color: 0x333333 });

    const riel1 = new THREE.Mesh(gRiel, mRiel);
    riel1.position.set(0, 3, -10);
    TunelGroup.add(riel1);

    // Riel derecho
    const riel2 = new THREE.Mesh(gRiel, mRiel);
    riel2.position.set(0, 3, 10);
    TunelGroup.add(riel2);

    // --- Traviesa 1 ---
    const gTrav = new THREE.BoxGeometry(20, 1, 3);
    const mTrav = new THREE.MeshLambertMaterial({ color: 0x5A3A1E });

    const trav1 = new THREE.Mesh(gTrav, mTrav);
    trav1.position.set(-15, 3, 0);
    trav1.rotation.y= 55;

    TunelGroup.add(trav1);

    // --- Traviesa 2 ---
    const trav2 = new THREE.Mesh(gTrav, mTrav);
    trav2.position.set(-25, 3, 0);
    trav2.rotation.y= 55;

    TunelGroup.add(trav2);

    // --- Traviesa 3 ---
    const trav3 = new THREE.Mesh(gTrav, mTrav);
    trav3.position.set(-5, 3, 0);
    trav3.rotation.y= 55;

    TunelGroup.add(trav3);

    // --- Traviesa 4 ---
    const trav4 = new THREE.Mesh(gTrav, mTrav);
    trav4.position.set(5, 3, 0);
    trav4.rotation.y= 55;

    TunelGroup.add(trav4);

    // --- Traviesa 5 ---
    const trav5 = new THREE.Mesh(gTrav, mTrav);
    trav5.position.set(15, 3, 0);
    trav5.rotation.y= 55;

    TunelGroup.add(trav5);

    // --- Traviesa 6 ---
    const trav6 = new THREE.Mesh(gTrav, mTrav);
    trav6.position.set(25, 3, 0);
    trav6.rotation.y= 55;
    
    TunelGroup.add(trav6);

        // --- Traviesa 7---
    const trav7 = new THREE.Mesh(gTrav, mTrav);
    trav7.position.set(-35, 3, 0);
    trav7.rotation.y= 55;

    TunelGroup.add(trav7);

            // --- Traviesa 8---
    const trav8 = new THREE.Mesh(gTrav, mTrav);
    trav8.position.set(-45, 3, 0);
    trav8.rotation.y= 55;

    TunelGroup.add(trav8);
    // --- Posición del túnel ---
    TunelGroup.position.set(x, y, z);

    return TunelGroup;
}