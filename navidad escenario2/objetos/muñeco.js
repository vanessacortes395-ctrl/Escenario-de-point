import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

    // Materiales
    var mBlanco = new THREE.MeshLambertMaterial({ color: 0xFFFFFF }); // Blanco para la nieve
    var mNegro = new THREE.MeshLambertMaterial({ color: 0x000000 }); // Negro para ojos y botones
    var mNaranja = new THREE.MeshLambertMaterial({ color: 0xFFA500 }); // Naranja para la nariz
    var mRojo = new THREE.MeshLambertMaterial({ color: 0xCC0000 }); // Rojo para el gorro y bufanda
    var mMarron = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); // Marrón para los brazos

    // Bola Inferior
    var gBolaInferior = new THREE.SphereGeometry(1.2, 16, 16);
    var bolaInferior = new THREE.Mesh(gBolaInferior, mBlanco);
    bolaInferior.position.set(0, 1.2, 0);

    // Bola Media
    var gBolaMedia = new THREE.SphereGeometry(0.9, 16, 16);
    var bolaMedia = new THREE.Mesh(gBolaMedia, mBlanco);
    bolaMedia.position.set(0, 2.9, 0); // Encima de la inferior

    // Bola Superior (Cabeza)
    var gBolaSuperior = new THREE.SphereGeometry(0.7, 16, 16);
    var bolaSuperior = new THREE.Mesh(gBolaSuperior, mBlanco);
    bolaSuperior.position.set(0, 4.4, 0); // Encima de la media

    // --- Detalles de la Cara ---

    // Ojo Izquierdo
    var gOjo = new THREE.SphereGeometry(0.1, 8, 8);
    var ojoIzquierdo = new THREE.Mesh(gOjo, mNegro);
    ojoIzquierdo.position.set(0.3, 4.6, 0.65);

    // Ojo Derecho
    var ojoDerecho = new THREE.Mesh(gOjo, mNegro);
    ojoDerecho.position.set(-0.3, 4.6, 0.65);

    // Nariz (Zanahoria)
    var gNariz = new THREE.ConeGeometry(0.15, 0.6, 8);
    var nariz = new THREE.Mesh(gNariz, mNaranja);
    nariz.position.set(0, 4.4, 0.85);
    nariz.rotation.x = 1.57; // Apunta hacia adelante


 // Cuerpo del sombrero
    var gSombrero = new THREE.CylinderGeometry(0.65, 0.65, 0.8, 12); // Radio 0.65 (vs. Cabeza 0.7)
    var sombrero = new THREE.Mesh(gSombrero, mNegro);
    sombrero.position.set(0, 5.15, 0.1); 

    // Ala del sombrero (Radio 0.9, significativamente más ancho que la cabeza 0.7)
    var gAla = new THREE.CylinderGeometry(0.9, 0.9, 0.1, 12); 
    var ala = new THREE.Mesh(gAla, mNegro);
    ala.position.set(0, 4.8, 0.1);

   //  Botones
    var gBoton = new THREE.SphereGeometry(0.15, 8, 8); 

    // Botón 1 
    var boton1 = new THREE.Mesh(gBoton, mNegro);
    boton1.position.set(0, 3.4, 0.95); 

    // Botón 2
    var boton2 = new THREE.Mesh(gBoton, mNegro);
    boton2.position.set(0, 2.9, 0.95); 

    // Botón 3 
    var boton3 = new THREE.Mesh(gBoton, mNegro);
    boton3.position.set(0, 2.0, 1.15); 

    // Botón 4 
    var boton4 = new THREE.Mesh(gBoton, mNegro);
    boton4.position.set(0, 1.5, 1.15); 

    // --- Brazos de Rama ---

    // Brazo Izquierdo
    var gBrazo = new THREE.BoxGeometry(1.2, 0.1, 0.1);
    var brazoIzquierdo = new THREE.Mesh(gBrazo, mMarron);
    brazoIzquierdo.position.set(1.2, 3.5, 0);
    brazoIzquierdo.rotation.z = 0.5;

    // "Dedos" Izquierdos
    var gDedo = new THREE.BoxGeometry(0.3, 0.1, 0.1);
    var dedoIzq1 = new THREE.Mesh(gDedo, mMarron);
    dedoIzq1.position.set(1.9, 3.7, 0);
    dedoIzq1.rotation.z = 1.0;

    // Brazo Derecho
    var brazoDerecho = new THREE.Mesh(gBrazo, mMarron);
    brazoDerecho.position.set(-1.2, 3.5, 0);
    brazoDerecho.rotation.z = -0.5;

   

    // AGRUPAR ELEMENTOS INTERNOS 
    const Muñeco = new THREE.Group();
    Muñeco.add(
        bolaInferior, bolaMedia, bolaSuperior,
        ojoIzquierdo, ojoDerecho, nariz,
        sombrero, ala,
        boton1, boton2,boton3,boton4,
        brazoIzquierdo,
        brazoDerecho,)

    // Posiciona el grupo completo del muñeco
    Muñeco.position.set(x, y, z);
    
    return Muñeco;
}