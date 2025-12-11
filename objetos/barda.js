import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

    var BardaGroup = new THREE.Group();

    // --- MATERIALES ---
    var mMaderaBlanca = new THREE.MeshLambertMaterial({ color: 0xFFFFFF }); 
    var mLazoRojo = new THREE.MeshLambertMaterial({ color: 0x990000 }); 
    var mDetalleDorado = new THREE.MeshLambertMaterial({ color: 0xFFD700 }); 

    // --- GEOMETRÍAS REUTILIZABLES ---
    var posteGeo = new THREE.BoxGeometry(0.3, 1.8, 0.3); 
    var topePosteGeo = new THREE.BoxGeometry(0.4, 0.1, 0.4); 
    var rielGeo = new THREE.BoxGeometry(4, 0.2, 0.2); 
    var lazoGeo = new THREE.SphereGeometry(0.25, 8, 8); 


    // Poste Izquierdo
    var poste1 = new THREE.Mesh(posteGeo, mMaderaBlanca); poste1.position.set(-2, 0.9, 0); BardaGroup.add(poste1);
    var tope1 = new THREE.Mesh(topePosteGeo, mDetalleDorado); tope1.position.set(-2, 1.85, 0); BardaGroup.add(tope1);

    // Poste Central
    var poste2 = new THREE.Mesh(posteGeo, mMaderaBlanca); poste2.position.set(0, 0.9, 0); BardaGroup.add(poste2);
    var tope2 = new THREE.Mesh(topePosteGeo, mDetalleDorado); tope2.position.set(0, 1.85, 0); BardaGroup.add(tope2);

    // Poste Derecho
    var poste3 = new THREE.Mesh(posteGeo, mMaderaBlanca); poste3.position.set(2, 0.9, 0); BardaGroup.add(poste3);
    var tope3 = new THREE.Mesh(topePosteGeo, mDetalleDorado); tope3.position.set(2, 1.85, 0); BardaGroup.add(tope3);

    
    // Riel Superior Izquierdo
    var rielSupIzq = new THREE.Mesh(rielGeo, mMaderaBlanca);
    rielSupIzq.position.set(-1, 1.5, 0);
    rielSupIzq.scale.x = 0.5; 
    BardaGroup.add(rielSupIzq);

    // Riel Superior Derecho
    var rielSupDer = new THREE.Mesh(rielGeo, mMaderaBlanca);
    rielSupDer.position.set(1, 1.5, 0);
    rielSupDer.scale.x = 0.5; 
    BardaGroup.add(rielSupDer);

    // Riel Inferior 
    var rielInf = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.2, 0.2), mMaderaBlanca);
    rielInf.position.set(0, 0.2, 0);
    BardaGroup.add(rielInf);
    
    // Lazos en los postes
    var lazo1 = new THREE.Mesh(lazoGeo, mLazoRojo); lazo1.position.set(-2, 1.5, 0.2); BardaGroup.add(lazo1);
    var lazo2 = new THREE.Mesh(lazoGeo, mLazoRojo); lazo2.position.set(0, 1.5, 0.2); BardaGroup.add(lazo2);
    var lazo3 = new THREE.Mesh(lazoGeo, mLazoRojo); lazo3.position.set(2, 1.5, 0.2); BardaGroup.add(lazo3);

// --- AGRUPAR TODO ---
    BardaGroup.add(
        poste1, tope1,
        poste2, tope2,
        poste3, tope3,
        rielSupIzq, rielSupDer, rielInf,
        lazo1, lazo2, lazo3
    );

    BardaGroup.position.set(x, y, z);
    return BardaGroup;
}
