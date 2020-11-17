/**
 * MyLake
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLake extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
		this.init();
	}
	init() {
		//create materials
		this.waterMaterial = new CGFappearance(this.scene);
		this.waterMaterial.setAmbient(0.5, 0.5, 0.5, 1);
		this.waterMaterial.setDiffuse(0.5, 0.5, 0.5, 1);
		this.waterMaterial.setSpecular(1, 1, 1, 1);
		this.waterMaterial.setShininess(10.0);
		this.waterMaterial.loadTexture('textures/Water.jpeg');
		this.waterMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.quad = new MyQuad(this.scene);
	}
	
	display() {
        this.waterMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(15,0.01,-20);
        this.scene.scale(20,1,20);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
	}
}

