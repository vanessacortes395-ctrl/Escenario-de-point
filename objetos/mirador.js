import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){
    
    // --- MATERIALES ---
    var mMaderaOscura = new THREE.MeshLambertMaterial({ color: 0x5C4033 }); // Marrón oscuro para la estructura
    var mTejadoGris = new THREE.MeshLambertMaterial({ color: 0x4A4A4A }); // Gris oscuro para el tejado
    var mNieve = new THREE.MeshLambertMaterial({ color: 0xFFFFFF }); // Blanco para la nieve
    var mPiedraBase = new THREE.MeshLambertMaterial({ color: 0x808080 }); // Gris para la base de piedra
    var mGuirnaldaVerde = new THREE.MeshLambertMaterial({ color: 0x006400 }); // Verde oscuro para la corona
    var mLazoRojo = new THREE.MeshLambertMaterial({ color: 0xFF0000 }); // Rojo brillante para el lazo
    var mBarandilla = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); // Marrón claro para barandillas

    // --- GEOMETRÍAS REUTILIZABLES ---
    var pilarGeo = new THREE.BoxGeometry(0.3, 5, 0.3); // Para los pilares verticales
    var travesanoGeo = new THREE.BoxGeometry(0.3, 0.3, 2.5); // Para travesaños horizontales (entre pilares)
    var tejadoBaseGeo = new THREE.CylinderGeometry(4, 5, 1, 6); // Base del tejado hexagonal
    var tejadoCapaGeo = new THREE.ConeGeometry(4.5, 2, 6); // Parte superior del tejado
    var nieveTejadoCapaGeo = new THREE.ConeGeometry(4.6, 2.1, 6); // Para la nieve sobre el tejado
    var baseCircularGeo = new THREE.CylinderGeometry(5, 5, 0.5, 32); // Base nevada del suelo
    var basePiedraGeo = new THREE.CylinderGeometry(4.5, 4.5, 0.8, 12); // Base de piedra debajo
    var barandillaHorizontalGeo = new THREE.BoxGeometry(2.2, 0.2, 0.2);
    var barandillaVerticalGeo = new THREE.BoxGeometry(0.15, 1, 0.15);
    var coronaPrincipalGeo = new THREE.TorusGeometry(1, 0.2, 8, 16); // Para la corona
    var lazoCoronaGeo = new THREE.BoxGeometry(0.8, 0.8, 0.2); // Para el lazo


    // ❄️ BASE DE NIEVE Y PIEDRA ❄️
    var baseNieve = new THREE.Mesh(baseCircularGeo, mNieve); baseNieve.position.set(0, 0.25, 0);
    var basePiedra = new THREE.Mesh(basePiedraGeo, mPiedraBase); basePiedra.position.set(0, 0.65, 0);

    // 🪵 PILARES VERTICALES (6 pilares) 🪵
    var pilar1 = new THREE.Mesh(pilarGeo, mMaderaOscura); pilar1.position.set(2.5, 3.25, 0);
    var pilar2 = new THREE.Mesh(pilarGeo, mMaderaOscura); pilar2.position.set(1.25, 3.25, 2.165); 
    var pilar3 = new THREE.Mesh(pilarGeo, mMaderaOscura); pilar3.position.set(-1.25, 3.25, 2.165);
    var pilar4 = new THREE.Mesh(pilarGeo, mMaderaOscura); pilar4.position.set(-2.5, 3.25, 0);
    var pilar5 = new THREE.Mesh(pilarGeo, mMaderaOscura); pilar5.position.set(-1.25, 3.25, -2.165);
    var pilar6 = new THREE.Mesh(pilarGeo, mMaderaOscura); pilar6.position.set(1.25, 3.25, -2.165);

    // 🪵 TRAVESAÑOS SUPERIORES (6 entre pilares) 🪵
    var travesanoSup1 = new THREE.Mesh(travesanoGeo, mMaderaOscura); travesanoSup1.position.set(1.875, 5.75, 1.0825); 
    travesanoSup1.rotation.y = 0.5236; // 30 grados
    var travesanoSup2 = new THREE.Mesh(travesanoGeo, mMaderaOscura); travesanoSup2.position.set(0, 5.75, 2.165); 
    travesanoSup2.rotation.y = 1.5708; // 90 grados
    var travesanoSup3 = new THREE.Mesh(travesanoGeo, mMaderaOscura); travesanoSup3.position.set(-1.875, 5.75, 1.0825); 
    travesanoSup3.rotation.y = 2.618; // 150 grados
    var travesanoSup4 = new THREE.Mesh(travesanoGeo, mMaderaOscura); travesanoSup4.position.set(-1.875, 5.75, -1.0825); 
    travesanoSup4.rotation.y = -2.618; // -150 grados
    var travesanoSup5 = new THREE.Mesh(travesanoGeo, mMaderaOscura); travesanoSup5.position.set(0, 5.75, -2.165); 
    travesanoSup5.rotation.y = -1.5708; // -90 grados
    var travesanoSup6 = new THREE.Mesh(travesanoGeo, mMaderaOscura); travesanoSup6.position.set(1.875, 5.75, -1.0825);
     travesanoSup6.rotation.y = -0.5236; // -30 grados

    // 🧱 BARANDILLAS
  
    var barraHoriz1_1 = new THREE.Mesh(barandillaHorizontalGeo, mBarandilla); barraHoriz1_1.position.set(1.875, 2.5, 1.0825); 
    barraHoriz1_1.rotation.y = 0.5236;
    var barraHoriz1_2 = new THREE.Mesh(barandillaHorizontalGeo, mBarandilla); barraHoriz1_2.position.set(1.875, 1.5, 1.0825); 
    barraHoriz1_2.rotation.y = 0.5236;
    var vert1_1 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert1_1.position.set(2.0, 2, 1.25);
    var vert1_2 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert1_2.position.set(1.75, 2, 0.9);
    var vert1_3 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert1_3.position.set(1.5, 2, 0.55);

    var barraHoriz2_1 = new THREE.Mesh(barandillaHorizontalGeo, mBarandilla); barraHoriz2_1.position.set(0, 2.5, 2.165); 
    barraHoriz2_1.rotation.y = 1.5708;
    var barraHoriz2_2 = new THREE.Mesh(barandillaHorizontalGeo, mBarandilla); barraHoriz2_2.position.set(0, 1.5, 2.165); 
    barraHoriz2_2.rotation.y = 1.5708;
    var vert2_1 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert2_1.position.set(0.7, 2, 2.2);
    var vert2_2 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert2_2.position.set(0, 2, 2.2);
    var vert2_3 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert2_3.position.set(-0.7, 2, 2.2);

    var barraHoriz3_1 = new THREE.Mesh(barandillaHorizontalGeo, mBarandilla); barraHoriz3_1.position.set(-1.875, 2.5, 1.0825);
     barraHoriz3_1.rotation.y = 2.618;
    var barraHoriz3_2 = new THREE.Mesh(barandillaHorizontalGeo, mBarandilla); barraHoriz3_2.position.set(-1.875, 1.5, 1.0825); 
    
    barraHoriz3_2.rotation.y = 2.618;
    var vert3_1 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert3_1.position.set(-2, 2, 1.25);
    var vert3_2 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert3_2.position.set(-1.75, 2, 0.9);
    var vert3_3 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert3_3.position.set(-1.5, 2, 0.55);
    
    

    var barraHoriz5_1 = new THREE.Mesh(barandillaHorizontalGeo, mBarandilla); barraHoriz5_1.position.set(-1.875, 2.5, -1.0825); 
    
    barraHoriz5_1.rotation.y = -2.618;
    var barraHoriz5_2 = new THREE.Mesh(barandillaHorizontalGeo, mBarandilla); barraHoriz5_2.position.set(-1.875, 1.5, -1.0825); barraHoriz5_2.rotation.y = -2.618;
    var vert5_1 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert5_1.position.set(-2, 2, -1.25);
    var vert5_2 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert5_2.position.set(-1.75, 2, -0.9);
    var vert5_3 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert5_3.position.set(-1.5, 2, -0.55);

    var barraHoriz6_1 = new THREE.Mesh(barandillaHorizontalGeo, mBarandilla); barraHoriz6_1.position.set(0, 2.5, -2.165);
     barraHoriz6_1.rotation.y = -1.5708;
    var barraHoriz6_2 = new THREE.Mesh(barandillaHorizontalGeo, mBarandilla); barraHoriz6_2.position.set(0, 1.5, -2.165); 
    barraHoriz6_2.rotation.y = -1.5708;
    var vert6_1 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert6_1.position.set(0.7, 2, -2.2);
    var vert6_2 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert6_2.position.set(0, 2, -2.2);
    var vert6_3 = new THREE.Mesh(barandillaVerticalGeo, mBarandilla); vert6_3.position.set(-0.7, 2, -2.2);


    //  TEJADO NEVADO 
    var tejadoBase = new THREE.Mesh(tejadoBaseGeo, mTejadoGris); tejadoBase.position.set(0, 5.75, 0); 
    tejadoBase.rotation.y = 0.2618; 
    var tejadoCapa = new THREE.Mesh(tejadoCapaGeo, mTejadoGris); tejadoCapa.position.set(0, 7, 0); 
    tejadoCapa.rotation.y = 0.2618;
    var nieveTejado = new THREE.Mesh(nieveTejadoCapaGeo, mNieve); nieveTejado.position.set(0, 7.1, 0); 
    nieveTejado.rotation.y = 0.2618;

    // Detalle superior del tejado (punta)
    var puntaTejadoGeo = new THREE.ConeGeometry(0.5, 1, 6);
    var puntaTejado = new THREE.Mesh(puntaTejadoGeo, mMaderaOscura); puntaTejado.position.set(0, 8.5, 0);

    //  CORONA NAVIDEÑA
    var corona = new THREE.Mesh(coronaPrincipalGeo, mGuirnaldaVerde); corona.position.set(0, 5.2, 2.8); 
    corona.rotation.z = 1.5708; 
    var lazoCorona = new THREE.Mesh(lazoCoronaGeo, mLazoRojo); lazoCorona.position.set(0, 5.5, 3.8);


    //  AGRUPAR TODO EN EL GRUPO PRINCIPAL
    const MiradorGroup = new THREE.Group();
    MiradorGroup.add(
        baseNieve, basePiedra,
        pilar1, pilar2, pilar3, pilar4, pilar5, pilar6,
        travesanoSup1, travesanoSup2, travesanoSup3, travesanoSup4, travesanoSup5, travesanoSup6,
        barraHoriz1_1, barraHoriz1_2, vert1_1, vert1_2, vert1_3,
        barraHoriz2_1, barraHoriz2_2, vert2_1, vert2_2, vert2_3,
        barraHoriz3_1, barraHoriz3_2, vert3_1, vert3_2, vert3_3,
        // (Espacio de entrada no tiene barandillas)
        barraHoriz5_1, barraHoriz5_2, vert5_1, vert5_2, vert5_3,
        barraHoriz6_1, barraHoriz6_2, vert6_1, vert6_2, vert6_3,
        tejadoBase, tejadoCapa, nieveTejado, puntaTejado,
        corona, lazoCorona
    );

    
    //  POSICIÓN GENERAL 
    MiradorGroup.position.set(x, y, z);
    return MiradorGroup;
}