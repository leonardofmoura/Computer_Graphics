/**
 * MyLightingUnit
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightningUnit extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
        
        
        this.quad = new MyQuad(this.scene);

        this.initMaterial();
    }

    initMaterial() {
        this.lightningMaterial = new CGFappearance(this.scene);
		this.lightningMaterial.setAmbient(0.8, 0.8, 1.0, 1);
		this.lightningMaterial.setDiffuse(0.8, 0.8, 1.0, 1);
		this.lightningMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.lightningMaterial.setShininess(120);
		this.lightningMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }
    
    display() {
        this.lightningMaterial.apply();
        this.scene.pushMatrix();
        this.scene.scale(0.1,1,0.05)
        this.quad.display();
        this.scene.popMatrix();
    }
}
