import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

     // --- MATERIALES ---
    var mRojoCastillo = new THREE.MeshLambertMaterial({ color: 0x8B0000 });
    var mBlancoNieve = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var mDorado = new THREE.MeshLambertMaterial({ color: 0xFFD700 });
    var mLuzVentana = new THREE.MeshLambertMaterial({ color: 0xFFFFCC });
    var mMarronMadera = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    var mNegro = new THREE.MeshLambertMaterial({ color: 0x000000 });

    // --- GEOMETRÍAS ---
    var baseCastilloGeo = new THREE.BoxGeometry(20, 0.5, 12);
    var cuerpoCentralGeo = new THREE.BoxGeometry(8, 12, 6);
    var bandaCentralGeo = new THREE.BoxGeometry(8.2, 1, 6.2);
    var puertaPrincipalGeo = new THREE.CylinderGeometry(2, 2, 0.5, 16, 1, false, 0, 3.14);
    var huecoPuertaGeo = new THREE.BoxGeometry(4, 4, 0.5);
    var torreMediaGeo = new THREE.CylinderGeometry(2.5, 2.5, 10, 16);
    var tejadoTorreGeo = new THREE.ConeGeometry(3, 4, 16);
    var nievePuntaTorreGeo = new THREE.SphereGeometry(1.2, 8, 8);
    var ventanaCircularGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.2, 16);
    var torreEsquinaGeo = new THREE.CylinderGeometry(1.8, 1.8, 8, 16);
    var tejadoEsqGeo = new THREE.ConeGeometry(2.5, 3, 16);
    var nievePuntaEsqGeo = new THREE.SphereGeometry(1, 8, 8);
    var ventanaRectGeo = new THREE.BoxGeometry(1.2, 1.8, 0.2);
    var torreTraseraGeo = new THREE.CylinderGeometry(1.5, 1.5, 6, 16);
    var tejadoTraseroGeo = new THREE.ConeGeometry(2, 2.5, 16);
    var nievePuntaTraseraGeo = new THREE.SphereGeometry(0.8, 8, 8);
    var relojBaseGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.2, 32);
    var agujaHoraGeo = new THREE.BoxGeometry(0.1, 0.8, 0.1);
    var agujaMinutoGeo = new THREE.BoxGeometry(0.1, 1.2, 0.1);
    var carameloGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 16);
    var detalleLateralGeo = new THREE.BoxGeometry(0.5, 5, 0.2);


    // --- MESHES (AJUSTES CORREGIDOS) ---

    // Base y cuerpo
    var baseCastillo = new THREE.Mesh(baseCastilloGeo, mBlancoNieve); 
    baseCastillo.position.set(0, 0.25, 0);

    var cuerpoCentral = new THREE.Mesh(cuerpoCentralGeo, mRojoCastillo); 
    cuerpoCentral.position.set(0, 6.25, 0);

    var bandaCentral1 = new THREE.Mesh(bandaCentralGeo, mBlancoNieve); 
    bandaCentral1.position.set(0, 4, 0);

    var bandaCentral2 = new THREE.Mesh(bandaCentralGeo, mBlancoNieve); 
    bandaCentral2.position.set(0, 8, 0);

    

    var huecoPuerta = new THREE.Mesh(huecoPuertaGeo, mLuzVentana); 
    huecoPuerta.position.set(0, 2.25, 3.15);


    // Torres centrales
    var torreIzq = new THREE.Mesh(torreMediaGeo, mRojoCastillo); torreIzq.position.set(-5, 5.25, 0);
    var tejadoTorreIzq = new THREE.Mesh(tejadoTorreGeo, mBlancoNieve); tejadoTorreIzq.position.set(-5, 12.25, 0);
    var nieveTejadoTorreIzq = new THREE.Mesh(nievePuntaTorreGeo, mBlancoNieve); nieveTejadoTorreIzq.position.set(-5, 14.1, 0);
    var ventanaCircular1 = new THREE.Mesh(ventanaCircularGeo, mLuzVentana); ventanaCircular1.position.set(-5, 5, 2.5);

    var torreDer = new THREE.Mesh(torreMediaGeo, mRojoCastillo); torreDer.position.set(5, 5.25, 0);
    var tejadoTorreDer = new THREE.Mesh(tejadoTorreGeo, mBlancoNieve); tejadoTorreDer.position.set(5, 12.25, 0);
    var nieveTejadoTorreDer = new THREE.Mesh(nievePuntaTorreGeo, mBlancoNieve); nieveTejadoTorreDer.position.set(5, 14.1, 0);
    var ventanaCircular2 = new THREE.Mesh(ventanaCircularGeo, mLuzVentana); ventanaCircular2.position.set(5, 5, 2.5);


    // Esquinas frontales
    var torreEsqFL = new THREE.Mesh(torreEsquinaGeo, mRojoCastillo); torreEsqFL.position.set(-8, 4.25, 4);
    var tejadoEsqFL = new THREE.Mesh(tejadoEsqGeo, mBlancoNieve); tejadoEsqFL.position.set(-8, 10.75, 4);
    var nievePuntaEsqFL = new THREE.Mesh(nievePuntaEsqGeo, mBlancoNieve); nievePuntaEsqFL.position.set(-8, 12.3, 4);
    var ventanaRect1 = new THREE.Mesh(ventanaRectGeo, mLuzVentana); ventanaRect1.position.set(-8, 5, 4.6);

    var torreEsqFR = new THREE.Mesh(torreEsquinaGeo, mRojoCastillo); torreEsqFR.position.set(8, 4.25, 4);
    var tejadoEsqFR = new THREE.Mesh(tejadoEsqGeo, mBlancoNieve); tejadoEsqFR.position.set(8, 10.75, 4);
    var nievePuntaEsqFR = new THREE.Mesh(nievePuntaEsqGeo, mBlancoNieve); nievePuntaEsqFR.position.set(8, 12.3, 4);
    var ventanaRect2 = new THREE.Mesh(ventanaRectGeo, mLuzVentana); ventanaRect2.position.set(8, 5, 4.6);


    // Esquinas traseras
    var torreEsqTL = new THREE.Mesh(torreTraseraGeo, mRojoCastillo); torreEsqTL.position.set(-8, 3.25, -4);
    var tejadoEsqTL = new THREE.Mesh(tejadoTraseroGeo, mBlancoNieve); tejadoEsqTL.position.set(-8, 8, -4);
    var nievePuntaEsqTL = new THREE.Mesh(nievePuntaTraseraGeo, mBlancoNieve); nievePuntaEsqTL.position.set(-8, 9.4, -4);

    var torreEsqTR = new THREE.Mesh(torreTraseraGeo, mRojoCastillo); torreEsqTR.position.set(8, 3.25, -4);
    var tejadoEsqTR = new THREE.Mesh(tejadoTraseroGeo, mBlancoNieve); tejadoEsqTR.position.set(8, 8, -4);
    var nievePuntaEsqTR = new THREE.Mesh(nievePuntaTraseraGeo, mBlancoNieve); nievePuntaEsqTR.position.set(8, 9.4, -4);


    // Reloj
    var relojBase = new THREE.Mesh(relojBaseGeo, mDorado); 
    relojBase.position.set(0, 10, 3); 
    relojBase.rotation.x = 1.57;

    var agujaHora = new THREE.Mesh(agujaHoraGeo, mNegro); 
    agujaHora.position.set(0, 10.35, 3.15);

    var agujaMinuto = new THREE.Mesh(agujaMinutoGeo, mNegro); 
    agujaMinuto.position.set(0.35, 10.6, 3.15);
    agujaMinuto.rotation.z = -0.78;


    // AGRUPAR TODO
    const CastilloGroup = new THREE.Group();
    CastilloGroup.add(
        cuerpoCentral, bandaCentral1, bandaCentral2,
        huecoPuerta,
        torreIzq, tejadoTorreIzq, nieveTejadoTorreIzq, ventanaCircular1,
        torreDer, tejadoTorreDer, nieveTejadoTorreDer, ventanaCircular2,
        torreEsqFL, tejadoEsqFL, nievePuntaEsqFL, ventanaRect1,
        torreEsqFR, tejadoEsqFR, nievePuntaEsqFR, ventanaRect2,
        torreEsqTL, tejadoEsqTL, nievePuntaEsqTL,
        torreEsqTR, tejadoEsqTR, nievePuntaEsqTR,
        relojBase, agujaHora, agujaMinuto,
        
    );

    CastilloGroup.position.set(x, y, z);
    return CastilloGroup;
}