import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

    var EntradaGroup = new THREE.Group();

    // --- MATERIALES ---
    var mNieve = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var mMaderaPoste = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); 
    var mLetreroFondo = new THREE.MeshLambertMaterial({ color: 0x228B22 }); 
    var mLetreroTexto = new THREE.MeshLambertMaterial({ color: 0xFFFFFF }); 
    var mLuzFoco = new THREE.MeshLambertMaterial({ color: 0xFFFF00 }); 
    var mCable = new THREE.MeshLambertMaterial({ color: 0x000000 }); 

   

    // --- POSTES DE SOPORTE ---
    var posteGeo = new THREE.CylinderGeometry(0.3, 0.3, 10, 8); 
    var basePosteGeo = new THREE.BoxGeometry(1, 0.5, 1); 

    // Poste Izquierdo
    var posteIzquierdo = new THREE.Mesh(posteGeo, mMaderaPoste); posteIzquierdo.position.set(-4, 5, 0); EntradaGroup.add(posteIzquierdo);
    var basePosteIzquierdo = new THREE.Mesh(basePosteGeo, mMaderaPoste); basePosteIzquierdo.position.set(-4, 0.5, 0); EntradaGroup.add(basePosteIzquierdo);

    // Poste Derecho
    var posteDerecho = new THREE.Mesh(posteGeo, mMaderaPoste); posteDerecho.position.set(4, 5, 0); EntradaGroup.add(posteDerecho);
    var basePosteDerecho = new THREE.Mesh(basePosteGeo, mMaderaPoste); basePosteDerecho.position.set(4, 0.5, 0); EntradaGroup.add(basePosteDerecho);

    // --- TRAVESAÑO SUPERIOR 
    var travesanoGeo = new THREE.BoxGeometry(8.5, 0.4, 0.4);
    var travesano = new THREE.Mesh(travesanoGeo, mMaderaPoste);
    travesano.position.set(0, 9.8, 0);
    EntradaGroup.add(travesano);

    // --- LETRERO "CHRISTMAS MARKETS" ---
    var letreroFondoGeo = new THREE.BoxGeometry(7, 1.5, 0.1);
    var letreroFondo = new THREE.Mesh(letreroFondoGeo, mLetreroFondo);
    letreroFondo.position.set(0, 9, 0.2); 
    EntradaGroup.add(letreroFondo);

    var textoGeo = new THREE.BoxGeometry(0.2, 0.8, 0.1); 

    // "CHRISTMAS"
    var c1 = new THREE.Mesh(textoGeo, mLetreroTexto); c1.position.set(-3.2, 9, 0.25); EntradaGroup.add(c1);
    var h1 = new THREE.Mesh(textoGeo, mLetreroTexto); h1.position.set(-2.8, 9, 0.25); EntradaGroup.add(h1);
    var r1 = new THREE.Mesh(textoGeo, mLetreroTexto); r1.position.set(-2.4, 9, 0.25); EntradaGroup.add(r1);
    var i1 = new THREE.Mesh(textoGeo, mLetreroTexto); i1.position.set(-2.0, 9, 0.25); EntradaGroup.add(i1);
    var s1 = new THREE.Mesh(textoGeo, mLetreroTexto); s1.position.set(-1.6, 9, 0.25); EntradaGroup.add(s1);
    var t1 = new THREE.Mesh(textoGeo, mLetreroTexto); t1.position.set(-1.2, 9, 0.25); EntradaGroup.add(t1);
    var m1 = new THREE.Mesh(textoGeo, mLetreroTexto); m1.position.set(-0.8, 9, 0.25); EntradaGroup.add(m1);
    var a1 = new THREE.Mesh(textoGeo, mLetreroTexto); a1.position.set(-0.4, 9, 0.25); EntradaGroup.add(a1);
    var s2 = new THREE.Mesh(textoGeo, mLetreroTexto); s2.position.set(0, 9, 0.25); EntradaGroup.add(s2);

    // "MARKETS"
    var m2 = new THREE.Mesh(textoGeo, mLetreroTexto); m2.position.set(0.6, 9, 0.25); EntradaGroup.add(m2);
    var a2 = new THREE.Mesh(textoGeo, mLetreroTexto); a2.position.set(1.0, 9, 0.25); EntradaGroup.add(a2);
    var r2 = new THREE.Mesh(textoGeo, mLetreroTexto); r2.position.set(1.4, 9, 0.25); EntradaGroup.add(r2);
    var k1 = new THREE.Mesh(textoGeo, mLetreroTexto); k1.position.set(1.8, 9, 0.25); EntradaGroup.add(k1);
    var e1 = new THREE.Mesh(textoGeo, mLetreroTexto); e1.position.set(2.2, 9, 0.25); EntradaGroup.add(e1);
    var t2 = new THREE.Mesh(textoGeo, mLetreroTexto); t2.position.set(2.6, 9, 0.25); EntradaGroup.add(t2);
    var s3 = new THREE.Mesh(textoGeo, mLetreroTexto); s3.position.set(3.0, 9, 0.25); EntradaGroup.add(s3);


    // --- LUCES COLGANTES ---
    var luzGeo = new THREE.SphereGeometry(0.2, 8, 8); 

    // Cable principal (cilindro delgado)
    var cablePrincipalGeo = new THREE.CylinderGeometry(0.05, 0.05, 8, 4);
    var cablePrincipal = new THREE.Mesh(cablePrincipalGeo, mCable);
    cablePrincipal.rotation.z = 1.5708; 
    cablePrincipal.position.set(0, 10, 0);
    EntradaGroup.add(cablePrincipal);

    // Luces (5 luces espaciadas)
    var luz1 = new THREE.Mesh(luzGeo, mLuzFoco); luz1.position.set(-3, 10, 0); EntradaGroup.add(luz1);
    var luz2 = new THREE.Mesh(luzGeo, mLuzFoco); luz2.position.set(-1, 10, 0); EntradaGroup.add(luz2);
    var luz3 = new THREE.Mesh(luzGeo, mLuzFoco); luz3.position.set(1, 10, 0); EntradaGroup.add(luz3);
    var luz4 = new THREE.Mesh(luzGeo, mLuzFoco); luz4.position.set(3, 10, 0); EntradaGroup.add(luz4);
    var luz5 = new THREE.Mesh(luzGeo, mLuzFoco); luz5.position.set(-5, 10, 0); EntradaGroup.add(luz5);
    var luz6 = new THREE.Mesh(luzGeo, mLuzFoco); luz6.position.set(5, 10, 0); EntradaGroup.add(luz6); 


    // --- AGRUPAR TODO ---
    EntradaGroup.add(
        posteIzquierdo, basePosteIzquierdo,
        posteDerecho, basePosteDerecho,
        travesano,
        letreroFondo,
        c1, h1, r1, i1, s1, t1, m1, a1, s2, 
        m2, a2, r2, k1, e1, t2, s3,
        cablePrincipal,
        luz1, luz2, luz3, luz4, luz5, luz6
    );


    EntradaGroup.position.set(x, y, z);
    return EntradaGroup;
}
