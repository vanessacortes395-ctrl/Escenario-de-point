import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

    
    // --- MATERIALES ---
    var mBlanco = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var mRojoNavidad = new THREE.MeshLambertMaterial({ color: 0xC00000 });
    var mAzulClaro = new THREE.MeshLambertMaterial({ color: 0xADD8E6 });
    var mVerdeClaro = new THREE.MeshLambertMaterial({ color: 0x90EE90 });
    var mNegro = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var mGrisMetal = new THREE.MeshLambertMaterial({ color: 0x808080 });
    var mVentana = new THREE.MeshLambertMaterial({ color: 0x87CEEB, transparent: true, opacity: 0.7 });
    var mGuirnalda = new THREE.MeshLambertMaterial({ color: 0x006400 }); 
    var mLazoRojo = new THREE.MeshLambertMaterial({ color: 0xFF0000 }); 

    // --- GEOMETRÍAS ---
    var chasisGeo = new THREE.BoxGeometry(6, 0.5, 2.5);
    var cuerpoInferiorGeo = new THREE.BoxGeometry(5.8, 2, 2.8);
    var cuerpoSuperiorGeo = new THREE.BoxGeometry(5.8, 2.5, 2.8);
    var frenteGeo = new THREE.BoxGeometry(1, 4.5, 2.8);
    var ruedaGeo = new THREE.CylinderGeometry(1, 1, 0.5, 16); 
    var llantaGeo = new THREE.CylinderGeometry(0.7, 0.7, 0.6, 16);
    var parabrisasGeo = new THREE.BoxGeometry(1, 1.8, 2.6);
    var ventanaGrandeGeo = new THREE.BoxGeometry(1.5, 1.2, 0.1);
    var ventanaTraseraGeo = new THREE.BoxGeometry(1.8, 1.5, 0.1);
    var florCentralGeo = new THREE.SphereGeometry(0.8, 8, 8);
    var centroFlorGeo = new THREE.SphereGeometry(0.4, 8, 8);
    var guirnaldaTechoGeo = new THREE.CylinderGeometry(0.15, 0.15, 5, 8);
    var lazoPequenoGeo = new THREE.SphereGeometry(0.2, 6, 6);

    // --- MESHES ---
    var chasis = new THREE.Mesh(chasisGeo, mNegro); chasis.position.set(0, 0.25, 0);
    var cuerpoInferior = new THREE.Mesh(cuerpoInferiorGeo, mRojoNavidad); cuerpoInferior.position.set(0, 1.5, 0);
    var cuerpoSuperior = new THREE.Mesh(cuerpoSuperiorGeo, mBlanco); cuerpoSuperior.position.set(0, 3.8, 0);
    var frente = new THREE.Mesh(frenteGeo, mBlanco); frente.position.set(-3.4, 3.0, 0);

    // Ruedas
    var ruedaFL = new THREE.Mesh(ruedaGeo, mNegro); ruedaFL.position.set(-2, 0.5, 1.6); ruedaFL.rotation.x = 1.5708; 
    var llantaFL = new THREE.Mesh(llantaGeo, mGrisMetal); llantaFL.position.set(-2, 0.5, 1.6); llantaFL.rotation.x = 1.5708;
    var ruedaFR = new THREE.Mesh(ruedaGeo, mNegro); ruedaFR.position.set(-2, 0.5, -1.6); ruedaFR.rotation.x = 1.5708; 
    var llantaFR = new THREE.Mesh(llantaGeo, mGrisMetal); llantaFR.position.set(-2, 0.5, -1.6); llantaFR.rotation.x = 1.5708; 
    var ruedaRL = new THREE.Mesh(ruedaGeo, mNegro); ruedaRL.position.set(2, 0.5, 1.6); ruedaRL.rotation.x = 1.5708;
    var llantaRL = new THREE.Mesh(llantaGeo, mGrisMetal); llantaRL.position.set(2, 0.5, 1.6); llantaRL.rotation.x = 1.5708; 
    var ruedaRR = new THREE.Mesh(ruedaGeo, mNegro); ruedaRR.position.set(2, 0.5, -1.6); ruedaRR.rotation.x = 1.5708; 
    var llantaRR = new THREE.Mesh(llantaGeo, mGrisMetal); llantaRR.position.set(2, 0.5, -1.6); llantaRR.rotation.x = 1.5708; 

    // Ventanas (solo las que quedan dentro del chasis)
    var parabrisas = new THREE.Mesh(parabrisasGeo, mVentana); parabrisas.position.set(-3.5, 4, 0); 
    var ventanal1 = new THREE.Mesh(ventanaGrandeGeo, mVentana); ventanal1.position.set(-1.5, 4, 1.45); 
    var ventanal2 = new THREE.Mesh(ventanaGrandeGeo, mVentana); ventanal2.position.set(0.5, 4, 1.45); 
    var ventanal4 = new THREE.Mesh(ventanaGrandeGeo, mVentana); ventanal4.position.set(-1.5, 4, -1.45); 
    var ventanal5 = new THREE.Mesh(ventanaGrandeGeo, mVentana); ventanal5.position.set(0.5, 4, -1.45); 
    var ventanaTrasera = new THREE.Mesh(ventanaTraseraGeo, mVentana); ventanaTrasera.position.set(3.0, 4, 0); ventanaTrasera.rotation.y = 1.5708; 

    // Decoraciones
    var florCentral = new THREE.Mesh(florCentralGeo, mAzulClaro); florCentral.position.set(-3.6, 2.5, 0);
    var centroFlor = new THREE.Mesh(centroFlorGeo, mVerdeClaro); centroFlor.position.set(-3.6, 2.5, 0.1);
    var guirnaldaTecho = new THREE.Mesh(guirnaldaTechoGeo, mGuirnalda); guirnaldaTecho.rotation.z = 1.5708; guirnaldaTecho.position.set(0, 5.2, 0);
    var lazo1 = new THREE.Mesh(lazoPequenoGeo, mLazoRojo); lazo1.position.set(-2.5, 5.2, 1.4); 
    var lazo2 = new THREE.Mesh(lazoPequenoGeo, mLazoRojo); lazo2.position.set(2.5, 5.2, 1.4); 
    var lazo3 = new THREE.Mesh(lazoPequenoGeo, mLazoRojo); lazo3.position.set(-2.5, 5.2, -1.4); 
    var lazo4 = new THREE.Mesh(lazoPequenoGeo, mLazoRojo); lazo4.position.set(2.5, 5.2, -1.4); 

    // --- AGRUPAR ---
    const CombiGroup = new THREE.Group();
    CombiGroup.add(
        chasis, cuerpoInferior, cuerpoSuperior, frente, 
        ruedaFL, llantaFL, ruedaFR, llantaFR, ruedaRL, llantaRL, ruedaRR, llantaRR,
        parabrisas, ventanal1, ventanal2, ventanal4, ventanal5, ventanaTrasera,
        florCentral, centroFlor,
        guirnaldaTecho, lazo1, lazo2, lazo3, lazo4
    );

    // Posición general
    CombiGroup.position.set(x, y, z);
    return CombiGroup;
}